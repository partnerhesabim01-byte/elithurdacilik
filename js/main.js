document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

const burger = document.getElementById('burgerBtn');
const mmenu = document.getElementById('mmenu');
const mmenuClose = document.getElementById('mmenuClose');
if (burger && mmenu) {
  burger.addEventListener('click', () => mmenu.classList.add('open'));
  mmenuClose && mmenuClose.addEventListener('click', () => mmenu.classList.remove('open'));
  mmenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mmenu.classList.remove('open')));
}

document.querySelectorAll('.faq-item .faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

try {
  if (!localStorage.getItem('cookieChoice')) {
    const b = document.getElementById('cookieBanner');
    b && setTimeout(() => b.classList.add('show'), 800);
  }
} catch (e) {}
