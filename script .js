/* =========================
   ПЛАВНОЕ ПОЯВЛЕНИЕ СЕКЦИЙ
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});

/* =========================
   МИКРО-ФОРМА (ПОКА ЗАГЛУШКА)
========================= */
const microForm = document.getElementById("microForm");

if (microForm) {
  microForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = microForm.querySelector('[name="name"]').value.trim();
    const contact = microForm.querySelector('[name="contact"]').value.trim();

    if (!contact) {
      alert("Пожалуйста, укажите способ связи");
      return;
    }

    alert(
      "Спасибо! Заявка принята.\n" +
      (name ? `Имя: ${name}\n` : "") +
      `Контакт: ${contact}`
    );

    microForm.reset();
  });
}
