import Splide from '@splidejs/splide';

function newsSlider() {
  new Splide( '.news-block', {
    // type: 'loop',
    gap: 24,
    arrows: false,
    pagination: false,
    perPage: 1,
    padding: { right: 80},
    drag: true,
    perMove: 1,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        destroy: true,
      },
    }
  }).mount();
}
newsSlider();