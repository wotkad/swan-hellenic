import Splide from '@splidejs/splide';

function sliderHero() {
  if ($('.hero').length !== 0) {
    let images = new Splide('.hero__images', {
      type: 'fade',
      rewind: true,
      arrows: false,
      perPage: 1,
      lazyLoad: 'nearby',
      pagination: false,
    });
    let content = new Splide('.hero__content', {
      type: 'fade',
      rewind: true,
      arrows: true,
      perPage: 1,
      drag: false,
      pagination: false,
    });
    images.sync(content);
    images.mount();
    content.mount();
  }
}
sliderHero();