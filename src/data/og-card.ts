/**
 * Open Graph cards, drawn at build time.
 *
 * Every page shared the one brand image until 2026-09-03, so an issue and an app
 * looked identical in a feed. These cards are composed from the same tokens, the
 * same buoy geometry and the same editorial fields the pages already carry, so a
 * card cannot drift from the publication it represents.
 *
 * Vollkorn is also the site's editorial serif, loaded from the same Fontsource
 * package. Inter stands in for the site's system sans in generated images.
 * Both faces are SIL OFL 1.1 and carry their licence in the package.
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import satori from 'satori';

import { MARK_BEACON, MARK_FRAME, MARK_WATERLINE, MARK_WAVE, MARK_WAVE_VIEWBOX } from './mark';
import { OG_SIZE, type OgAppIcon, type OgCard } from './og';

/* Light-theme tokens from DESIGN.md. A card is one fixed image, so it cannot
   follow the reader's theme; it takes the day palette the site opens in. */
const PAGE = '#ffffff';
const INK = '#092443';
const MUTED = '#4d5762';
const LINE = 'rgba(9, 35, 66, 0.2)';
const ACCENT = '#0862d8';

const SERIF = 'Vollkorn';
const SANS = 'Inter';

type Weight = 400 | 500 | 600;

/* `import.meta.resolve` builds the cards but throws inside Vite's module runner, so
   the dev server 500s on every card while the build passes. `createRequire` resolves
   the same package `exports` entry in both. */
const resolveFrom = createRequire(import.meta.url);

function fontFile(specifier: string) {
  return readFileSync(resolveFrom.resolve(specifier));
}

const fonts = [
  { name: SERIF, data: fontFile('@fontsource/vollkorn/files/vollkorn-latin-400-normal.woff'), weight: 400 as Weight, style: 'normal' as const },
  { name: SERIF, data: fontFile('@fontsource/vollkorn/files/vollkorn-latin-500-normal.woff'), weight: 500 as Weight, style: 'normal' as const },
  { name: SERIF, data: fontFile('@fontsource/vollkorn/files/vollkorn-latin-600-normal.woff'), weight: 600 as Weight, style: 'normal' as const },
  { name: SANS, data: fontFile('@fontsource/inter/files/inter-latin-400-normal.woff'), weight: 400 as Weight, style: 'normal' as const },
  { name: SANS, data: fontFile('@fontsource/inter/files/inter-latin-500-normal.woff'), weight: 500 as Weight, style: 'normal' as const }
];

/* Satori takes React elements; this repository has no React, and does not need it
   for nine static images. These are the same plain {type, props} objects React
   would produce. */
type Node = { type: string; props: Record<string, unknown> };

function h(type: string, props: Record<string, unknown>, ...children: (Node | string | false | null)[]): Node {
  const kept = children.filter(Boolean) as (Node | string)[];
  return { type, props: { ...props, children: kept.length === 1 ? kept[0] : kept } };
}

