const appCards = [...document.querySelectorAll(".app-card[data-tags]")];
const tagButtons = [...document.querySelectorAll("[data-tag]")];

if (appCards.length && tagButtons.length) {
  const filter = document.createElement("div");
  filter.className = "tag-filter";
  filter.setAttribute("aria-live", "polite");
  filter.innerHTML = '<span>showing apps tagged <strong></strong></span><button type="button">clear</button>';
  document.querySelector(".hero")?.insertAdjacentElement("afterend", filter);

  const label = filter.querySelector("strong");
  const clear = filter.querySelector("button");

  const applyTag = (tag) => {
    const active = Boolean(tag);
    filter.dataset.active = String(active);
    if (label) label.textContent = tag || "";

    appCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      card.hidden = active && !tags.includes(tag);
    });

    tagButtons.forEach((button) => {
      const pressed = active && button.dataset.tag === tag;
      button.setAttribute("aria-pressed", String(pressed));
    });
  };

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const pressed = button.getAttribute("aria-pressed") === "true";
      applyTag(pressed ? "" : button.dataset.tag);
    });
  });

  clear?.addEventListener("click", () => applyTag(""));
}
