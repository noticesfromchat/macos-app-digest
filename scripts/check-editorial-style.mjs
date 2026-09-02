import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const checkedRoots = ['src/content', 'src/pages', 'src/components', 'src/layouts', 'src/data'];
const checkedExtensions = new Set(['.astro', '.md', '.ts']);
const oxfordCommaPattern = /\b[\w'’-]+(?:\s+[\w'’-]+)*,\s+[^,\n]+,\s+(?:and|or)\b/i;

/* The Plain Dash Rule, checked wherever reader-facing copy is written rather than in
   `src/content` alone. Scanning only content used to stand in for the rule's three
   exemptions, which meant copy authored straight into a component or a layout was
   never checked at all. The exemptions are expressed directly now, so the check can
   reach every root:

   - Code comments are not copy. Block, line and HTML comments are stripped before a
     line is tested, and block state carries across lines so a dash inside a multi-line
     comment stays exempt.
   - Page-title separators are an indexed SEO convention, so a line assigning or
     passing a `title` keeps its dash, in frontmatter (`title:`) and in markup or code
     (`title=`, `title = `) alike.
   - Quoted external titles keep the source's own punctuation, which the same `title`
     exemption covers.

   See The Plain Dash Rule in DESIGN.md and Editorial punctuation in
   docs/STYLE_GUIDE.md. */
const editorialDashPattern = /[—–]/;
const titleExemptionPattern = /(?:^|[\s{[(])title\s*[:=]/i;
const errors = [];

/* Returns the line with comment spans blanked out, plus the block-comment state to
   carry into the next line. Blanking rather than dropping keeps column meaning intact
   and leaves any real copy sharing the line still testable. */
function stripComments(line, state) {
  let output = '';
  let index = 0;
  let inBlock = state.inBlock;
  let inHtml = state.inHtml;

  while (index < line.length) {
    const rest = line.slice(index);

    if (inBlock) {
      const close = rest.indexOf('*/');
      if (close === -1) return { text: output, state: { inBlock: true, inHtml } };
      index += close + 2;
      inBlock = false;
      continue;
    }

    if (inHtml) {
      const close = rest.indexOf('-->');
      if (close === -1) return { text: output, state: { inBlock, inHtml: true } };
      index += close + 3;
      inHtml = false;
      continue;
    }

    if (rest.startsWith('/*')) {
      inBlock = true;
      index += 2;
      continue;
    }

    if (rest.startsWith('<!--')) {
      inHtml = true;
      index += 4;
      continue;
    }

    /* A line comment, but not the `//` inside a URL. */
    if (rest.startsWith('//') && line[index - 1] !== ':') {
      return { text: output, state: { inBlock, inHtml } };
    }

    output += line[index];
    index += 1;
  }

  return { text: output, state: { inBlock, inHtml } };
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(absolute);
      continue;
    }

    if (!checkedExtensions.has(path.extname(entry.name))) continue;

    const relative = path.relative(root, absolute);
    const lines = (await readFile(absolute, 'utf8')).split(/\r?\n/);
    let state = { inBlock: false, inHtml: false };

    lines.forEach((line, index) => {
      const stripped = stripComments(line, state);
      const copy = stripped.text;
      state = stripped.state;

      if (oxfordCommaPattern.test(copy)) {
        errors.push(`${relative}:${index + 1}: avoid Oxford commas in public editorial copy`);
      }

      if (editorialDashPattern.test(copy) && !titleExemptionPattern.test(copy)) {
        errors.push(
          `${relative}:${index + 1}: avoid em dashes and en dashes in public editorial copy; use a period, a comma, a colon, parentheses or a plain hyphen`
        );
      }
    });
  }
}

for (const directory of checkedRoots) {
  await walk(path.join(root, directory));
}

if (errors.length) {
  console.error(`Editorial style check failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Editorial style check passed.');
