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
    document.body.classList.add('hidden-modal');

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

  const priceEl = modalEl.querySelector('.modal__title--price');
  const basePrice = Number(priceEl.dataset.price); // базовая, не трогаем

  let selectedSizePrice = 0;
  const selectedAdditives = new Map();

  function updatePrice() {
    const additivesSum = [...selectedAdditives.values()].reduce(
      (a, p) => a + p,
      0,
    );
    const total = basePrice + selectedSizePrice + additivesSum;
    priceEl.textContent = `$${total.toFixed(2)}`;
  }

  modalEl.querySelectorAll('.modal-button--size').forEach((btn) => {
    btn.addEventListener('click', () => {
      modalEl
        .querySelectorAll('.modal-button--size')
        .forEach((b) => b.classList.remove('modal-button--active'));
      btn.classList.add('modal-button--active');
      selectedSizePrice = Number(btn.dataset.add);
      updatePrice();
    });
  });

  modalEl.querySelectorAll('.modal-button--add').forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const val = Number(btn.dataset.add);
      if (btn.classList.contains('modal-button--active')) {
        btn.classList.remove('modal-button--active');
        selectedAdditives.delete(name);
      } else {
        btn.classList.add('modal-button--active');
        selectedAdditives.set(name, val);
      }
      updatePrice();
    });
  });

  updatePrice();

  modalEl.querySelector('.modal__close')?.addEventListener('click', close);

  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) close();
  });

  document.addEventListener('keydown', onEsc);
}

createModal();
