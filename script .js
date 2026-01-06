// Плавная прокрутка и обработка формы
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav if open
        closeNavIfNeeded();
      }
    });
  });

  // diagnostic button scroll to contacts
  const diagBtn = document.getElementById('diagnosticBtn');
  if(diagBtn){
    diagBtn.addEventListener('click', ()=> {
      document.getElementById('contacts').scrollIntoView({behavior:'smooth', block:'start'});
    });
  }

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function closeNavIfNeeded(){
    if(nav && nav.classList.contains('open')){
      nav.classList.remove('open');
      if(toggle) toggle.setAttribute('aria-expanded','false');
    }
  }

  // Form handling: simulate submission
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('inputName').value.trim();
      const contact = document.getElementById('inputContact').value.trim();
      if(!name || !contact){
        msg.style.color = 'crimson';
        msg.textContent = 'Пожалуйста, заполните все поля.';
        return;
      }

      // Здесь можно отправлять данные на сервер/telegram/email.
      // Пока — имитация отправки:
      msg.style.color = 'green';
      msg.textContent = 'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.';

      // Очистка формы через 2.5 сек
      setTimeout(()=> {
        form.reset();
        msg.textContent = '';
      }, 2500);
    });
  }
});