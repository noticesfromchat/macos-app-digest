#!/usr/bin/env node
/**
 * Design invariants that failed in practice.
 *
 * Every check here exists because the relationship it guards actually broke, and broke
 * silently: nothing errored, the build passed, and the defect was found by measuring a
 * rendered page. These are deliberately checks of *relationships between* declarations,
 * never restatements of a single literal — a test that asserts `--space-3` is 24px tells
 * you nothing that reading the line does not, and passes happily while the thing the
 * value was supposed to produce is broken.
 *
 * Source-level only. Anything needing layout belongs in a browser pass.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const stylesheets = ['src/styles/global.css', 'src/styles/search.css'];

/** Scoped `<style>` blocks are stylesheets too, and a global-only search misses them. */
const scopedBlocks = () => {
  const out = [];
  const walk = (dir) => {
    for (const entry of readdirSync(new URL(`../${dir}`, import.meta.url), { withFileTypes: true })) {
      const path = `${dir}/${entry.name}`;
      if (entry.isDirectory()) walk(path);
      else if (entry.name.endsWith('.astro')) {
        const src = read(path);
        for (const m of src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) out.push([path, m[1]]);
      }
    }
  };
  walk('src');
  return out;
};

const allCss = [
  ...stylesheets.map((f) => [f, read(f)]),
  ...scopedBlocks()
];

const failures = [];
const fail = (check, detail) => failures.push({ check, detail });

/* ── 1 ─────────────────────────────────────────────────────────────────────────
   A hand-written SVG that is not opted into the glyph contract renders at 0x0. The
   contract matches Lucide's own class or an explicit `icon`, and the per-icon rules
   set only `--icon-size`, so an un-opted SVG has no width at all. This shipped three
   times, once to production. Checked against the markup rather than the stylesheet,
   because the markup is where the omission is. */
