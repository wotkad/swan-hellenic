import { gsap } from "gsap";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function togglePopup() {
  const buttons = $('.popup-trigger');
  const popupWrappers = $('.popup__wrapper');

  $(window).on('resize', function() {
    if ($(window).width() > 768) {
      gsap.to(popupWrappers, { y: 0, duration: 0});
    } else {
      gsap.to(popupWrappers, { x: 0, duration: 0});
    }
  });

  buttons.on('click', function() {
    const popupId = $(this).data('popup-button');
    const popup = $(`.popup[data-popup="${popupId}"]`);
    const bg = $('.popup__overlay');
    const wrapper = popup.find('.popup__wrapper');
    const container = popup.find('.popup__container');
    const close = popup.find('.popup__close, .popup__close-mob');
    const scrollableElement = document.querySelectorAll('.popup__form, .popup__labels, .popup__block')

    popup.addClass('active');
    bg.addClass('active');

    if (wrapper.length > 0) {
      if ($(window).width() > 768) {
        gsap.to(wrapper, { x: 0, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(wrapper, { y: 0, duration: 0.4, ease: "power2.out" });
      }
    }

    disablePageScroll(scrollableElement);

    close.on('click', function() {
      if ($(window).width() > 768) {
        gsap.to(wrapper, { x: container.outerWidth(), duration: 0.4, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
          bg.removeClass('active');
        }});
      } else {
        gsap.to(wrapper, { y: container.outerHeight(), duration: 0.4, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
          bg.removeClass('active');
        }});
      }
      enablePageScroll();
    });

    bg.on('click', function() {
      if ($(window).width() > 768) {
        gsap.to(wrapper, { x: container.outerWidth(), duration: 0.4, ease: "power2.out"});
        popup.removeClass('active');
        bg.removeClass('active');
      } else {
        gsap.to(wrapper, { y: container.outerHeight(), duration: 0.4, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
          bg.removeClass('active');
        }});
      }
      if (!$('.header__burger').hasClass('active')) {
        enablePageScroll();
      }
    });

    function closePopupByTouch() {
      let startY = null;
      popup.on('touchstart', function(event) {
        startY = event.originalEvent.touches[0].clientY;
      });
      popup.on('touchend', function(event) {
        if (startY) {
          const endY = event.originalEvent.changedTouches[0].clientY;
          const deltaY = endY - startY;
          if (deltaY > 200) {
            if ($(window).width() < 768) {
              gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
                popup.removeClass('active');
              }});
              enablePageScroll();
            }
          }
          startY = null;
        }
      });
    }
    closePopupByTouch();

    document.addEventListener('keydown', function(e) {
      if ($(window).width() > 768) {
        if (e.key == 'Escape' && wrapper.length !== 0) {
          gsap.to(wrapper, { x: container.outerWidth(), duration: 0.4, ease: "power2.out", onComplete: () => {
            popup.removeClass('active');
            bg.removeClass('active');
          }});
          enablePageScroll();
        }
      }
    });
  });
}

togglePopup();