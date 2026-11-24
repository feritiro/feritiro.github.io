const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
