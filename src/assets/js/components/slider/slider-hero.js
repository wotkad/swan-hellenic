import Splide from '@splidejs/splide';

function sliderHero() {
  if ($('.hero').length !== 0) {
    let images = new Splide('.hero__images', {
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: false,
      perPage: 1,
      lazyLoad: 'nearby',
    });
    let content = new Splide('.hero__content', {
      type: 'fade',
      rewind: true,
      arrows: true,
      perPage: 1,
      drag: false,
      pagination: true,
    });
    images.sync(content);
    images.mount();
    content.mount();
  }
}
sliderHero();