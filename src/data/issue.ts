/**
 * How an issue number is written for a reader.
 *
 * Issue records carry three digits (`008`) because the frontmatter schema fixes the
 * width and the files sort by it. Published copy is always two: `Issue 08`, never
 * `Issue 008`, and three only once there are a hundred issues to write.
 *
 * The rule lived nowhere until 2026-09-03, so it had been implemented three times
 * (the issue hero, the archive list and the RSS summary, the last by a different
 * mechanism) and skipped in five more, including the breadcrumb trail, which printed
 * `Issue 008` directly above a heading reading `Issue 08`. One helper now, so the
 * next surface that needs it does not become a fourth copy.
 */

/** `008` to `08`, `100` to `100`. Pads to two digits, never truncates. */
export const issueLabel = (number: string | number) => String(Number(number)).padStart(2, '0');

/** The full reader-facing form, so a caller cannot pair the label with the wrong noun. */
export const issueName = (number: string | number) => `Issue ${issueLabel(number)}`;
