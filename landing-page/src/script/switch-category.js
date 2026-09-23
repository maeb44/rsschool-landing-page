import { addCards } from './add-cards';

function switchCat() {
  const categoryWrapper = document.querySelector('.menu__choose');
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
    }
  });
}

switchCat();
