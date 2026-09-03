import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const ignoredDirectories = new Set([
  '.astro',
  '.git',
  '.netlify',
  'dist',
  'node_modules',
]);
const ignoredPrefixes = [
  '.github/skills/',
  '.agents/skills/impeccable/',
  /* Impeccable's local state. The skill records absolute paths in these and adds
     them to .git/info/exclude itself, so they are never committed and the check
     has nothing to protect here. Its critique reports are not on this list: those
     are tracked, and must carry repository-relative paths like anything else. */
  '.impeccable/hook.cache.json',
  '.impeccable/hook.pending.json',
  '.impeccable/config.local.json',
];
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
