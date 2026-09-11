/* Regression coverage for The Catalog Spelling Rule's scope.

   The rule governs reader-facing copy. It shipped on 2026-09-09 matching the bare word
   anywhere on a line, which rejected `const catalogue = 1` and a URL ending `/catalogue/`
   as if they were prose. These cases pin the boundary in both directions: addressing and
   code are not copy, and blanking one of them must never buy an exemption for the prose
   sharing its line. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hasCatalogueViolation, blankNonCopy } from './check-editorial-style.mjs';

const allowed = [
  ['a const declaration', 'const catalogue = 1'],
  ['a let declaration', 'let catalogue = [];'],
  ['a function declaration', 'function catalogue() {}'],
  ['a call site', 'const total = catalogue();'],
  ['a property access', 'const size = store.catalogue.length;'],
  ['an object key', '{ catalogue: apps }'],
  ['a destructured binding', 'const { catalogue } = store;'],
  ['an absolute URL', 'https://example.com/catalogue/'],
  ['a URL in an attribute', '<a href="https://example.com/catalogue/">Browse the catalog</a>'],
  ['a root-relative slug', '<a href="/catalogue/">Browse the catalog</a>'],
  ['a relative module path', "import data from './catalogue.js';"],
  ['a hyphenated slug literal', "const slug = 'catalogue-page';"],
  ['a bare path in markdown', '[Browse the catalog](/catalogue/)'],
  ['the approved spelling', 'Browse the catalog of every app.']
];

const rejected = [
  ['prose', '<p>Browse the catalogue of every app.</p>'],
  ['a meta description', 'description="Explore the catalogue, browse the archive."'],
  ['title case in a control label', '<strong>Search the Catalogue</strong>'],
  ['the plural', 'Two catalogues are published each year.'],
  ['prose beside an exempt URL', '<a href="/catalogue/">Browse the catalogue</a>'],
  ['prose beside an exempt slug', "<a href='catalogue-page'>Read the catalogue</a>"],
  ['prose beside an exempt declaration', "const catalogue = 1; const label = 'the catalogue';"]
];

for (const [label, line] of allowed) {
  test(`allows ${label}`, () => {
    assert.equal(hasCatalogueViolation(line), false, `expected no violation in: ${line}`);
  });
}

for (const [label, line] of rejected) {
  test(`rejects ${label}`, () => {
    assert.equal(hasCatalogueViolation(line), true, `expected a violation in: ${line}`);
  });
}

test('blanking preserves line length so columns still line up', () => {
  const line = '<a href="/catalogue/">Browse the catalogue</a>';
  assert.equal(blankNonCopy(line).length, line.length);
});

test('blanking removes only the exempt span, not the prose', () => {
  const blanked = blankNonCopy('<a href="/catalogue/">Browse the catalogue</a>');
  assert.ok(!blanked.includes('/catalogue/'), 'the slug should be blanked');
  assert.ok(blanked.includes('Browse the catalogue'), 'the prose should survive');
});

/* The boundary, pinned deliberately rather than left to be rediscovered. A bare identifier
   reference in an expression is still flagged, because the only thing separating
   `return catalogue;` from `the catalogue;` lexically is knowing which file is code and
   which is prose. Blanking on a trailing period or operator would exempt any sentence
   ending in the word, which is the failure this rule exists to catch. Declarations, calls,
   property access, keys and destructuring are covered; a bare reference is not, and the
   repository contains none. */
test('a bare identifier reference is a known, accepted false positive', () => {
  assert.equal(hasCatalogueViolation('return catalogue;'), true);
});

/* Comments never reach these helpers in production: stripComments blanks them one line
   earlier in the pipeline, with block state carried across lines. */
test('comment stripping is upstream, not this rule\'s job', () => {
  assert.equal(hasCatalogueViolation('the catalogue reads well'), true);
});
