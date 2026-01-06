// =========================
// BURGER MENU
// =========================
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// =========================
// FORM (заглушка)
// =========================
const form = document.getElementById("microForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Заявка отправлена. Я свяжусь с вами.");
    form.reset();
  });
}
