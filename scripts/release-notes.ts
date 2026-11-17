import readChangesets from '@changesets/read';
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Changeset = Awaited<ReturnType<typeof readChangesets>>[number];
type Bump = Changeset['releases'][number]['type'];

const CHANGESET_DIR = '.changeset';
const DEFAULT_CHANGELOG = 'CHANGELOG.md';
const NO_CHANGES = 'This release has no user-facing changes.';

const BUMP_ORDER: Bump[] = ['major', 'minor', 'patch'];

const BUMP_HEADINGS: Record<Bump, string> = {
  major: 'Breaking changes',
  minor: 'New',
  patch: 'Fixed',
  none: '',
};

type Notes = Map<Bump, string[]>;

function flag(args: string[], name: string): string | undefined {
  const index = args.indexOf(name);
  if (index === -1) {
    return undefined;
  }
  const value = args[index + 1];
  if (value === undefined || value.startsWith('--')) {
    throw new Error(`${name} needs a value`);
  }
  return value;
}

function levelFlag(args: string[]): number {
  const level = Number(flag(args, '--level') ?? '3');
  if (!Number.isInteger(level) || level < 1) {
    throw new Error('--level must be a positive integer');
  }
  return level;
}

function requiredFlag(args: string[], name: string): string {
  const value = flag(args, name);
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

function hasBump(changeset: Changeset): boolean {
  return changeset.releases.some(entry => entry.type !== 'none');
}

function checkChangesets(changesets: Changeset[]): Changeset[] {
  changesets.forEach(changeset => {
    const hasText = changeset.summary.trim().length > 0;
    if (hasText && !hasBump(changeset)) {
      throw new Error(
        `${CHANGESET_DIR}/${changeset.id}.md has text but no package and bump; add them to the file or delete it and run bun run changeset`,
      );
    }
    if (!hasText && hasBump(changeset)) {
      throw new Error(
        `${CHANGESET_DIR}/${changeset.id}.md has a bump but no text; write the note in the file or delete it and run bun run changeset -- --empty`,
      );
    }
  });
  return changesets;
}

async function readValidChangesets(): Promise<Changeset[]> {
  return checkChangesets(await readChangesets(process.cwd()));
}

function collectNotes(changesets: Changeset[]): Notes {
  const notes: Notes = new Map();
  changesets
    .filter(changeset => changeset.summary.trim())
    .forEach(changeset => {
      changeset.releases
        .filter(entry => entry.type !== 'none')
        .forEach(entry => {
          const list = notes.get(entry.type) ?? [];
          list.push(changeset.summary.trim());
          notes.set(entry.type, list);
        });
    });
  return notes;
}

function highestBump(changesets: Changeset[]): Bump | undefined {
  const bumps = new Set(
    changesets
      .filter(changeset => changeset.summary.trim())
      .flatMap(changeset => changeset.releases.map(entry => entry.type)),
  );
  return BUMP_ORDER.find(bump => bumps.has(bump));
}

function bumpVersion(current: string, bump: Bump): string {
  const match = /^v?(\d+)\.(\d+)\.(\d+)$/.exec(current);
  if (!match) {
    throw new Error(`${current} is not a MAJOR.MINOR.PATCH version`);
  }
  const [major, minor, patch] = match.slice(1).map(Number);
  switch (bump) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      return current;
  }
}

function bullet(summary: string): string {
  const [first, ...rest] = summary.split('\n');
  return [`- ${first}`, ...rest.map(line => (line ? `  ${line}` : ''))].join(
    '\n',
  );
}

