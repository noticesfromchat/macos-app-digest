/**
 * Geometry for the App Waypoint buoy, shared so the mark and the wave rule
 * can never drift apart. Coordinates are in the mark's 1024 canvas.
 */
export const MARK_BEACON = { cx: 511.5, cy: 181.5, r: 58.5 };

export const MARK_FRAME =
  'M313 695L438.582 372.184C454.786 330.313 479.092 306 511.5 306C543.908 306 568.215 330.313 584.419 372.184L710 695';

export const MARK_WATERLINE = { x1: 396, y1: 535, x2: 627, y2: 535 };

export const MARK_WAVE =
  'M228 777C265.8 819.667 303.6 819.667 341.4 777C379.2 734.334 417 734.334 454.8 777C492.6 819.667 530.4 819.667 568.2 777C606 734.334 643.8 734.334 681.6 777C719.4 819.667 757.2 819.667 795 777';

/** Tight box around MARK_WAVE with room for its stroke. */
export const MARK_WAVE_VIEWBOX = '201 707 621 140';
