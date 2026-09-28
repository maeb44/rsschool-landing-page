export function modal(drink) {
  let nameOfImg = `${drink.name.toLowerCase().replaceAll(' ', '')}.png`;
  if (drink.category == 'coffee') {
    nameOfImg = nameOfImg.replace('.png', '.jpg');
  }
  return `      <div class="modal">
        <div class="modal__wrapper">
          <div class="modal__img">
            <img
              src="./${drink.category}/${nameOfImg}"
              alt="cup of drink"
            />
          </div>
          <div class="modal__desc-wrapper">
            <div class="modal__text-wrapper">
              <p class="modal__title">${drink.name}</p>
              <p class="modal__desc">
${drink.description}
              </p>
            </div>
            <div class="modal__text-wrapper">
              <p class="modal__desc">Size</p>
              <div class="modal__btn-wrapper">
                <button class="modal-button modal-button--size" data-add="${drink.sizes.s['add-price']}">
                  <div class="modal-button__sub">S</div>
                  <p class="modal-button__main">${drink.sizes.s.size}</p>
                </button>
                <button class="modal-button modal-button--size" data-add="${drink.sizes.m['add-price']}">
                  <div class="modal-button__sub">M</div>
                  <p class="modal-button__main">${drink.sizes.m.size}</p>
                </button>
                <button class="modal-button modal-button--size" data-add="${drink.sizes.l['add-price']}">
                  <div class="modal-button__sub">L</div>
                  <p class="modal-button__main">${drink.sizes.l.size}</p>
                </button>
              </div>
            </div>
            <div class="modal__text-wrapper">
              <p class="modal__desc">Additives</p>
              <div class="modal__btn-wrapper">
                <button class="modal-button modal-button--add" data-name="${drink.additives[0].name}" data-add="${drink.additives[0]['add-price']}">
                  <div class="modal-button__sub">1</div>
                  <p class="modal-button__main">${drink.additives[0].name}</p>
                </button>
                <button class="modal-button modal-button--add" data-name="${drink.additives[1].name}" data-add="${drink.additives[1]['add-price']}">
                  <div class="modal-button__sub">2</div>
                  <p class="modal-button__main">${drink.additives[1].name}</p>
                </button>
                <button class="modal-button modal-button--add" data-name="${drink.additives[2].name}" data-add="${drink.additives[2]['add-price']}">
                  <div class="modal-button__sub">3</div>
                  <p class="modal-button__main">${drink.additives[2].name}</p>
                </button>
              </div>
            </div>
            <div class="modal__text-wrapper">
              <div class="modal__price-wrapper">
                <span class="modal__title">Total:</span>
                <span class="modal__title modal__title--price" data-price="${drink.price}">$${drink.price}</span>
              </div>
              <div class="modal__pricedesc-wrapper">
                <span class="icon icon--modal">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_147813_8437)">
                      <path
                        d="M8 7.66663V11"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 5.00667L8.00667 4.99926"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_147813_8437">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p class="modal__desc-price">
                  The cost is not final. Download our mobile app to see the
                  final price and place your order. Earn loyalty points and
                  enjoy your favorite coffee with up to 20% discount.
                </p>
              </div>
            </div>
            <button class="modal__close">Close</button>
          </div>
        </div>
      </div>`;
}
