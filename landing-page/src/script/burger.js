function burger() {
  const burger = document.querySelector('.burger');
  if (!burger) return;
  burger.addEventListener('click', (e) => {
    const nav = document.querySelector('.header__nav');
    if (!nav) return;
    if (burger.classList.contains('burger--active')) {
    }

    burger.classList.toggle('burger--active');
    nav.classList.toggle('header__nav--active');
    document.body.classList.toggle('hidden');
    window.scrollTo(0, 0);
  });
}
function toLink() {
  const nav = document.querySelector('.header__nav');
  if (!nav) return; // ← только если это внутри функции

  nav.addEventListener('click', (e) => {
    // 1. Меню должно быть открыто
    if (!nav.classList.contains('header__nav--active')) return;

    // 2. Клик должен быть по ссылке (или внутри неё)
    const link = e.target.closest('.link');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();

    const burger = document.querySelector('.burger');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('header__nav--active');

    document.body.classList.remove('hidden');

    setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  });
}
burger();
toLink();
