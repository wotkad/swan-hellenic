import Splide from '@splidejs/splide';

function initializeSliders() {
  const sliderContainers = document.querySelectorAll('[data-slider]');
  let i = 0;
  sliderContainers.forEach((container, index) => {

    const mainSelector = `.${container.getAttribute('data-slider')}${i}__images`;
    const thumbnailsSelector = `.${container.getAttribute('data-slider')}${i}__list`;

    let main = new Splide(mainSelector, {
      arrows: false,
      pagination: false,
      mediaQuery: 'min',
      lazyLoad: 'nearby',
      drag: false,
      gap: 20,
      speed: 800,
      breakpoints: {
        1240: {
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
initializeSliders();

$(window).on('resize', function() {
  initializeSliders();
});