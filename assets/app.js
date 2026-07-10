const root = document.documentElement;
const issueRoot = document.querySelector("#issue");
const progress = document.querySelector(".reading-progress span");
const themeToggle = document.querySelector("#theme-toggle");
const copyButton = document.querySelector("#copy-link");

const escapeHtml = (value = "") =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  })[character]);

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("digest-theme", theme);
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Use light appearance" : "Use dark appearance",
  );
};

const savedTheme = localStorage.getItem("digest-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
setTheme(savedTheme || preferredTheme);

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelectorAll("[data-font]").forEach((button) => {
  button.addEventListener("click", () => {
    const current = Number.parseFloat(
      getComputedStyle(root).getPropertyValue("--reading-size"),
    );
    const change = button.dataset.font === "up" ? 0.08 : -0.08;
    const next = Math.min(1.4, Math.max(0.92, current + change));
    root.style.setProperty("--reading-size", `${next.toFixed(2)}rem`);
  });
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyButton.textContent = "Link copied";
    window.setTimeout(() => (copyButton.textContent = "Copy issue link"), 1600);
  } catch {
    copyButton.textContent = "Copy unavailable";
  }
});

const renderIssue = (issue, allIssues) => {
  document.title = `${issue.title} — Mac App Digest`;
  document.querySelector("#issue-kicker").textContent =
    `${issue.label} · Issue ${issue.number}`;
  document.querySelector("#issue-title").textContent = issue.title;
  document.querySelector("#issue-dek").textContent = issue.dek;
  document.querySelector("#issue-meta").innerHTML = [
    issue.date,
    `${issue.readingMinutes} min read`,
    `${issue.apps.length} apps`,
  ]
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");

  document.querySelector("#issue-intro").innerHTML = issue.intro
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  document.querySelector("#app-list").innerHTML = issue.apps
    .map(
      (app, index) => `
        <section class="app-entry">
          <div class="app-number">Item ${String(index + 1).padStart(2, "0")} · ${escapeHtml(app.category)}</div>
          <h2>${escapeHtml(app.name)}</h2>
          <p class="app-tagline">${escapeHtml(app.tagline)}</p>
          ${app.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          ${app.why ? `<p><strong>Why it matters:</strong> ${escapeHtml(app.why)}</p>` : ""}
          ${app.caveat ? `<p><strong>Caveat:</strong> ${escapeHtml(app.caveat)}</p>` : ""}
          ${app.verdict ? `
            <div class="app-verdict">
              <strong>${escapeHtml(app.verdictLabel)}</strong>
              <span>${escapeHtml(app.verdict)}</span>
            </div>
          ` : ""}
          <a class="app-link" href="${escapeHtml(app.url)}" target="_blank" rel="noreferrer">
            ${escapeHtml(app.linkLabel || `Visit ${app.name}`)} <span aria-hidden="true">↗</span>
          </a>
        </section>
      `,
    )
    .join("");

  document.querySelector("#issue-closing").innerHTML =
    `<p>${escapeHtml(issue.closing)}</p>`;

  document.querySelector("#archive-list").innerHTML = allIssues
    .map((archiveIssue) => {
      const current = archiveIssue.id === issue.id;
      const href = current ? "#issue" : `?issue=${encodeURIComponent(archiveIssue.id)}#issue`;
      return `
        <a class="archive-item" href="${href}" ${current ? 'aria-current="page"' : ""}>
          <small>№ ${escapeHtml(archiveIssue.number)}</small>
          <h3>${escapeHtml(archiveIssue.title)}</h3>
          <span>${escapeHtml(archiveIssue.date)}</span>
        </a>
      `;
    })
    .join("");
};

const showError = () => {
  issueRoot.innerHTML = `
    <div class="error-message">
      <h1>The digest could not be loaded.</h1>
      <p>Please refresh the page or try again in a moment.</p>
    </div>
  `;
};

const loadDigest = async () => {
  try {
    const response = await fetch("content/issues.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("Issue data unavailable");
    const data = await response.json();
    const requestedId = new URLSearchParams(window.location.search).get("issue");
    const issue = data.issues.find((item) => item.id === requestedId) || data.issues[0];
    renderIssue(issue, data.issues);
  } catch {
    showError();
  }
};

window.addEventListener("scroll", () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = available > 0 ? (window.scrollY / available) * 100 : 0;
  progress.style.width = `${Math.min(100, percentage)}%`;
}, { passive: true });

loadDigest();
