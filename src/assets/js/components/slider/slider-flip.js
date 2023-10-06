import Splide from '@splidejs/splide';

function sliderFlip() {
  if ($('.flip-slider__images').length !== 0) {
    const sliderContainers = document.querySelectorAll('.flip-slider');
    let i = 0;
    if (sliderContainers.length > 0) {

      sliderContainers.forEach((container) => {

        const mainSelector = `.${container.getAttribute('data-slider')}${i}__images`;
        const thumbnailsSelector = `.${container.getAttribute('data-slider')}${i}__list`;

        let main = new Splide(mainSelector, {
          arrows: false,
          pagination: false,
          mediaQuery: 'min',
          lazyLoad: 'nearby',
          drag: true,
          gap: 20,
          speed: 800,
          breakpoints: {
            1240: {
              drag: false,
              gap: 40
            },
          }
        });

        let thumbnails = new Splide(thumbnailsSelector, {
          arrows: true,
          isNavigation: true,
          pagination: false,
          mediaQuery: 'min',
          drag: true,
          perPage: 1,
          speed: 800,
          breakpoints: {
            1240: {
              arrows: false,
              drag: false,
              perPage: 'auto',
            },
          }
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
        i++;

      });
    }
  }
}
sliderFlip();