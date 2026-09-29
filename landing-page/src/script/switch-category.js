import { addCards } from './add-cards';

function switchCat() {
  const categoryWrapper = document.querySelector('.menu__choose');
  const btn = document.querySelector('.menu__button');
  if (!categoryWrapper) return;
  categoryWrapper.addEventListener('click', (e) => {
    const button = e.target.closest('.menu__choose-btn');
    if (button) {
      const buttons = Array.from(
        document.querySelectorAll('.menu__choose-btn'),
      );
      console.log(buttons);
      buttons.forEach((e) => e.classList.remove('menu__choose-btn--active'));
      button.classList.add('menu__choose-btn--active');
      const category = button.dataset.category;
      addCards(category);
      btn.classList.add('disabled');
      const cards = document.querySelectorAll('.card');
      if (cards.length > 4) {
        btn.classList.remove('disabled');
      }
    }
  });
}

switchCat();
