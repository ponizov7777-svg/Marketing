document.addEventListener('DOMContentLoaded', () => {

  // Burger
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      burger.classList.remove('active');
      mobileMenu.classList.remove('open');
    }
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold:0.15 });

  document.querySelectorAll('.fade').forEach(el => observer.observe(el));

  // Micro form (заглушка)
  const form = document.getElementById('microForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Заявка отправлена. Я свяжусь с вами.');
    form.reset();
  });

});
