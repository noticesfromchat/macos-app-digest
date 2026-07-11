const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const icon = document.querySelector("[data-theme-icon]");
const label = document.querySelector("[data-theme-label]");
const metaTheme = document.querySelector('meta[name="theme-color"]');

const tagSpacingFix = document.createElement("style");
tagSpacingFix.textContent = ".app-card .tag { margin-top: 0; }";
document.head.appendChild(tagSpacingFix);

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