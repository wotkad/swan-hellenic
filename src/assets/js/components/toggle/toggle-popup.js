import { gsap } from "gsap";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function togglePopup() {
  const buttons = $('.popup-trigger');

  buttons.on('click', function() {
    const popupId = $(this).data('popup-button');
    const popup = $(`.popup[data-popup="${popupId}"]`);
    const bg = popup.find('.popup__bg');
    const wrapper = popup.find('.popup__wrapper');
    const close = popup.find('.popup__close');

    popup.addClass('active');
    bg.addClass('active');

    if ($(window).width() > 768) {
      gsap.to(wrapper, { x: -popup.width(), duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(wrapper, { y: 0, duration: 0.4, ease: "power2.out" });
    }

    disablePageScroll();

    close.on('click', function() {
      if ($(window).width() > 768) {
        gsap.to(wrapper, { x: 0, duration: 0.8, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
        }});
      } else {
        gsap.to(wrapper, { y: '100%', duration: 0.8, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
        }});
      }
      bg.removeClass('active');
      enablePageScroll();
    });

    bg.on('click', function() {
      if ($(window).width() > 768) {
        gsap.to(wrapper, { x: 0, duration: 0.8, ease: "power2.out" });
      } else {
        gsap.to(wrapper, { y: '100%', duration: 0.8, ease: "power2.out" });
      }
      popup.removeClass('active');
      bg.removeClass('active');
      enablePageScroll();
    });

    function closePopup() {
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
              enablePageScroll();
              gsap.to(wrapper, { y: '100%', duration: 0.8, ease: "power2.out" });
              popup.removeClass('active');
            }
          }
          startY = null;
        }
      });
    }
    closePopup();

    document.addEventListener('keydown', function(e) {
      if (e.key == 'Escape' && wrapper.length !== 0) {
        gsap.to(wrapper, { x: 0, duration: 0.8, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
        }});
        bg.removeClass('active');
        enablePageScroll();
      }
    });
  });
}

togglePopup();