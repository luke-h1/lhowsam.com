import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const scriptPath = path.resolve(
  process.cwd(),
  'scripts/export-sanity-content.mjs',
);

test('exporter includes markdown content for blog posts and projects', async () => {
  const script = await readFile(scriptPath, 'utf8');

  assert.match(script, /blogPosts:\s*`[\s\S]*?\bcontent\b[\s\S]*?`/);
  assert.match(script, /projects:\s*`[\s\S]*?\bcontent\b[\s\S]*?`/);
  assert.match(script, /experience:\s*`[\s\S]*?\bcontent\b[\s\S]*?`/);
});

test('project export is not restricted to a hard-coded title subset', async () => {
  const script = await readFile(scriptPath, 'utf8');

  assert.doesNotMatch(script, /title in \[/);
});
