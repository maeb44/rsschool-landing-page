import data from '../data/products.json' with { type: 'json' };
import { modal } from './utils/modal';

function createModal() {
  const cardsWrapper = document.querySelector('.menu__wrapper');
  if (!cardsWrapper) return;

  cardsWrapper.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const id = card.dataset.id;
    const drink = data.find((drink) => drink.id === Number(id));
    if (!drink) return;

    document.body.insertAdjacentHTML('beforeend', modal(drink));
    document.body.classList.add('hidden-modal'); // обычно "hidden-modal" = блокирует скролл, значит add

    const modalEl = document.body.lastElementChild;
    bindModal(modalEl);
  });
}

function bindModal(modalEl) {
  if (!modalEl) return;

  function close() {
    modalEl.remove();
    document.body.classList.remove('hidden-modal');
    document.removeEventListener('keydown', onEsc);
  }

  function onEsc(e) {
    if (e.key === 'Escape') close();
  }

  modalEl.querySelector('.modal__close')?.addEventListener('click', close);

  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) close();
  });

  document.addEventListener('keydown', onEsc);
}

createModal();
