const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const metaTheme = document.querySelector('meta[name="theme-color"]');

const layoutFixes = document.createElement("style");
layoutFixes.textContent = `
  :root[data-theme="dark"] {
    --bg: #242528;
    --surface: #2e3034;
    --surface-strong: #373a3f;
    --muted: #b8bbc3;
    --line: #4a4e56;
    --accent-soft: #23364d;
    --header-bg: rgba(36, 37, 40, 0.9);
    --header-line: rgba(74, 78, 86, 0.82);
    --shadow: 0 18px 60px rgba(0, 0, 0, 0.26);
  }

  .brand-icon {
    color: var(--text);
  }

  .brand-icon svg {
    display: block;
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }

  .theme-toggle {
    width: 40px;
    height: 40px;
    min-height: 40px;
    padding: 0;
    justify-content: center;
    gap: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    color: var(--muted);
    appearance: none;
    transition: color 180ms ease;
  }

  .theme-toggle:hover,
  .theme-toggle:focus-visible {
    border-color: transparent;
    background: transparent;
    color: var(--text);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--line);
    outline-offset: 2px;
    border-radius: 6px;
  }

  .theme-toggle svg {
    display: block;
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }

  .app-card .tag {
    margin-top: 0;
    border-color: transparent;
    background: #f1f2f4;
    color: #5a5a5e;
    font-weight: 550;
    letter-spacing: 0.01em;
    padding: 5px 9px;
    transition:
      color 180ms ease,
      border-color 180ms ease,
      background-color 180ms ease;
  }

  :root[data-theme="dark"] .app-card .tag {
    background: #3a3d43;
    color: #c6c9ce;
  }

  .app-card .tag:hover,
  .app-card .tag:focus-visible,
  .app-card .tag[aria-pressed="true"] {
    border-color: transparent;
    background: #e2e4e7;
    color: #3f4146;
  }

  :root[data-theme="dark"] .app-card .tag:hover,
  :root[data-theme="dark"] .app-card .tag:focus-visible,
  :root[data-theme="dark"] .app-card .tag[aria-pressed="true"] {
    background: #4a4e55;
    color: #f0f1f2;
  }

  .app-card h3 a {
    margin-top: 0;
    color: var(--text);
    text-decoration: none;
    transition: color 180ms ease;
  }

  .app-card h3 a:hover,
  .app-card h3 a:focus-visible {
    color: var(--accent);
  }

  .archive-page:not(.tag-page) {
    padding-top: 40px;
  }

  @media (min-width: 821px) {
    .app-card:has(.best-for) .tag-list {
      height: 86px;
      min-height: 86px;
      align-content: flex-start;
      overflow: visible;
    }

    .app-card:has(.best-for) .source-line {
      min-height: 52px;
    }

    .reading-card h3 {
      min-height: 108px;
    }

    .reading-card .reading-source {
      min-height: 30px;
    }

    .reading-card .reading-description {
      min-height: 108px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .app-card,
    .feature-card,
    .archive-card {
      transition:
        transform 180ms ease,
        box-shadow 180ms ease,
        border-color 180ms ease;
      transform-origin: center bottom;
      will-change: transform;
    }

    .app-card:hover,
    .feature-card:hover,
    .archive-card:hover {
      transform: translateY(-5px) rotate(-0.25deg);
      border-color: color-mix(in srgb, var(--accent) 42%, var(--line));
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.14);
    }

    :root[data-theme="dark"] .app-card:hover,
    :root[data-theme="dark"] .feature-card:hover,
    :root[data-theme="dark"] .archive-card:hover {
      border-color: #6b6f76;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    .app-card {
      transition:
        transform 240ms ease,
        box-shadow 240ms ease,
        border-color 240ms ease;
      transform-origin: center center;
      will-change: transform;
    }

    .app-card.is-in-view {
      transform: translateY(-3px) scale(1.012);
      border-color: color-mix(in srgb, var(--accent) 34%, var(--line));
      box-shadow: 0 18px 48px rgba(0, 0, 0, 0.12);
    }

    :root[data-theme="dark"] .app-card.is-in-view {
      border-color: #6b6f76;
      box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .app-card,
    .feature-card,
    .archive-card,
    .app-card h3 a,
    .app-card .tag,
    .theme-toggle {
      transition: none;
    }

    .app-card:hover,
    .feature-card:hover,
    .archive-card:hover,
    .app-card.is-in-view {
      transform: none;
    }
  }
`;
document.head.appendChild(layoutFixes);

const icons = {
  apple: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.78 4.78 0 0 0 17.5 5c-2.68 0-4.06 1.5-5.5 1.5C10.5 6.5 9 5 6.5 5A4.78 4.78 0 0 0 2 9.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
      <path d="M10 2c1 .5 2 2 2 5"/>
    </svg>`,
  moon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
    </svg>`,
  sun: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="m4.93 4.93 1.42 1.42"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    </svg>`,
};

const applyBrandIcon = () => {
  document.querySelectorAll(".brand-icon").forEach((brandIcon) => {
    brandIcon.innerHTML = icons.apple;
  });

  document.querySelectorAll(".hero h1").forEach((heading) => {
    heading.textContent = heading.textContent.replace(/^\s*🍎\s*/, "");
  });
};

const moveCardLinkToTitle = (card, link) => {
  const heading = card.querySelector("h3");
  if (!heading || !link || heading.querySelector("a")) return;

  const titleLink = document.createElement("a");
  titleLink.href = link.href;
  titleLink.textContent = heading.textContent;

  if (link.target) titleLink.target = link.target;
  if (link.rel) titleLink.rel = link.rel;

  heading.textContent = "";
  heading.appendChild(titleLink);
  link.remove();
};

const linkAppNames = () => {
  document.querySelectorAll(".app-card:has(.best-for)").forEach((card) => {
    const homepageLink = Array.from(card.children).find(
      (element) => element.matches?.("a") && !element.classList.contains("tag")
    );
    moveCardLinkToTitle(card, homepageLink);
  });
};

const linkReadingTitles = () => {
  document.querySelectorAll(".app-card:not(:has(.best-for))").forEach((card) => {
    const articleLink = Array.from(card.children).find(
      (element) => element.matches?.("a") && element.textContent.trim() === "Read article"
    );
    if (!articleLink) return;

    card.classList.add("reading-card");
    const content = card.querySelector(":scope > div");
    const paragraphs = content?.querySelectorAll(":scope > p");
    if (paragraphs?.[0]) paragraphs[0].classList.add("reading-source");
    if (paragraphs?.[1]) paragraphs[1].classList.add("reading-description");

    moveCardLinkToTitle(card, articleLink);
  });
};

const enableMobileCardReactions = () => {
  const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!isTouchDevice || reduceMotion || !("IntersectionObserver" in window)) return;

  const cards = document.querySelectorAll(".app-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-in-view", entry.isIntersecting);
      });
    },
    {
      root: null,
      rootMargin: "-28% 0px -28% 0px",
      threshold: 0.2,
    }
  );

  cards.forEach((card) => observer.observe(card));
};

applyBrandIcon();
linkAppNames();
linkReadingTitles();
enableMobileCardReactions();

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("macos-digest-theme", theme);
  const isDark = theme === "dark";

  if (toggle) {
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.innerHTML = isDark ? icons.sun : icons.moon;
  }

  if (metaTheme) metaTheme.setAttribute("content", isDark ? "#242528" : "#f5f5f7");
};

applyTheme(root.dataset.theme || "light");

toggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});