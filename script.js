/* ================================
   LANGUAGE TOGGLE (AR DEFAULT)
================================ */

let currentLang = "ar";

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

function setLanguage(lang) {
  currentLang = lang;

  const enItems = document.querySelectorAll(".lang-en");
  const arItems = document.querySelectorAll(".lang-ar");

  if (lang === "en") {
    enItems.forEach(el => el.style.display = "block");
    arItems.forEach(el => el.style.display = "none");
    enBtn.classList.add("active");
    arBtn.classList.remove("active");
    document.body.setAttribute("dir", "ltr");
  } 
  else {
    enItems.forEach(el => el.style.display = "none");
    arItems.forEach(el => el.style.display = "block");
    arBtn.classList.add("active");
    enBtn.classList.remove("active");
    document.body.setAttribute("dir", "rtl");
  }
}

enBtn.addEventListener("click", () => setLanguage("en"));
arBtn.addEventListener("click", () => setLanguage("ar"));

// Initialize Arabic as default
setLanguage("ar");


/* ================================
   FLOATING NAVBAR ON SCROLL
================================ */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(255, 255, 255, 0.75)";
    navbar.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.45)";
    navbar.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
  }
});


/* ================================
   ACCORDION FUNCTIONALITY
================================ */
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Close if already open
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      header.classList.remove("open");
    } else {
      // Close all first
      document.querySelectorAll(".accordion-content").forEach(c => c.style.maxHeight = null);
      document.querySelectorAll(".accordion-header").forEach(h => h.classList.remove("open"));

      // Open this one
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add("open");
    }
  });
});
