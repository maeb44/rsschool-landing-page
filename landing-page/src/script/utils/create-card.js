import { filteredData } from './fillter-data.js';

export function createCard(dataOfCard) {
  if (!dataOfCard) return;
  let nameOfImg = `${dataOfCard.name.toLowerCase().replaceAll(' ', '')}.png`;
  if (dataOfCard.category == 'coffee') {
    nameOfImg = nameOfImg.replace('.png', '.jpg');
  }
  return `
		  <div class="card">
              <img
                class="card__img"
                alt="${dataOfCard.category}"
                src="./public/${dataOfCard.category}/${nameOfImg}"
              />
              <div class="card__txt-wrapper">
                <div class="card__desc-wrapper">
                  <p class="card__title">${dataOfCard.name}</p>
                  <p class="card__subtitle">
                   ${dataOfCard.description}
                  </p>
                </div>
                <p class="card__title">$${dataOfCard.price}</p>
              </div>
</div>`;
}
