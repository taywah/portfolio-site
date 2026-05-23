// Theme toggle: persist preference in localStorage, respect system preference on first visit.
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("ty-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  function updateButton(btn) {
    if (!btn) return;
    const isDark = root.getAttribute("data-theme") === "dark";
    btn.textContent = isDark ? "Light mode" : "Dark mode";
    btn.setAttribute("aria-pressed", String(isDark));
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".theme-toggle");
    updateButton(btn);
    if (btn) {
      btn.addEventListener("click", function () {
        const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("ty-theme", next);
        updateButton(btn);
      });
    }
  });
})();
