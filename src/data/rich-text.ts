/**
 * The two inline marks site copy may carry, and nothing else: `[label](href)` for a
 * link and `**words**` for bold. Enough for the About page and the subscribe offer,
 * which is all the editor-written copy that needs markup, and small enough that a
 * value cannot smuggle in HTML: every segment renders as text.
 */
export type InlineSegment =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'link'; text: string; href: string; external: boolean };

export type RichParagraph = { emphasis: boolean; segments: InlineSegment[] };

const inlinePattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function inlineSegments(value: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let cursor = 0;

  for (const match of value.matchAll(inlinePattern)) {
    if (match.index > cursor) segments.push({ kind: 'text', text: value.slice(cursor, match.index) });
    if (match[1] !== undefined) {
      segments.push({ kind: 'link', text: match[1], href: match[2], external: /^https?:\/\//.test(match[2]) });
    } else {
      segments.push({ kind: 'strong', text: match[3] });
    }
    cursor = match.index + match[0].length;
  }

  if (cursor < value.length) segments.push({ kind: 'text', text: value.slice(cursor) });
  return segments;
}

/* Paragraphs are separated by a blank line. A paragraph that is bold from end to end is
   an emphasis line, which the About page sets apart. */
export function richParagraphs(value: string): RichParagraph[] {
  return value
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => ({
      emphasis: /^\*\*[^*]+\*\*$/.test(paragraph),
      segments: inlineSegments(paragraph)
    }));
}

/* One item per line, for lists such as the About page's criteria. */
export const richLines = (value: string) =>
  value.split('\n').map((line) => line.trim()).filter(Boolean).map(inlineSegments);

/* The same copy with its marks removed, for places that take plain text. */
export const plainText = (value: string) =>
  inlineSegments(value).map((segment) => segment.text).join('');