const FILLED_MARKS = new Set([
  'src/components/BrandMark.astro',   // the buoy, a filled mark on its own viewBox
  'src/components/WaveRule.astro',    // the drawn wave
  'src/components/SiteFooter.astro'   // social marks, fill: currentColor with no stroke
]);
const walkAstro = (dir, out = []) => {
  for (const entry of readdirSync(new URL(`../${dir}`, import.meta.url), { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) walkAstro(path, out);
    else if (entry.name.endsWith('.astro')) out.push(path);
  }
  return out;
};
for (const file of walkAstro('src')) {
  if (FILLED_MARKS.has(file)) continue;
  const src = read(file);
  for (const m of src.matchAll(/<svg\b([^>]*)>/g)) {
    const attrs = m[1];
    if (/class\s*=\s*["'][^"']*\b(icon|lucide)\b/.test(attrs)) continue;
    const line = src.slice(0, m.index).split('\n').length;
    fail('icon-contract', `${file}:${line}: a literal <svg> without the icon class — it will render at 0x0`);
  }
}

/* ── 2 ─────────────────────────────────────────────────────────────────────────
   A fixed text role must declare its own line box. Leaving it to inherit is how
   nine uses of the label and metadata roles ended up at 18px and 21px while two
   others carried the correct value as a literal. */
const roleLeading = { label: '--leading-label', meta: '--leading-meta' };
for (const [file, src] of allCss) {
  for (const m of src.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const [, selector, body] = m;
    const size = body.match(/font-size:\s*var\(--type-(label|meta)\)/);
    if (!size) continue;
    if (/line-height/.test(body)) continue;
    const sel = selector.trim().split('\n').pop().trim();
    /* A role nested inside its own role legitimately inherits it, and controls that
       carry their own min-height are measured by the box, not the line box. */
    if (/\.tag\s+span|site-footer|desktop-nav-links|\.button\b|directory-select|directory-count|skip-link/.test(sel)) continue;
    fail('role-leading', `${file}: "${sel}" sets the ${size[1]} size and inherits its line box (expected ${roleLeading[size[1]]})`);
  }
}

/* ── 3 ─────────────────────────────────────────────────────────────────────────
   Structural vertical spacing steps; it does not interpolate. A clamp here is how
   the site's one section boundary became 38px at a 1000px viewport. */
const structural = ['--section-space', '--page-start-space', '--hero-space-top', '--hero-space-bottom', '--footer-space'];
for (const [file, src] of allCss) {
  for (const token of structural) {
    for (const m of src.matchAll(new RegExp(`${token}\\s*:\\s*([^;]+);`, 'g'))) {
      if (/clamp\(|vw/.test(m[1])) {
        fail('structural-spacing', `${file}: ${token} is fluid (${m[1].trim()}); structural vertical spacing takes a step`);
      }
    }
  }
}

/* ── 4 ─────────────────────────────────────────────────────────────────────────
   The spacing scale must calculate from the base. When each step repeated its own
   literal the scale agreed with --base by coincidence and changing it did nothing. */
const global = read('src/styles/global.css');
for (let n = 1; n <= 9; n += 1) {
  const m = global.match(new RegExp(`--space-${n}\\s*:\\s*([^;]+);`));
  if (!m) fail('scale-derivation', `--space-${n} is not declared`);
  else if (!/var\(--base\)/.test(m[1])) {
    fail('scale-derivation', `--space-${n} is "${m[1].trim()}" — it must derive from var(--base)`);
  }
}

/* ── 5 ─────────────────────────────────────────────────────────────────────────
   A focus ring is the shared token. Nine treatments across six stylesheets is what
   "each control declares its own" produced. */
for (const [file, src] of allCss) {
  for (const m of src.matchAll(/([^{}]*:focus-visible[^{}]*)\{([^{}]*)\}/g)) {
    const [, selector, body] = m;
    const outline = body.match(/outline:\s*([^;]+)/);
    if (!outline) continue;
    const value = outline[1].trim();
    if (value === '0' || value === 'none') {
      const selectors = selector.replace(/\/\*[\s\S]*?\*\//g, '').trim().split(',').map(s => s.trim());
      if (selectors.every(s => /^\.mobile-nav-modal:focus(?:-visible)?$/.test(s))) continue;
      fail('focus-ring', `${file}: "${selectors.join(', ')}" suppresses keyboard focus`);
      continue;
    }
    if (/var\(--focus-ring\)/.test(value)) continue;
    fail('focus-ring', `${file}: "${selector.trim().split('\n').pop().trim()}" declares its own ring (${value}) instead of var(--focus-ring)`);
  }
}

/* Whole-step vertical spacing must consume the scale, not merely equal it today.
   Parse shorthand axes without splitting spaces inside calc()/var(). Horizontal
   field gutters are independent. Optical values <=4px are deliberately excluded. */
const words = value => value.match(/(?:[^\s()]|\((?:[^()]|\([^()]*\))*\))+/g) || [];
for (const [file, source] of allCss) {
  const css = source.replace(/\/\*[\s\S]*?\*\//g, '');
  for (const m of css.matchAll(/(?<![\w-])((?:margin|padding)(?:-(?:top|bottom|block(?:-start|-end)?))?|row-gap|gap):\s*([^;{}]+);/g)) {
    const parts = words(m[2]);
    const vertical = /^(margin|padding)$/.test(m[1]) ? [parts[0], parts[2]]
      : m[1] === 'gap' ? [parts[0]] : parts;
    if (vertical.some(v => /^(8|16|24|32|40|48|56|64|72)px$/.test(v || ''))) {
      fail('spacing-consumer', `${file}: ${m[1]}: ${m[2]} repeats a structural step instead of consuming --space-*`);
    }
  }
}

/* ── 6 ─────────────────────────────────────────────────────────────────────────
   Content dividers are gone. A breakpoint override put one back under the hero on
   phones after the site-wide removal, so the same boundary was space on desktop and
   space plus a hairline on mobile. */
if (/\.home-hero \+ \.section\s*\{[^}]*border-top:\s*1px/.test(global)) {
  fail('no-content-divider', 'global.css: a rule draws a hairline between the hero and the section after it');
}

/* ── 7 ─────────────────────────────────────────────────────────────────────────
   A state selector has to match the markup. `[aria-selected]` on a menuitemradio
   never matched anything, so the selected sort option went unmarked. */
const directory = read('src/components/AppDirectory.astro');
for (const [file, src] of allCss) {
  for (const attr of ['aria-selected', 'aria-checked']) {
    if (!new RegExp(`\\[${attr}=`).test(src)) continue;
    if (!new RegExp(`${attr}=`).test(directory)) {
      fail('state-attribute', `${file}: styles [${attr}] but AppDirectory.astro never sets it`);
    }
  }
}

/* ── 8 ─────────────────────────────────────────────────────────────────────────
   Nothing moves under reduced motion. Removing a transition stops the animation and
   leaves the destination, so an element still jumps to its lifted position. */
const reduced = global.match(/@media \(prefers-reduced-motion: reduce\)\s*\{([\s\S]*?)\n\}/g) || [];
const reducedBody = reduced.join('\n') + (read('src/styles/search.css').match(/@media \(prefers-reduced-motion: reduce\)\s*\{([\s\S]*?)\n\}/g) || []).join('\n');
for (const [file, src] of allCss) {
  for (const m of src.matchAll(/([^{}]*:hover[^{}]*)\{([^{}]*transform:\s*translate[^;]*;[^{}]*)\}/g)) {
    const sel = m[1].trim().split('\n').pop().trim().replace(/:hover.*/, '');
    const base = sel.replace(/^[.#]/, '').split(/[\s>:]/)[0];
    if (!base) continue;
    if (!new RegExp(base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(reducedBody)) {
      fail('reduced-motion', `${file}: "${sel}" lifts on hover and is not reset under prefers-reduced-motion`);
    }
  }
}

if (failures.length) {
  console.error('Design invariant check failed:\n');
  for (const { check, detail } of failures) console.error(`  [${check}] ${detail}`);
  console.error(`\n${failures.length} problem${failures.length === 1 ? '' : 's'}.`);
  process.exit(1);
}
console.log('Design invariant check passed.');
