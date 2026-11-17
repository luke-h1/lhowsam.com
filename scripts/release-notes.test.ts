import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { beforeEach, describe, expect, it } from 'vitest';

const script = join(process.cwd(), 'scripts/release-notes.ts');

let repo: string;

function run(...args: string[]): string {
  const result = spawnSync('bun', [script, ...args], {
    cwd: repo,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(result.stderr);
  }
  return result.stdout;
}

function fails(...args: string[]): string {
  const result = spawnSync('bun', [script, ...args], {
    cwd: repo,
    encoding: 'utf8',
  });
  expect(result.status).toBe(1);
  return result.stderr.trim();
}

function addChangeset(name: string, bump: string | null, summary = ''): void {
  const frontMatter = bump
    ? `---\n'lhowsam.com': ${bump}\n---\n`
    : '---\n---\n';
  writeFileSync(
    join(repo, '.changeset', `${name}.md`),
    `${frontMatter}\n${summary}\n`,
  );
}

function changesetFiles(): string[] {
  return spawnSync('ls', ['.changeset'], { cwd: repo, encoding: 'utf8' })
    .stdout.trim()
    .split('\n')
    .filter(Boolean);
}

beforeEach(() => {
  repo = mkdtempSync(join(tmpdir(), 'release-notes-'));
  mkdirSync(join(repo, '.changeset'));
  writeFileSync(
    join(repo, '.changeset', 'config.json'),
    JSON.stringify({ baseBranch: 'dev', changelog: false }),
  );
  writeFileSync(
    join(repo, 'package.json'),
    JSON.stringify({ name: 'lhowsam.com', version: '1.2.3' }),
  );
  writeFileSync(join(repo, 'CHANGELOG.md'), '# Changelog\n');
});

describe('next-version', () => {
  it('prints nothing when no changeset is waiting', () => {
    expect(run('next-version', '--current', '1.2.3')).toBe('');
  });

  it('prints nothing when only empty changesets are waiting', () => {
    addChangeset('empty', null);
    expect(run('next-version', '--current', '1.2.3')).toBe('');
  });

  it('takes the highest bump', () => {
    addChangeset('fix', 'patch', 'Fix the footer.');
    addChangeset('feature', 'minor', 'Add a blog.');
    expect(run('next-version', '--current', '1.2.3')).toBe('1.3.0\n');
  });

  it('bumps the major version', () => {
    addChangeset('breaking', 'major', 'Drop the old feed.');
    expect(run('next-version', '--current', 'v1.2.3')).toBe('2.0.0\n');
  });

  it('ignores a bump with no text', () => {
    addChangeset('blank', 'major', '   ');
    addChangeset('fix', 'patch', 'Fix the footer.');
    expect(run('next-version', '--current', '1.2.3')).toBe('1.2.4\n');
  });

  it('rejects a flag with no value', () => {
    expect(fails('next-version', '--current')).toBe('--current needs a value');
  });
});

describe('pending', () => {
  it('groups the notes under the bump headings', () => {
    addChangeset('fix', 'patch', 'Fix the footer.');
    addChangeset('feature', 'minor', 'Add a blog.');
    expect(run('pending')).toBe(
      '### New\n\n- Add a blog.\n\n### Fixed\n\n- Fix the footer.\n',
    );
  });

  it('rejects a level that is not a positive integer', () => {
    expect(fails('pending', '--level', '0')).toBe(
      '--level must be a positive integer',
    );
    expect(fails('pending', '--level')).toBe('--level needs a value');
  });
});

describe('show', () => {
  it('prints the body of a recorded section', () => {
    writeFileSync(
      join(repo, 'CHANGELOG.md'),
      '# Changelog\n\n## 1.2.4 - 2026-01-02\n\n### Fixed\n\n- New fix.\n\n## 1.2.3 - 2025-12-01\n\n### Fixed\n\n- Old fix.\n',
    );
    expect(run('show', '--version', '1.2.4')).toBe('### Fixed\n\n- New fix.\n');
  });

  it('fails when the section is missing', () => {
    expect(fails('show', '--version', '9.9.9')).toBe(
      'CHANGELOG.md has no section for 9.9.9',
    );
  });
});

describe('release', () => {
  it('writes a section into the changelog and removes the files', () => {
    addChangeset('fix', 'patch', 'Fix the footer.');
    addChangeset('feature', 'minor', 'Add a blog.');
    addChangeset('breaking', 'major', 'Drop the old feed.\n\nUse the new one.');
    addChangeset('empty', null);

    const output = run('release', '--version', '2.0.0', '--date', '2026-01-02');

    const changelog = readFileSync(join(repo, 'CHANGELOG.md'), 'utf8');
    expect(changelog).toBe(
      [
        '# Changelog',
        '',
        '## 2.0.0 - 2026-01-02',
        '',
        '### Breaking changes',
        '',
        '- Drop the old feed.',
        '',
        '  Use the new one.',
        '',
        '### New',
        '',
        '- Add a blog.',
        '',
        '### Fixed',
        '',
        '- Fix the footer.',
        '',
      ].join('\n'),
    );
    expect(output).toBe(changelog.slice('# Changelog\n\n'.length));
    expect(changesetFiles()).toEqual(['config.json']);
  });

  it('inserts the new section above the previous one', () => {
    writeFileSync(
      join(repo, 'CHANGELOG.md'),
      '# Changelog\n\n## 1.2.3 - 2025-12-01\n\n### Fixed\n\n- Old fix.\n',
    );
    addChangeset('fix', 'patch', 'Fix the footer.');

    run('release', '--version', '1.2.4', '--date', '2026-01-02');

    expect(readFileSync(join(repo, 'CHANGELOG.md'), 'utf8')).toBe(
      [
        '# Changelog',
        '',
        '## 1.2.4 - 2026-01-02',
        '',
        '### Fixed',
        '',
        '- Fix the footer.',
        '',
        '## 1.2.3 - 2025-12-01',
        '',
        '### Fixed',
        '',
        '- Old fix.',
        '',
      ].join('\n'),
    );
  });

  it('appends to an existing section for the same version', () => {
    writeFileSync(
      join(repo, 'CHANGELOG.md'),
      '# Changelog\n\n## 1.2.4 - 2026-01-02\n\n### Fixed\n\n- First fix.\n',
    );
    addChangeset('fix', 'patch', 'Second fix.');

    run('release', '--version', '1.2.4', '--date', '2026-01-03');

    expect(readFileSync(join(repo, 'CHANGELOG.md'), 'utf8')).toBe(
      [
        '# Changelog',
        '',
        '## 1.2.4 - 2026-01-02',
        '',
        '### Fixed',
        '',
        '- First fix.',
        '',
        '### Fixed',
        '',
        '- Second fix.',
        '',
        '',
      ].join('\n'),
    );
  });

  it('records a release with only empty changesets', () => {
    addChangeset('empty', null);

    run('release', '--version', '1.2.4', '--date', '2026-01-02');

    expect(readFileSync(join(repo, 'CHANGELOG.md'), 'utf8')).toBe(
      '# Changelog\n\n## 1.2.4 - 2026-01-02\n\nThis release has no user-facing changes.\n',
    );
    expect(changesetFiles()).toEqual(['config.json']);
  });
});
