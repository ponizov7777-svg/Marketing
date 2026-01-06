// script.js — защитный и диагностический вариант

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  // диагностика: чтобы проверить, видит ли браузер элементы
  if (!burger) {
    console.error('script.js: элемент #burger не найден в DOM');
    return;
  }
  if (!mobileMenu) {
    console.error('script.js: элемент #mobileMenu не найден в DOM');
    return;
  }

  // временный тест: покажет alert при клике (уберите после проверки)
  // burger.addEventListener('click', () => alert('Клик работает — JS подключён'));

  // нормальная логика: переключение класса open и aria
  burger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    // визуальный маркер (опционально) — можно добавить класс active для анимации
    burger.classList.toggle('active', isOpen);
  });

  // Закрывать меню при клике на пункт — удобно на мобиле
  mobileMenu.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      burger.classList.remove('active');
    }
  });

  console.log('script.js: мобильное меню и бургер инициализированы');
});
