import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';
import { parse } from 'yaml';
import { applyIssueEdits, loadIssues, validateIssueInput } from './issue-editor-lib.mjs';

const root = process.cwd();
const identity = (issue) => ({
  dek: issue.dek,
  metaDescription: issue.metaDescription,
  rssTitle: issue.rssTitle,
  sections: issue.sections.map((section) => section.title),
  reason: issue.reason,
  video: issue.video,
  readings: issue.readings
});

test('writing every value back unchanged leaves the file byte for byte identical', async () => {
  const issues = await loadIssues(root);
  assert.ok(issues.length > 0, 'expected issue files to load');

  for (const issue of issues) {
    const file = path.join(root, 'src/content/issues', `${issue.id}.md`);
    const source = await readFile(file, 'utf8');
    assert.equal(
      applyIssueEdits(source, issue.id, identity(issue), issue),
      source,
      `${issue.id} changed on an identity edit`
    );
  }
});

test('a rewritten value stays valid YAML when it opens with a quote', () => {
  const source = [
    '---',
    "dek: 'A dek that is long enough to be plausible and says something about the week ahead.'",
    'rss:',
    '  title: Something',
    'sections:',
    '  - eyebrow: New Discoveries',
    '    title: A title',
    '    apps: [one]',
    'readings:',
    '  - title: "\'Obvious\' App Store Ratings Fraud"',
    '    publication: 9to5Mac',
    '    description: A description that runs long enough to clear the schema floor for one.',
    '    url: https://example.com/',
    '---',
    ''
  ].join('\n');

  const issue = {
    id: '2026-01-02',
    dek: "A dek that is long enough to be plausible and says something about the week ahead.",
    metaDescription: '',
    rssTitle: 'Something',
    sections: [{ eyebrow: 'New Discoveries', title: 'A title' }],
    reason: null,
    video: null,
    readings: [{
      title: "'Obvious' App Store Ratings Fraud",
      publication: '9to5Mac',
      description: 'A description that runs long enough to clear the schema floor for one.'
    }]
  };

  const edited = applyIssueEdits(source, issue.id, {
    ...identity(issue),
    readings: [{ ...issue.readings[0], title: "'Obvious' App Store Ratings Fraud, Apple Says" }]
  }, issue);

  const parsed = parse(edited.match(/^---\n([\s\S]*?)\n---/)[1]);
  assert.equal(parsed.readings[0].title, "'Obvious' App Store Ratings Fraud, Apple Says");
  /* The plain-looking value beside it must not have been quoted for nothing. */
  assert.match(edited, /^ {4}publication: 9to5Mac$/m);
});

test('the limits that would break the build are rejected', async () => {
  const [issue] = await loadIssues(root);
  /* Long enough in characters, so it reaches the word check rather than stopping at the
     length one. Forty six words against a ceiling of forty five. */
  const tooManyWords = validateIssueInput(
    { ...identity(issue), dek: `${'one two six ten '.repeat(12)}plus two more words.`.trim() },
    issue
  );
  assert.match(tooManyWords.dek, /18 to 45 words/);

  const tooShort = validateIssueInput({ ...identity(issue), dek: 'Far too short to pass.' }, issue);
  assert.match(tooShort.dek, /at least 80 characters/);

  const dashed = validateIssueInput(
    { ...identity(issue), dek: 'This is a plausible standfirst for a weekly issue — it carries a dash on purpose, here too.' },
    issue
  );
  assert.match(dashed.dek, /dash/);

  assert.deepEqual(validateIssueInput(identity(issue), issue), {});
});

test('a search description is added before rss, rewritten in place and removed when cleared', () => {
  const source = [
    '---',
    'dek: A dek that is long enough to be plausible and says something about the week ahead.',
    'rss:',
    '  title: Something',
    'sections:',
    '  - eyebrow: New Discoveries',
    '    title: A title',
    '    apps: [one]',
    'readings: []',
    '---',
    ''
  ].join('\n');
  const issue = {
    id: '2026-01-02',
    dek: 'A dek that is long enough to be plausible and says something about the week ahead.',
    metaDescription: '',
    rssTitle: 'Something',
    sections: [{ eyebrow: 'New Discoveries', title: 'A title' }],
    reason: null,
    video: null,
    readings: []
  };
  const meta = 'A search description that is long enough to clear the seventy character floor.';

  const added = applyIssueEdits(source, issue.id, { ...identity(issue), metaDescription: meta }, issue);
  assert.match(added, new RegExp(`^metaDescription: ${meta}\\nrss:$`, 'm'));

  const rewritten = applyIssueEdits(added, issue.id, { ...identity(issue), metaDescription: `${meta} Again.` }, { ...issue, metaDescription: meta });
  assert.equal(rewritten.match(/^metaDescription:/gm).length, 1);
  assert.match(rewritten, /Again\.$/m);

  const cleared = applyIssueEdits(added, issue.id, identity(issue), { ...issue, metaDescription: meta });
  assert.equal(cleared, source);
});

test('a quoted reading or video title keeps its own dash, as the build allows', async () => {
  const [issue] = await loadIssues(root);
  const readings = issue.readings.map((reading, index) => index === 0 ? { ...reading, title: 'Mac Apps \u2014 A Source Title' } : reading);
  assert.deepEqual(validateIssueInput({ ...identity(issue), readings }, issue), {});
});
