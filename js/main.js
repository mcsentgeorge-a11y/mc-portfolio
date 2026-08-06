// ---------------------------------------------------------------------------
// Mobile navigation toggle
// ---------------------------------------------------------------------------
(function () {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the menu when a link is tapped (helps on mobile)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

// ---------------------------------------------------------------------------
// Project category filter (Story Bank / Projects page)
// ---------------------------------------------------------------------------
(function () {
  const filterBar = document.querySelector("[data-filter-bar]");
  if (!filterBar) return;

  const buttons = Array.from(filterBar.querySelectorAll(".filter-btn"));
  const cards = Array.from(document.querySelectorAll("[data-category]"));

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach(function (card) {
        const matches = filter === "all" || card.getAttribute("data-category") === filter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
})();

// ---------------------------------------------------------------------------
// Footer year
// ---------------------------------------------------------------------------
(function () {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
