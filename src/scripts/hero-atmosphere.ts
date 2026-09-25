/* The hero atmosphere of every page that opens on the sea: the star field (which
   scintillates at night and, rarely, lets a meteor cross it), the swelling wave band, and
   the divider buoy's one-shot light. One file, so the homepage and issue pages cannot drift
   apart. */
export function initHeroAtmosphere() {
  /* Drawn rather than loaded, so it costs no image request. The sea swells and the stars
     scintillate only while the hero is on screen and the tab is visible, and both hold
     still for readers who ask for reduced motion. */

  /* A buoy is identified by the rhythm of its light. This one flashes once, as
     you pass it, once it reaches the middle of the screen rather than its edge.
     One shot per load: the observer releases the element after. */
  const waypoint = document.querySelector('[data-waypoint]');
  const stillness = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (waypoint && !stillness.matches && 'IntersectionObserver' in window) {
    const passing = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-lit');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });
    passing.observe(waypoint);
  }

  const sky = document.querySelector('.home-hero-sky');
  const sea = document.querySelector('.home-hero-sea');
  const dividerSea = document.querySelector('.content-divider-sea');

  if (sky || sea || dividerSea) {
    const root = document.documentElement;
    const token = (name) => getComputedStyle(root).getPropertyValue(name).trim();
    const isDark = () => root.dataset.theme === 'dark';

    /* Sizing is split from drawing. Setting canvas.width reallocates the backing
       store, which is fine once but ruinous inside an animation loop, so the swell
       redraws through the cached surface and only a resize re-fits. */
    const surfaces = new Map();

    const fit = (canvas) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) { surfaces.delete(canvas); return null; }
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);
      const surface = { ctx, w: rect.width, h: rect.height };
      surfaces.set(canvas, surface);
      return surface;
    };

    const surfaceFor = (canvas) => surfaces.get(canvas) || fit(canvas);

    const signature = () => [sky, sea, dividerSea]
      .filter(Boolean)
      .map((canvas) => {
        const rect = canvas.getBoundingClientRect();
        return `${Math.round(rect.width)}x${Math.round(rect.height)}`;
      })
      .join('|');

    const seededUnit = (seed) => {
      const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
      return value - Math.floor(value);
    };

    /* Stars belong to night only; by day the wave band carries the hero alone.

       They also belong above the water. The sky canvas covers the whole hero, and a
       fixed fraction of its height only kept the stars clear of the sea while the sea
       was absolutely positioned at the bottom. Below 920px the sea becomes a block in
       the flow with the Editor's Pick beneath it, so that same fraction put stars
       under the waterline. The horizon is measured from the sea itself instead, so it
       is right in either layout. */
    /* The field is laid out once per paint, seeded so every visit sees the same sky, and
       then only its light changes. Each star carries its own slow period and phase, so the
       sky scintillates rather than blinking in step. */
    let stars = [];
    let horizonY = 0;
    const layoutSky = () => {
      stars = [];
      if (!sky) return;
      const c = surfaceFor(sky);
      if (!c) return;
      const skyTop = sky.getBoundingClientRect().top;
      const seaTop = sea ? sea.getBoundingClientRect().top : null;
      horizonY = seaTop === null
        ? c.h * 0.82
        : Math.max(0, Math.min(c.h, seaTop - skyTop) - 4);
      if (horizonY <= 0) return;
      const count = Math.floor((c.w * horizonY) / 5200);
      for (let i = 0; i < count; i += 1) {
        stars.push({
          x: seededUnit(i + 1) * c.w,
          y: seededUnit(i + 101) * horizonY,
          r: seededUnit(i + 201) * 1.3 + 0.2,
          a: seededUnit(i + 301) * 0.5 + 0.12,
          period: 4 + seededUnit(i + 401) * 5,
          phase: seededUnit(i + 501) * Math.PI * 2,
          glint: false
        });
      }
      /* Only the brightest half dozen glint, and only at their peak. */
      [...stars].sort((p, q) => (q.r * q.a) - (p.r * p.a)).slice(0, 6).forEach((star) => { star.glint = true; });
    };

    /* A meteor is rare by design: one faint streak every 20 to 40 seconds, 0.8s from first
       light to gone, always in the upper half of the sky and always falling toward the
       water. Chosen by the editor as the one flourish the night sky is allowed. */
    const METEOR_MS = 800;
    let nextMeteorAt = 0;
    let meteor = null;
    const scheduleMeteor = (from) => { nextMeteorAt = from + 20 + Math.random() * 20; };

    const drawMeteor = (ctx, ink, seconds) => {
      if (!meteor && seconds >= nextMeteorAt && horizonY > 0) {
        const c = surfaceFor(sky);
        const angle = (18 + Math.random() * 14) * (Math.PI / 180) * (Math.random() < .5 ? 1 : -1);
        meteor = {
          start: seconds,
          x: c.w * (0.15 + Math.random() * 0.7),
          y: horizonY * (0.08 + Math.random() * 0.35),
          dx: Math.cos(angle) * Math.sign(angle || 1),
          dy: Math.abs(Math.sin(angle)),
          travel: 180 + Math.random() * 80,
          length: 90 + Math.random() * 50
        };
      }
      if (!meteor) return;
      const t = (seconds - meteor.start) / (METEOR_MS / 1000);
      if (t >= 1) { meteor = null; scheduleMeteor(seconds); return; }
      /* Strikes quickly, fades slowly, like the buoy's own light. */
      const fade = t < 0.2 ? t / 0.2 : Math.max(0, 1 - (t - 0.2) / 0.8);
      const headX = meteor.x + meteor.dx * meteor.travel * t;
      const headY = meteor.y + meteor.dy * meteor.travel * t;
      const tailX = headX - meteor.dx * meteor.length;
      const tailY = headY - meteor.dy * meteor.length;
      const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
      grad.addColorStop(0, `rgb(${ink} / 0)`);
      grad.addColorStop(1, `rgb(${ink} / ${0.75 * fade})`);
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(headX, headY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      ctx.stroke();
    };

    /* Stars belong to night only; by day the wave band carries the hero alone. With no
       `seconds` the sky is drawn still, exactly as it was before it learned to sparkle: that
       is the reduced-motion sky and the first paint. */
    const drawSky = (seconds) => {
      if (!sky) return;
      const c = surfaceFor(sky);
      if (!c) return;
      c.ctx.clearRect(0, 0, c.w, c.h);
      if (!isDark()) return;
      const ink = token('--sea-ink');
      const live = typeof seconds === 'number';
      for (const star of stars) {
        /* Brightness drifts between 65% and 100% of the star's own value: a breath, not a
           blink. */
        const shimmer = live ? 0.5 + 0.5 * Math.sin((seconds / star.period) * Math.PI * 2 + star.phase) : 1;
        const alpha = live ? star.a * (0.65 + 0.35 * shimmer) : star.a;
        c.ctx.beginPath();
        c.ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        c.ctx.fillStyle = `rgb(${ink} / ${alpha})`;
        c.ctx.fill();
        /* A four-point glint on the brightest stars, only near the top of their cycle. */
        if (live && star.glint && shimmer > 0.92) {
          const strength = (shimmer - 0.92) / 0.08;
          const reach = star.r * (2 + 2.5 * strength);
          c.ctx.strokeStyle = `rgb(${ink} / ${0.3 * strength * star.a})`;
          c.ctx.lineWidth = 0.6;
          c.ctx.beginPath();
          c.ctx.moveTo(star.x - reach, star.y);
          c.ctx.lineTo(star.x + reach, star.y);
          c.ctx.moveTo(star.x, star.y - reach);
          c.ctx.lineTo(star.x, star.y + reach);
          c.ctx.stroke();
        }
      }
      if (live) drawMeteor(c.ctx, ink, seconds);
    };

    /* Layered sine lines: amplitude decays with depth, wavelength grows, and a
       second harmonic keeps the crests from repeating mechanically. The hero
       runs it full strength; the divider runs the same water, quieted and
       dissolved at both ends so it reads as a passage rather than a rule. */
    const drawWaves = (canvas, { lines, amp, quiet = 1, fadeEnds = false }, seconds = 0) => {
      if (!canvas) return;
      const c = surfaceFor(canvas);
      if (!c) return;
      c.ctx.clearRect(0, 0, c.w, c.h);
      const ink = token('--sea-ink');
      const peak = (parseFloat(token('--sea-alpha')) || 0.3) * quiet;
      for (let l = 0; l < lines; l += 1) {
        const t = lines === 1 ? 0 : l / (lines - 1);
        const baseY = c.h * (0.24 + t * 0.7);
        /* The swell. Crests keep their positions; what moves is how tall the water
           stands and how much the second harmonic contributes, on two periods that do
           not divide into one another, so the band never settles into a loop the eye
           can catch. Nothing travels, which is why this can run at a fraction of a
           frame rate and still read as water.

           Both terms settle below the still values rather than swinging either side of
           them. The painting this replaced was already tuned so the topmost crest
           clears the canvas by 7px, and a symmetric swing spent that margin and
           flattened the crests against the edge at its peak. Now the still water is
           the high-water mark and the swell only ever calms below it. */
        const swell = 1 - 0.15 * (0.5 + 0.5 * Math.sin((seconds / 23) * Math.PI * 2 + l * 0.35));
        const harmonic = 0.4 * (1 - 0.35 * (0.5 + 0.5 * Math.sin((seconds / 31) * Math.PI * 2 + l * 0.2)));
        const a = (amp * (1 - t * 0.45) + 2) * swell;
        const wl = 60 + l * 14;
        /* Four components, and the two that carry most of the height travel in
           opposite directions at almost the same wavelength. That is what makes the
           line change shape rather than slide: they beat against each other, so crests
           build and dissolve in place instead of marching across.

           A single travelling wave was the obvious approach and it looked like a
           picture being dragged sideways. Measured, 83% of its motion was pure
           translation. With the pair, 70% is shape change and the residual drift is
           down from 25px every two seconds to 10.

           They are deliberately unequal, 0.46 against 0.32, because an even pair
           cancels to a nearly flat line at the bottom of each beat. Unequal, the water
           calms without ever going still, and because each line carries its own phase
           offset the calm never arrives across the whole band at once.

           The weights are small because four components can align where two could not.
           At their first values the band cleared the top of its canvas at the widest
           hero and cut straight through it at the narrowest, where --sea-h clamps to
           78px. These weights hold a positive margin at every height the clamp can
           produce, and cost nothing: the shape-change share stays at about 69%. */
        const wl2 = wl * 1.08;
        const phaseA = l * 0.9 + seconds * (10 / wl);
        const phaseB = l * 1.3 - seconds * (9 / wl2);
        const phaseH = l * 1.6 - seconds * (7 / (wl * 2.3));
        const phaseR = l * 0.4 + seconds * (5 / (wl * 0.6));
        c.ctx.beginPath();
        for (let x = 0; x <= c.w; x += 4) {
          const y = baseY
            + Math.sin(x / wl + phaseA) * a * 0.46
            + Math.sin(x / wl2 + phaseB) * a * 0.32
            + Math.sin(x / (wl * 2.3) + phaseH) * a * harmonic
            + Math.sin(x / (wl * 0.6) + phaseR) * a * 0.12;
          if (x === 0) c.ctx.moveTo(x, y); else c.ctx.lineTo(x, y);
        }
        const alpha = peak * Math.pow(1 - t, 1.35);
        if (fadeEnds) {
          const grad = c.ctx.createLinearGradient(0, 0, c.w, 0);
          grad.addColorStop(0, `rgb(${ink} / 0)`);
          grad.addColorStop(0.28, `rgb(${ink} / ${alpha})`);
          grad.addColorStop(0.72, `rgb(${ink} / ${alpha})`);
          grad.addColorStop(1, `rgb(${ink} / 0)`);
          c.ctx.strokeStyle = grad;
        } else {
          c.ctx.strokeStyle = `rgb(${ink} / ${alpha})`;
        }
        c.ctx.lineWidth = 1.1;
        c.ctx.stroke();
      }
    };

    const HERO_WATER = { lines: 8, amp: 13 };
    const DIVIDER_WATER = { lines: 5, amp: 7, quiet: 0.7, fadeEnds: true };

    let lastPaintSignature = '';
    let elapsed = 0;

    const paint = ({ force = false } = {}) => {
      const nextSignature = signature();
      if (!force && nextSignature === lastPaintSignature) return;
      lastPaintSignature = nextSignature;
      [sky, sea, dividerSea].filter(Boolean).forEach(fit);
      layoutSky();
      drawSky(frameId === null ? undefined : elapsed);
      drawWaves(sea, HERO_WATER, elapsed);
      drawWaves(dividerSea, DIVIDER_WATER, elapsed);
    };

    /* Each band is drawn only while it is on screen, and the whole loop stops when the
       tab is hidden or the reader has asked for reduced motion. */
    const stillness = window.matchMedia('(prefers-reduced-motion: reduce)');
    /* 30fps rather than 18. Nothing travelled before, so a third of the frames was
       imperceptible; a moving crest at 18fps judders, and at this speed 30 gives about
       a third of a pixel between frames. */
    const FRAME_MS = 33;
    const onScreen = new Set();
    let frameId = null;
    let lastFrame = 0;
    let startedAt = 0;

    const drawFrame = (now) => {
      frameId = requestAnimationFrame(drawFrame);
      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;
      elapsed = (now - startedAt) / 1000;
      if (onScreen.has(sea)) drawWaves(sea, HERO_WATER, elapsed);
      if (onScreen.has(dividerSea)) drawWaves(dividerSea, DIVIDER_WATER, elapsed);
      /* The sky shares the sea's loop and its rules: only while the hero is on screen,
         only at night. */
      if (onScreen.has(sky) && isDark()) drawSky(elapsed);
    };

    const startSwell = () => {
      if (frameId !== null || stillness.matches || document.hidden || !onScreen.size) return;
      startedAt = performance.now() - elapsed * 1000;
      if (!nextMeteorAt) scheduleMeteor(elapsed);
      lastFrame = 0;
      frameId = requestAnimationFrame(drawFrame);
    };

    const stopSwell = () => {
      if (frameId === null) return;
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    if ('IntersectionObserver' in window) {
      const watching = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target);
          else onScreen.delete(entry.target);
        }
        onScreen.size ? startSwell() : stopSwell();
      }, { threshold: 0 });
      [sky, sea, dividerSea].filter(Boolean).forEach((canvas) => watching.observe(canvas));
    } else {
      /* Without an observer there is nothing to populate onScreen, and the loop would
         refuse to start at all. Animate both bands and rely on the tab-visibility
         check alone. */
      [sky, sea, dividerSea].filter(Boolean).forEach((canvas) => onScreen.add(canvas));
      startSwell();
    }

    document.addEventListener('visibilitychange', () => {
      document.hidden ? stopSwell() : startSwell();
    });

    stillness.addEventListener('change', () => {
      if (stillness.matches) { stopSwell(); paint({ force: true }); } else startSwell();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(paint, 150);
    });
    document.addEventListener('appwaypoint:themechange', () => paint({ force: true }));

    paint({ force: true });
    if (document.readyState !== 'complete') window.addEventListener('load', () => paint({ force: true }));
  }
}