/** The buoy and its wave, inlined as images because Satori draws SVG from a src. */
function svgUri(body: string, viewBox: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${body}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

const buoyUri = svgUri(
  `<g transform="translate(0,38)" fill="none" stroke-width="54" stroke-linecap="round" stroke-linejoin="round">
     <circle cx="${MARK_BEACON.cx}" cy="${MARK_BEACON.cy}" r="${MARK_BEACON.r}" stroke="${ACCENT}"/>
     <path d="${MARK_FRAME}" stroke="${INK}"/>
     <line x1="${MARK_WATERLINE.x1}" y1="${MARK_WATERLINE.y1}" x2="${MARK_WATERLINE.x2}" y2="${MARK_WATERLINE.y2}" stroke="${INK}"/>
     <path d="${MARK_WAVE}" stroke="${INK}"/>
   </g>`,
  '128 126 768 768'
);

/* The rule under a title is the buoy's own wave at a finer weight, exactly as
   WaveRule draws it on the site. */
const waveUri = svgUri(
  `<path d="${MARK_WAVE}" fill="none" stroke="${ACCENT}" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>`,
  MARK_WAVE_VIEWBOX
);

/**
 * The category marks an icon-less app falls back to, read out of the same
 * Phosphor files the site renders rather than copied into this repository.
 * Copying the paths would let a card and an app page drift the next time the
 * package updates, and would put someone else's artwork in our source tree.
 */
const phosphorMarks = new Map<string, string>();

function phosphorMark(name: string, color = '#ffffff') {
  const key = `${name}:${color}`;
  const cached = phosphorMarks.get(key);
  if (cached) return cached;

  const source = readFileSync(
    join(process.cwd(), 'node_modules', '@phosphor-icons', 'core', 'assets', 'regular', `${name}.svg`),
    'utf8'
  );
  const svg = source.replace('fill="currentColor"', `fill="${color}"`);
  const uri = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  phosphorMarks.set(key, uri);
  return uri;
}

/**
 * The icon plate. 112px rather than the ~160 the canvas would take, because the
 * app icons top out at 128px source: they were resized down when they were found
 * to be shipping 12 MB to render at 44px, and upscaling them here would undo that
 * for a blurrier result. At 112 the sources downscale slightly and stay crisp.
 */
const ICON = 112;

/* Satori draws from bytes, not from a URL, so a public asset has to be inlined.
   Read relative to the working directory, which is the repository root for both
   `astro dev` and `astro build`; `import.meta` cannot be used here, because its
   resolver throws inside Vite's module runner. */
function assetUri(publicPath: string) {
  const file = readFileSync(join(process.cwd(), 'public', publicPath));
  const type = publicPath.endsWith('.svg') ? 'image/svg+xml'
    : publicPath.endsWith('.webp') ? 'image/webp'
    : /\.jpe?g$/.test(publicPath) ? 'image/jpeg'
    : 'image/png';
  return `data:${type};base64,${file.toString('base64')}`;
}

function iconPlate(icon: OgAppIcon) {
  const frame = {
    display: 'flex', width: ICON, height: ICON, borderRadius: 20,
    alignItems: 'center', justifyContent: 'center', flexShrink: 0
  };

  if (icon.kind === 'fallback') {
    return h('div', { style: { ...frame, backgroundColor: icon.background } },
      h('img', { src: phosphorMark(icon.phosphor), width: 56, height: 56 }));
  }

  /* `backed` is transparent artwork that needs paper under it, `contain` is a
     non-square mark that must not crop, `plain` is a finished square icon. The
     same three cases the app card CSS handles. */
  const backed = icon.kind === 'backed';
  const src = assetUri(icon.src);
  const inner = backed ? ICON - 14 : ICON;
  return h('div', {
    style: { ...frame, backgroundColor: backed ? '#ffffff' : 'transparent', overflow: 'hidden' }
  },
    h('img', {
      src,
      width: inner,
      height: inner,
      style: { objectFit: icon.kind === 'plain' ? 'cover' : 'contain', borderRadius: backed ? 8 : 20 }
    })
  );
}

/** Trim to a word boundary so a long dek ends as a sentence fragment, not mid-word. */
function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:]$/, '')}...`;
}

const wordmark = (size: number) =>
  h('div', {
    style: { fontFamily: SERIF, fontWeight: 600, fontSize: size, color: INK, letterSpacing: '-0.02em', lineHeight: 1 }
  }, 'App Waypoint');

const wave = (width: number) =>
  h('img', { src: waveUri, width, height: Math.round((width / 621) * 140), style: { marginTop: 14 } });

const footer = () =>
  h('div', {
    style: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      borderTop: `1px solid ${LINE}`, paddingTop: 26,
      fontFamily: SANS, fontSize: 21, color: MUTED
    }
  },
    h('div', { style: { display: 'flex' } }, 'appwaypoint.app'),
    h('div', { style: { display: 'flex' } }, 'New issues published every Friday')
  );

/**
 * Titles are editorial and are never truncated, so the type gives way instead:
 * a longer title steps down the scale and takes a shorter dek with it, which is
 * what keeps a five-word title and a fifteen-word one on the same 630px card.
 * Today's longest is 33 characters; the lower tiers are headroom, not current use.
 */
function fit(title: string) {
  if (title.length <= 34) return { size: 72, dekLimit: 205 };
  if (title.length <= 52) return { size: 60, dekLimit: 140 };
  return { size: 50, dekLimit: 105 };
}

/* Free space is split between the two gaps rather than handed to space-between,
   which starved the gap above the eyebrow as soon as a title wrapped to two lines
   and left the eyebrow reading as part of the brand row above it. Each gap keeps a
   floor, so the eyebrow stays bound to the title it names. */
const spacer = (minHeight: number) => h('div', { style: { display: 'flex', flexGrow: 1, minHeight } });

const brandRow = () =>
  h('div', { style: { display: 'flex', alignItems: 'center' } },
    h('img', { src: buoyUri, width: 54, height: 54, style: { marginLeft: -8 } }),
    h('div', { style: { fontFamily: SERIF, fontWeight: 600, fontSize: 34, color: INK, letterSpacing: '-0.02em', marginLeft: 10 } }, 'App Waypoint')
  );

function editorialDesign(card: Extract<OgCard, { layout: 'app' | 'page' }>): Node {
  const title = card.layout === 'app' ? card.name : card.title;
  const description = card.layout === 'app' ? card.description : card.dek;
  const icon = card.layout === 'app' ? iconPlate(card.icon)
    : h('img', { src: phosphorMark(card.icon!, INK), width: ICON, height: ICON });
  const text = (copy: string, style: Record<string, unknown>) =>
    h('div', { style: { fontFamily: SANS, color: INK, ...style } }, copy);
  const name = (size: number) => text(title, {
    fontFamily: SERIF, fontWeight: 600, fontSize: size, lineHeight: 1.04, letterSpacing: '-0.02em'
  });
  const root = (children: Node[], style: Record<string, unknown> = {}) => h('div', {
    style: { display: 'flex', flexDirection: 'column', width: OG_SIZE.width, height: OG_SIZE.height,
      backgroundColor: PAGE, padding: 56, ...style }
  }, ...children);

  return root([
    h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
      brandRow(),
      card.layout === 'page' && text(card.eyebrow, { fontSize: 20, color: MUTED })),
    h('div', { style: { display: 'flex', alignItems: 'center', gap: 32, marginTop: 48 } },
      // Vollkorn's visible capitals sit above the center of its line box.
      h('div', { style: { display: 'flex', flexShrink: 0, transform: 'translateY(-9px)' } }, icon),
      h('div', { style: { display: 'flex', flexDirection: 'column', width: 880 } },
        name(title.length <= 18 ? 100 : title.length <= 30 ? 76 : 58))),
    text(clamp(description, 175), { fontSize: 36, lineHeight: 1.4, color: MUTED, marginTop: 32, maxWidth: 940 }),
    // Keep the lower edge clear for the destination overlay shown by X.
    spacer(70)
  ]);
}

function tree(card: OgCard): Node {
  if (card.layout === 'app' || (card.layout === 'page' && card.icon)) return editorialDesign(card);
  const shell = (...children: (Node | false)[]) =>
    h('div', {
      style: {
        display: 'flex', flexDirection: 'column', width: OG_SIZE.width, height: OG_SIZE.height,
        backgroundColor: PAGE, padding: 56
      }
    }, ...children);

  /* The homepage hero is a wordmark over the buoy's water, and nothing else. The
     mark is not repeated above it: the wave under the wordmark is already the
     buoy's own, and stacking the two reads as two bodies of water. */
  if (card.layout === 'brand') {
    return shell(
      spacer(40),
      h('div', { style: { display: 'flex', flexDirection: 'column' } },
        wordmark(112),
        wave(226),
        h('div', {
          style: { fontFamily: SANS, fontSize: 28, color: MUTED, lineHeight: 1.5, marginTop: 30, maxWidth: 780 }
        }, card.dek)
      ),
      spacer(40),
      footer()
    );
  }

  const { size, dekLimit } = fit(card.title);

  return shell(
    brandRow(),
    spacer(30),
    h('div', { style: { display: 'flex', flexDirection: 'column' } },
      h('div', {
        style: { fontFamily: SANS, fontWeight: 500, fontSize: 20, letterSpacing: '0.14em', color: MUTED, textTransform: 'uppercase' }
      }, card.eyebrow),
      h('div', {
        style: {
          fontFamily: SERIF, fontWeight: 600, fontSize: size, color: INK,
          lineHeight: 1.06, letterSpacing: '-0.02em', marginTop: 11, maxWidth: 1000
        }
      }, card.title),
      wave(178),
      /* The One Measure Rule: the dek is running prose and stays near the house
         52ch rather than spanning the card, which is what leaves room for three
         lines and lets most deks arrive whole. */
      h('div', {
        style: { fontFamily: SANS, fontSize: 26, color: MUTED, lineHeight: 1.5, marginTop: 22, maxWidth: 760 }
      }, clamp(card.dek, dekLimit))
    ),
    spacer(22),
    footer()
  );
}

export async function renderOgCard(card: OgCard): Promise<Buffer> {
  const svg = await satori(tree(card), { width: OG_SIZE.width, height: OG_SIZE.height, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: OG_SIZE.width } }).render().asPng();
}
