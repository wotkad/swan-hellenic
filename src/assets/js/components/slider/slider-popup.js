import Splide from '@splidejs/splide';

function sliderPopup() {
  if ($('.popup__slider').length !== 0) {
    new Splide('.popup__slider', {
      gap: 20,
      arrows: false,
      perPage: 1,
      drag: true,
      speed: 800,
      perMove: 1,
      mediaQuery: 'min',
      breakpoints: {
        768: {
          destroy: true,
        },
      }
    }).mount();
  }
}
sliderPopup();