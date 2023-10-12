import gsap from "gsap";
import { clearQueueScrollLocks, enablePageScroll } from "scroll-lock";

function toggleFaqContent() {
  let button = $('.faq__header');
  button.on('click', function() {
    $(this).parent().toggleClass('active');
  });
}
toggleFaqContent();

function toggleFaqAsideContent() {
  let button = $('.faq__link');
  let popup = $('.popup');
  let bg = $('.popup__overlay');
  let wrapper = $('.popup__wrapper');
  let container = $('.popup_container');
  button.on('click', function() {
    button.removeClass('active');
    $(this).addClass('active');
    if ($(window).width() <= 1240) {
      if (popup.hasClass('popup-faq')) {
        gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
          bg.removeClass('active');
        }});
      }
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });
}
toggleFaqAsideContent();