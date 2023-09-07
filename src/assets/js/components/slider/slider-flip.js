import Splide from '@splidejs/splide';

function initializeSliders() {
    const sliderContainers = document.querySelectorAll('[data-slider]');

    sliderContainers.forEach((container, index) => {
        const mainSelector = `.${container.getAttribute('data-slider')}-images`;
        const thumbnailsSelector = `.${container.getAttribute('data-slider')}-list`;

        let main = new Splide(mainSelector, {
            type: 'fade',
            arrows: false,
            pagination: false,
            drag: false,
        });

        let thumbnails = new Splide(thumbnailsSelector, {
            arrows: false,
            isNavigation: true,
            pagination: false,
            drag: false,
            perPage: 'auto',
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
    });
}
initializeSliders();