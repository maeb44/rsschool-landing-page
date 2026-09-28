function slider() {
  const sliderEl = document.querySelector('.slider');
  if (!sliderEl) return;

  const cards = Array.from(sliderEl.querySelectorAll('.slider__card'));
  const dots = Array.from(sliderEl.querySelectorAll('.slider__flat-btn'));

  let currentIndex = 0;
  const total = cards.length;

  function update() {
    cards.forEach(
      (e) => (e.style.transform = `translateX(-${currentIndex * 100}%)`),
    );
    dots.forEach((dot, i) => {
      dot.classList.toggle('slider__flat-btn--active', i === currentIndex);
    });
  }

  sliderEl.addEventListener('click', (e) => {
    if (e.target.closest('.slider__arrow--right')) {
      currentIndex = (currentIndex + 1) % total;
      update();
      return;
    }
    if (e.target.closest('.slider__arrow--left')) {
      currentIndex = (currentIndex - 1 + total) % total;
      update();
      return;
    }
    const dot = e.target.closest('.slider__flat-btn');
    if (dot) {
      currentIndex = dots.indexOf(dot);
      update();
    }
  });

  update();
}
slider();
