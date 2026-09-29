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
  if (!nav) return;

  nav.addEventListener('click', (e) => {
    if (!nav.classList.contains('header__nav--active')) return;

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
function escCloseBurger() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    const nav = document.querySelector('.header__nav');
    const burger = document.querySelector('.burger');

    if (!nav?.classList.contains('header__nav--active')) return;

    nav.classList.remove('header__nav--active');
    burger?.classList.remove('burger--active');
    document.body.classList.remove('hidden');
  });
}
burger();
toLink();
escCloseBurger();
