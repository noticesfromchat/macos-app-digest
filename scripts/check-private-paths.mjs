import { execFileSync } from 'node:child_process';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
/* `.git` is invisible to `git ls-files`, so it has to be named. The rest are already
   covered by .gitignore and stay here only to keep the walk short when git cannot be
   asked and every ignored path is being scanned. */
const ignoredDirectories = new Set([
  '.astro',
  '.git',
  '.netlify',
  'dist',
  'node_modules',
]);
/* Vendored skill sources. These are tracked, so git has nothing to say about them,
   and they carry absolute paths in their own documentation and fixtures. */
const ignoredPrefixes = [
  '.github/skills/',
  '.agents/skills/impeccable/',
];

/* What git will never commit cannot leak, so the check defers to .gitignore instead of
   keeping a second list of the same files. That list had reached three entries — the
   hook cache, the pending file and the local config — each a separate note making the
   same point: this file is ignored. `.impeccable/critique/` was about to be the fourth,
   and the comment beside the other three had gone stale in the meantime, still calling
   the critique reports tracked after .gitignore started excluding them. The reports
   live in Notion; the snapshots on disk are the skill's own state.

   Directories that git reports as wholly ignored come back with a trailing slash and
   have their subtree skipped. If git cannot answer — no repository, no git on PATH —
   the set is empty and everything is scanned, which is the safe direction to fail. */
function gitIgnoredEntries() {
  try {
    const output = execFileSync(
      'git',
      ['ls-files', '-z', '--others', '--ignored', '--exclude-standard', '--directory'],
      { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    );
    return new Set(output.split('\0').filter(Boolean));
  } catch {
    return new Set();
  }
}

const gitIgnored = gitIgnoredEntries();
const textExtensions = new Set([
  '.astro', '.css', '.html', '.js', '.json', '.md', '.mjs', '.toml',
  '.ts', '.txt', '.yaml', '.yml',
]);
const privatePathPatterns = [
  /\/Users\/(?!Shared(?:\/|$))[^/\s)>'"]+/g,
  /\/home\/[^/\s)>'"]+/g,
  /[A-Za-z]:\\Users\\[^\\\s)>'"]+/g,
];
const findings = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(root, absolutePath).split(path.sep).join('/');
    if (ignoredPrefixes.some((prefix) => relativePath.startsWith(prefix))) continue;
    if (gitIgnored.has(entry.isDirectory() ? `${relativePath}/` : relativePath)) continue;

    if (entry.isDirectory()) {
      await walk(absolutePath);
      continue;
    }

    if (!entry.isFile() || !textExtensions.has(path.extname(entry.name))) continue;

    const lines = (await readFile(absolutePath, 'utf8')).split('\n');
    for (const [index, line] of lines.entries()) {
      for (const pattern of privatePathPatterns) {
        pattern.lastIndex = 0;
        for (const match of line.matchAll(pattern)) {
          findings.push(`${relativePath}:${index + 1}: ${match[0]}`);
        }
      }
    }
  }
}

await walk(root);

if (findings.length) {
  console.error('Repository privacy check failed: machine-specific home paths found.');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log('Repository privacy check passed.');
