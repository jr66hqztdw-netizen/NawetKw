/* ================================
   LANGUAGE TOGGLE
================================ */

// Default language = Arabic
let currentLang = "ar";

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

function setLanguage(lang) {
  currentLang = lang;

  const enElements = document.querySelectorAll(".lang-en");
  const arElements = document.querySelectorAll(".lang-ar");

  if (lang === "en") {
    enElements.forEach(el => el.style.display = "block");
    arElements.forEach(el => el.style.display = "none");
    enBtn.classList.add("active");
    arBtn.classList.remove("active");
    document.body.setAttribute("dir", "ltr");
  } else {
    enElements.forEach(el => el.style.display = "none");
    arElements.forEach(el => el.style.display = "block");
    arBtn.classList.add("active");
    enBtn.classList.remove("active");
    document.body.setAttribute("dir", "rtl");
  }
}

enBtn.addEventListener("click", () => setLanguage("en"));
arBtn.addEventListener("click", () => setLanguage("ar"));

// Initialize language
setLanguage("ar");

/* ================================
   NAVBAR SCROLL BEHAVIOR
================================ */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ================================
   CARD ANIMATIONS
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .price-card, .phase");

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 150);
  });
});
