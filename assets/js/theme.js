const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const icon = document.querySelector("[data-theme-icon]");
const label = document.querySelector("[data-theme-label]");
const metaTheme = document.querySelector('meta[name="theme-color"]');

const layoutFixes = document.createElement("style");
layoutFixes.textContent = `
  .app-card .tag {
    margin-top: 0;
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
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.48);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .app-card,
    .feature-card,
    .archive-card {
      transition: none;
    }

    .app-card:hover,
    .feature-card:hover,
    .archive-card:hover {
      transform: none;
    }
  }
`;
document.head.appendChild(layoutFixes);

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("macos-digest-theme", theme);
  const isDark = theme === "dark";
  if (toggle) toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  if (icon) icon.textContent = isDark ? "☀" : "☾";
  if (label) label.textContent = isDark ? "Light" : "Dark";
  if (metaTheme) metaTheme.setAttribute("content", isDark ? "#101114" : "#f5f5f7");
};

applyTheme(root.dataset.theme || "light");

toggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});