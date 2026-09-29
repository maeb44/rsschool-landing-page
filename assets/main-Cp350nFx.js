(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){document.querySelector(`.header__theme-select`).addEventListener(`click`,e=>{let t=e.target.closest(`.icon--light`),n=e.target.closest(`.icon--dark`);if(t){let e=`light`;localStorage.setItem(`theme`,e),document.documentElement.dataset.theme=e}if(n){let e=`dark`;localStorage.setItem(`theme`,e),document.documentElement.dataset.theme=e}})}e();var t=JSON.parse(`[{"id":1,"name":"Irish coffee","description":"Fragrant black coffee with Jameson Irish whiskey and whipped milk","price":"7.00","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":2,"name":"Kahlua coffee","description":"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk","price":"7.00","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":3,"name":"Honey raf","description":"Espresso with frothed milk, cream and aromatic honey","price":"5.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":4,"name":"Ice cappuccino","description":"Cappuccino with soft thick foam in summer version with ice","price":"5.00","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":5,"name":"Espresso","description":"Classic black coffee","price":"4.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":6,"name":"Latte","description":"Espresso coffee with the addition of steamed milk and dense milk foam","price":"5.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":7,"name":"Latte macchiato","description":"Espresso with frothed milk and chocolate","price":"5.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":8,"name":"Coffee with cognac","description":"Fragrant black coffee with cognac and whipped cream","price":"6.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":9,"name":"Moroccan","description":"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint","price":"4.50","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":10,"name":"Ginger","description":"Original black tea with fresh ginger, lemon and honey","price":"5.00","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":11,"name":"Cranberry","description":"Invigorating black tea with cranberry and honey","price":"5.00","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":12,"name":"Sea buckthorn","description":"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon","price":"5.50","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"id":13,"name":"Marble cheesecake","description":"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam","price":"3.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"id":14,"name":"Red velvet","description":"Layer cake with cream cheese frosting","price":"4.00","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"id":15,"name":"Cheesecakes","description":"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar","price":"4.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"id":16,"name":"Creme brulee","description":"Delicate creamy dessert in a caramel basket with wild berries","price":"4.00","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"id":17,"name":"Pancakes","description":"Tender pancakes with strawberry jam and fresh strawberries","price":"4.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"id":18,"name":"Honey cake","description":"Classic honey cake with delicate custard","price":"4.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"id":19,"name":"Chocolate cake","description":"Cake with hot chocolate filling and nuts with dried apricots","price":"5.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"id":20,"name":"Black forest","description":"A combination of thin sponge cake with cherry jam and light chocolate mousse","price":"6.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]}]`);function n(e){if(e==`coffee`||e==`tea`||e==`dessert`)return t.filter(t=>t.category===e)}function r(e,t=``){if(!e)return;let n=`${e.name.toLowerCase().replaceAll(` `,``)}.png`;return e.category==`coffee`&&(n=n.replace(`.png`,`.jpg`)),`
		  <div class="card ${t}" data-id="${e.id}">
              <img
                class="card__img"
                alt="${e.category}"
                src="./${e.category}/${n}"
              />
              <div class="card__txt-wrapper">
                <div class="card__desc-wrapper">
                  <p class="card__title">${e.name}</p>
                  <p class="card__subtitle">
                   ${e.description}
                  </p>
                </div>
                <p class="card__title">$${e.price}</p>
              </div>
</div>`}function i(e=`coffee`){let t=document.querySelector(`.menu__wrapper`);t&&(e==`coffee`||e==`tea`||e==`dessert`)&&(t.innerHTML=n(e).map((e,t)=>t>3?r(e,`card--disabled`):r(e)).join(`
`))}i();function a(){let e=document.querySelector(`.menu__choose`),t=document.querySelector(`.menu__button`);e&&e.addEventListener(`click`,e=>{let n=e.target.closest(`.menu__choose-btn`);if(n){let e=Array.from(document.querySelectorAll(`.menu__choose-btn`));console.log(e),e.forEach(e=>e.classList.remove(`menu__choose-btn--active`)),n.classList.add(`menu__choose-btn--active`);let r=n.dataset.category;i(r),t.classList.add(`disabled`),document.querySelectorAll(`.card`).length>4&&t.classList.remove(`disabled`)}})}a();function o(){let e=document.querySelector(`.burger`);e&&e.addEventListener(`click`,t=>{let n=document.querySelector(`.header__nav`);n&&(e.classList.contains(`burger--active`),e.classList.toggle(`burger--active`),n.classList.toggle(`header__nav--active`),document.body.classList.toggle(`hidden`),window.scrollTo(0,0))})}function s(){let e=document.querySelector(`.header__nav`);e&&e.addEventListener(`click`,t=>{if(!e.classList.contains(`header__nav--active`))return;let n=t.target.closest(`.link`);if(!n)return;let r=n.getAttribute(`href`);r&&r.startsWith(`#`)&&(t.preventDefault(),document.querySelector(`.burger`)?.classList.toggle(`burger--active`),e.classList.toggle(`header__nav--active`),document.body.classList.remove(`hidden`),setTimeout(()=>{document.querySelector(r)?.scrollIntoView({behavior:`smooth`,block:`start`})},300))})}function c(){document.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;let t=document.querySelector(`.header__nav`),n=document.querySelector(`.burger`);t?.classList.contains(`header__nav--active`)&&(t.classList.remove(`header__nav--active`),n?.classList.remove(`burger--active`),document.body.classList.remove(`hidden`))})}o(),s(),c();function l(e){let t=`${e.name.toLowerCase().replaceAll(` `,``)}.png`;return e.category==`coffee`&&(t=t.replace(`.png`,`.jpg`)),`      <div class="modal">
        <div class="modal__wrapper">
          <div class="modal__img">
            <img
              src="./${e.category}/${t}"
              alt="cup of drink"
            />
          </div>
          <div class="modal__desc-wrapper">
            <div class="modal__text-wrapper">
              <p class="modal__title">${e.name}</p>
              <p class="modal__desc">
${e.description}
              </p>
            </div>
            <div class="modal__text-wrapper">
              <p class="modal__desc">Size</p>
              <div class="modal__btn-wrapper">
                <button class="modal-button modal-button--size modal-button--active" data-add="${e.sizes.s[`add-price`]}">
                  <div class="modal-button__sub">S</div>
                  <p class="modal-button__main">${e.sizes.s.size}</p>
                </button>
                <button class="modal-button modal-button--size" data-add="${e.sizes.m[`add-price`]}">
                  <div class="modal-button__sub">M</div>
                  <p class="modal-button__main">${e.sizes.m.size}</p>
                </button>
                <button class="modal-button modal-button--size" data-add="${e.sizes.l[`add-price`]}">
                  <div class="modal-button__sub">L</div>
                  <p class="modal-button__main">${e.sizes.l.size}</p>
                </button>
              </div>
            </div>
            <div class="modal__text-wrapper">
              <p class="modal__desc">Additives</p>
              <div class="modal__btn-wrapper">
                <button class="modal-button modal-button--add" data-name="${e.additives[0].name}" data-add="${e.additives[0][`add-price`]}">
                  <div class="modal-button__sub">1</div>
                  <p class="modal-button__main">${e.additives[0].name}</p>
                </button>
                <button class="modal-button modal-button--add" data-name="${e.additives[1].name}" data-add="${e.additives[1][`add-price`]}">
                  <div class="modal-button__sub">2</div>
                  <p class="modal-button__main">${e.additives[1].name}</p>
                </button>
                <button class="modal-button modal-button--add" data-name="${e.additives[2].name}" data-add="${e.additives[2][`add-price`]}">
                  <div class="modal-button__sub">3</div>
                  <p class="modal-button__main">${e.additives[2].name}</p>
                </button>
              </div>
            </div>
            <div class="modal__text-wrapper">
              <div class="modal__price-wrapper">
                <span class="modal__title">Total:</span>
                <span class="modal__title modal__title--price" data-price="${e.price}">$${e.price}</span>
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
      </div>`}function u(){let e=document.querySelector(`.menu__wrapper`);e&&e.addEventListener(`click`,e=>{let n=e.target.closest(`.card`);if(!n)return;let r=n.dataset.id,i=t.find(e=>e.id===Number(r));if(!i)return;document.body.insertAdjacentHTML(`beforeend`,l(i)),document.body.classList.add(`hidden-modal`);let a=document.body.lastElementChild;d(a)})}function d(e){if(!e)return;function t(){e.remove(),document.body.classList.remove(`hidden-modal`),document.removeEventListener(`keydown`,n)}function n(e){e.key===`Escape`&&t()}let r=e.querySelector(`.modal__title--price`),i=Number(r.dataset.price),a=0,o=new Map;function s(){let e=[...o.values()].reduce((e,t)=>e+t,0),t=i+a+e;r.textContent=`$${t.toFixed(2)}`}e.querySelectorAll(`.modal-button--size`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.modal-button--size`).forEach(e=>e.classList.remove(`modal-button--active`)),t.classList.add(`modal-button--active`),a=Number(t.dataset.add),s()})}),e.querySelectorAll(`.modal-button--add`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.name,n=Number(e.dataset.add);e.classList.contains(`modal-button--active`)?(e.classList.remove(`modal-button--active`),o.delete(t)):(e.classList.add(`modal-button--active`),o.set(t,n)),s()})}),s(),e.querySelector(`.modal__close`)?.addEventListener(`click`,t),e.addEventListener(`click`,n=>{n.target===e&&t()}),document.addEventListener(`keydown`,n)}u();function f(){let e=document.querySelector(`.slider`);if(!e)return;let t=Array.from(e.querySelectorAll(`.slider__card`)),n=Array.from(e.querySelectorAll(`.slider__flat-btn`)),r=0,i=t.length;function a(){t.forEach(e=>e.style.transform=`translateX(-${r*100}%)`),n.forEach((e,t)=>{e.classList.toggle(`slider__flat-btn--active`,t===r)})}e.addEventListener(`click`,e=>{if(e.target.closest(`.slider__arrow--right`)){r=(r+1)%i,a();return}if(e.target.closest(`.slider__arrow--left`)){r=(r-1+i)%i,a();return}let t=e.target.closest(`.slider__flat-btn`);t&&(r=n.indexOf(t),a())}),a()}f();function p(){let e=document.querySelector(`.menu__button`);e&&e.addEventListener(`click`,t=>{let n=document.querySelectorAll(`.card`);n&&(n.forEach(e=>e.classList.remove(`card--disabled`)),e.classList.add(`disabled`))})}p();
//# sourceMappingURL=main-Cp350nFx.js.map