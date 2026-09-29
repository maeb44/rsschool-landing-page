function checkSize() {
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      console.log(1);
    }
  });
}
function showCards() {
  const btn = document.querySelector('.menu__button');
  btn.addEventListener('click', (e) => {
    const cards = document.querySelectorAll('.card');
    if (cards) {
      cards.forEach((e) => e.classList.remove('card--disabled'));
      btn.classList.add('disabled');
    }
  });
}
checkSize();
showCards();