function renderNotes(notes: Notes, level: number): string {
  const heading = '#'.repeat(level);
  return BUMP_ORDER.filter(bump => notes.has(bump))
    .map(bump =>
      [
        `${heading} ${BUMP_HEADINGS[bump]}`,
        '',
        ...(notes.get(bump) ?? []).map(bullet),
      ].join('\n'),
    )
    .join('\n\n');
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function sectionPattern(version: string): RegExp {
  const escaped = version.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^## ${escaped}(?: - .*)?$`, 'm');
}

interface Section {
  start: number;
  end: number;
  headingEnd: number;
}

function findSection(changelog: string, version: string): Section | null {
  const match = sectionPattern(version).exec(changelog);
  if (!match) {
    return null;
  }
  const start = match.index;
  const headingEnd = start + match[0].length;
  const next = changelog.slice(headingEnd).search(/^## /m);
  const end = next === -1 ? changelog.length : headingEnd + next;
  return { start, end, headingEnd };
}

function insertSection(changelog: string, section: string): string {
  const firstSection = changelog.search(/^## /m);
  if (firstSection === -1) {
    return `${changelog.trimEnd()}\n\n${section}\n`;
  }
  return `${changelog.slice(0, firstSection)}${section}\n\n${changelog.slice(firstSection)}`;
}

function appendToSection(
  changelog: string,
  existing: Section,
  body: string,
): string {
  const current = changelog.slice(existing.start, existing.end).trimEnd();
  const merged = current.endsWith(NO_CHANGES)
    ? `${current.slice(0, -NO_CHANGES.length).trimEnd()}\n\n${body}`
    : `${current}\n\n${body}`;
  return `${changelog.slice(0, existing.start)}${merged}\n\n${changelog.slice(existing.end).trimStart()}`;
}

async function pending(args: string[]): Promise<void> {
  const notes = collectNotes(await readValidChangesets());
  const rendered = renderNotes(notes, levelFlag(args));
  console.log(
    rendered || 'No release notes are waiting since the last release.',
  );
}

async function nextVersion(args: string[]): Promise<void> {
  const current = requiredFlag(args, '--current');
  const bump = highestBump(await readValidChangesets());
  if (!bump) {
    return;
  }
  console.log(bumpVersion(current, bump));
}

async function release(args: string[]): Promise<void> {
  const version = requiredFlag(args, '--version');
  const date = flag(args, '--date') ?? today();
  const changelogPath = flag(args, '--changelog') ?? DEFAULT_CHANGELOG;
  const changesets = await readValidChangesets();
  const body = renderNotes(collectNotes(changesets), 3);

  const changelog = readFileSync(changelogPath, 'utf8');
  const existing = findSection(changelog, version);
  let updated: string;
  if (existing && body) {
    updated = appendToSection(changelog, existing, body);
  } else if (existing) {
    updated = changelog;
  } else {
    updated = insertSection(
      changelog,
      `## ${version} - ${date}\n\n${body || NO_CHANGES}`,
    );
  }
  writeFileSync(changelogPath, updated);

  changesets.forEach(changeset => {
    rmSync(join(CHANGESET_DIR, `${changeset.id}.md`));
  });

  const section = findSection(updated, version);
  console.log(
    section ? updated.slice(section.headingEnd, section.end).trim() : '',
  );
}

function show(args: string[]): void {
  const version = requiredFlag(args, '--version');
  const changelogPath = flag(args, '--changelog') ?? DEFAULT_CHANGELOG;
  const changelog = readFileSync(changelogPath, 'utf8');
  const section = findSection(changelog, version);
  if (!section) {
    throw new Error(`${changelogPath} has no section for ${version}`);
  }
  console.log(changelog.slice(section.headingEnd, section.end).trim());
}

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);
  switch (command) {
    case 'pending':
      await pending(args);
      return;
    case 'next-version':
      await nextVersion(args);
      return;
    case 'release':
      await release(args);
      return;
    case 'show':
      show(args);
      return;
    default:
      throw new Error(
        'Usage: bun scripts/release-notes.ts <pending [--level 3] | next-version --current X.Y.Z | release --version <version> [--date YYYY-MM-DD] [--changelog path] | show --version <version> [--changelog path]>',
      );
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
