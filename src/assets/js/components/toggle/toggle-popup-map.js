import { gsap } from "gsap";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function togglePopupMap() {
  let button = $('.card__map');
  let popup = $('.popup-map');
  let bg = $('.popup__bg');
  let wrapper = $('.popup__wrapper');
  let close = $('.popup__close ');
  button.on('click', function() {
    popup.addClass('active');
    bg.addClass('active');
    if ($(window).width() > 768) {
      gsap.to(wrapper, {x: -popup.width(), duration: 0.4, ease: "power2.out"});
    } else {
      gsap.to(wrapper, {y: -popup.height(), duration: 0.4, ease: "power2.out"});
    }
    disablePageScroll();
  });

  close.on('click', function() {
    gsap.to(wrapper, {x: 0, duration: 0.8, ease: "power2.out", onComplete: () => {
      popup.removeClass('active');
    }});
    bg.removeClass('active');
    enablePageScroll();
  });

  bg.on('click', function() {
    gsap.to(wrapper, {y: 0, duration: 0.8, ease: "power2.out"});
    popup.removeClass('active');
    bg.removeClass('active');
    enablePageScroll();
  });
}
togglePopupMap();