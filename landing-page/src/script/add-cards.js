import { createCard } from './utils/create-card';
import { filteredData } from './utils/fillter-data';

export function addCards(typeOfCard = 'coffee') {
  const wrapper = document.querySelector('.menu__wrapper');
  if (!wrapper) return;
  if (
    typeOfCard != 'coffee' &&
    typeOfCard != 'tea' &&
    typeOfCard != 'dessert'
  ) {
    return;
  }
  const data = filteredData(typeOfCard);
  const arrOfCard = data.map((e) => createCard(e));
  wrapper.innerHTML = arrOfCard.join('\n');
}
addCards();
