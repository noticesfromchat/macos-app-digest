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
import { siteCopy } from './site-copy';

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

function iconPlate(icon: OgAppIcon, size = ICON) {
  const frame = {
    display: 'flex', width: size, height: size, borderRadius: size * 20 / ICON,
    alignItems: 'center', justifyContent: 'center', flexShrink: 0
  };

  if (icon.kind === 'fallback') {
    return h('div', { style: { ...frame, backgroundColor: icon.background } },
      h('img', { src: phosphorMark(icon.phosphor), width: size / 2, height: size / 2 }));
  }

  /* `backed` is transparent artwork that needs paper under it, `contain` is a
     non-square mark that must not crop, `plain` is a finished square icon. The
     same three cases the app card CSS handles. */
  const backed = icon.kind === 'backed';
  const src = assetUri(icon.src);
  /* A source with its own margin is scaled past the plate and cropped by it. */
  const inner = backed ? size - 14 : Math.round(size / (1 - 2 * (icon.inset ?? 0)));
  return h('div', {
    style: { ...frame, backgroundColor: backed ? '#ffffff' : 'transparent', overflow: 'hidden' }
  },
    h('img', {
      src,
      width: inner,
      height: inner,
      style: { flexShrink: 0, objectFit: icon.kind === 'plain' ? 'cover' : 'contain', borderRadius: backed ? 8 : icon.inset ? 0 : size * 20 / ICON }
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
    h('div', { style: { display: 'flex' } }, siteCopy['site.cardFooter'])
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

function editorialDesign(card: Extract<OgCard, { layout: 'app' | 'page' | 'issue' }>): Node {
  const title = card.layout === 'app' ? card.name : card.title;
  const description = card.layout === 'app' ? card.description : card.dek;
  const icon = card.layout === 'issue' ? null : card.layout === 'app' ? iconPlate(card.icon)
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
      card.layout !== 'app' && text(card.eyebrow, { fontSize: 20, color: MUTED })),
    h('div', { style: { display: 'flex', alignItems: 'center', gap: 32, marginTop: 48, minHeight: ICON } },
      // Vollkorn's visible capitals sit above the center of its line box.
      icon && h('div', { style: { display: 'flex', flexShrink: 0, transform: 'translateY(-9px)' } }, icon),
      h('div', { style: { display: 'flex', flexDirection: 'column', width: card.layout === 'issue' ? 1088 : 880 } },
        name(card.layout === 'issue' ? fit(title).size : title.length <= 18 ? 100 : title.length <= 30 ? 76 : 58))),
    text(clamp(description, 175), { fontSize: 36, lineHeight: 1.4, color: MUTED, marginTop: 32, maxWidth: 940 }),
    // Keep the lower edge clear for the destination overlay shown by X.
    spacer(70)
  ]);
}

/** The portrait list layout. Its height follows its rows, so it has no fixed size. */
const LIST_WIDTH = 1200;
const LIST_ICON = 128;

/* A plate on the list layouts, lifted off the white page by the Ambient Card edge. */
/* `fade` scales the shadow with a row that is still arriving: Satori does not carry a
   parent's opacity into box-shadow, so a hidden row left its plate's shadow behind. */
const listPlate = (icon: OgAppIcon, fade = 1) =>
  h('div', {
    style: { display: 'flex', flexShrink: 0, borderRadius: LIST_ICON * 20 / ICON,
      boxShadow: `0 0 0 1px rgba(9, 35, 66, ${0.07 * fade}), 0 10px 28px rgba(9, 35, 66, ${0.08 * fade})` }
  }, iconPlate(icon, LIST_ICON));

const listShell = (...children: (Node | null)[]) =>
  h('div', {
    style: { display: 'flex', flexDirection: 'column', width: LIST_WIDTH, height: '100%', backgroundColor: PAGE, padding: '96px 100px' }
  }, ...children);

const listHeader = (mark: Node | null, title: string) =>
  h('div', { style: { display: 'flex', alignItems: 'center', gap: 28 } },
    // Vollkorn's visible capitals sit above the center of its line box.
    mark && h('div', { style: { display: 'flex', flexShrink: 0, transform: 'translateY(-9px)' } }, mark),
    h('div', { style: { fontFamily: SERIF, fontWeight: 600, fontSize: 100, color: INK, lineHeight: 1.04, letterSpacing: '-0.02em' } }, title));

function listDesign(card: Extract<OgCard, { layout: 'list' }>): Node {
  const row = (app: (typeof card.apps)[number]) =>
    h('div', { style: { display: 'flex', alignItems: 'flex-start', gap: 48,
      opacity: app.opacity ?? 1, transform: `translateY(${app.rise ?? 0}px)` } },
      listPlate(app.icon, app.opacity ?? 1),
      h('div', { style: { display: 'flex', flexDirection: 'column', width: 820 } },
        h('div', { style: { fontFamily: SERIF, fontWeight: 600, fontSize: 48, color: INK, lineHeight: 1.1, letterSpacing: '-0.02em' } }, app.name),
        h('div', { style: { fontFamily: SANS, fontSize: 32, color: MUTED, lineHeight: 1.4, marginTop: 12 } }, app.description)));

  const mark = card.icon ? h('img', { src: phosphorMark(card.icon, INK), width: LIST_ICON, height: LIST_ICON }) : null;

  return listShell(
    /* The issue's label, set like the feature layout's "Best for". */
    card.eyebrow ? h('div', { style: { fontFamily: SANS, fontWeight: 500, fontSize: 22, letterSpacing: '0.14em', color: MUTED, textTransform: 'uppercase', marginBottom: 24 } }, card.eyebrow) : null,
    listHeader(mark, card.title),
    h('div', { style: { display: 'flex', flexDirection: 'column', gap: 72, marginTop: 88 } }, ...card.apps.map(row)));
}

function featureDesign(card: Extract<OgCard, { layout: 'feature' }>): Node {
  return listShell(
    listHeader(listPlate(card.icon), card.name),
    h('div', { style: { fontFamily: SANS, fontSize: 40, color: INK, lineHeight: 1.4, marginTop: 64 } }, card.description),
    h('div', { style: { display: 'flex', flexDirection: 'column', marginTop: 56, paddingTop: 40, borderTop: `1px solid ${LINE}` } },
      h('div', { style: { fontFamily: SANS, fontWeight: 500, fontSize: 22, letterSpacing: '0.14em', color: MUTED, textTransform: 'uppercase' } }, 'Best for'),
      h('div', { style: { fontFamily: SANS, fontSize: 32, color: MUTED, lineHeight: 1.4, marginTop: 14 } }, card.bestFor)));
}

function tree(card: OgCard): Node {
  if (card.layout === 'list') return listDesign(card);
  if (card.layout === 'feature') return featureDesign(card);
  if (card.layout === 'app' || card.layout === 'issue' || (card.layout === 'page' && card.icon)) return editorialDesign(card);
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
  /* It follows the editorial cards rather than the page cards: the description is set at
     their size and there is no footer, so the lower edge stays clear for the destination
     overlay X lays over it. The Friday cadence the footer carried is in the dek instead. */
  if (card.layout === 'brand') {
    return shell(
      spacer(24),
      h('div', { style: { display: 'flex', flexDirection: 'column' } },
        wordmark(112),
        wave(226),
        h('div', {
          style: { fontFamily: SANS, fontSize: 36, color: MUTED, lineHeight: 1.4, marginTop: 32, maxWidth: 940 }
        }, card.dek)
      ),
      spacer(70)
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
  const size = card.layout === 'list' || card.layout === 'feature'
    ? { width: LIST_WIDTH, ...(card.layout === 'list' && card.height ? { height: card.height } : {}) }
    : OG_SIZE;
  const svg = await satori(tree(card), { ...size, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: OG_SIZE.width } }).render().asPng();
}
