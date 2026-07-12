const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const metaTheme = document.querySelector('meta[name="theme-color"]');

const layoutFixes = document.createElement("style");
layoutFixes.textContent = `
  :root[data-theme="dark"] {
    --bg: #242528;
    --surface: #2e3034;
    --surface-strong: #373a3f;
    --muted: #b8bbc3