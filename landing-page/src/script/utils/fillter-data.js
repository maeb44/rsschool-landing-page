import data from '../../data/products.json' with { type: 'json' };

export function filteredData(typeOfCard) {
  if (
    typeOfCard != 'coffee' &&
    typeOfCard != 'tea' &&
    typeOfCard != 'dessert'
  ) {
    return;
  }
  const copyData = data.filter((e) => e.category === typeOfCard);
  return copyData;
}
