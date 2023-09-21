import { gsap } from "gsap";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function toggleSidebarCruises() {
  let button = $('.heading__icon-cruises');
  let sidebar = $('.sidebar-cruises');
  let bg = $('.popup__overlay');
  let scrollableElement = document.querySelector('.sidebar__blocks');
  button.on('click', function() {
    if ($(window).width() < 1240) {
      bg.addClass('active');
      gsap.to(sidebar, {y: 0, opacity: 1, duration: 0.4, ease: "power2.out"});
    }
    disablePageScroll(scrollableElement);
  });
  if (sidebar.length > 0) {
    $(window).on('resize', function() {
      if ($(window).width() > 1240) {
        gsap.to(sidebar, {y: 0, opacity: 1, duration: 0});
      } else {
        gsap.to(sidebar, {y: '100%', opacity: 0, duration: 0});
      }
    });
  }
  function closeSidebarCruise() {
    let startY = null;
    sidebar.on('touchstart', function(event) {
      startY = event.originalEvent.touches[0].clientY;
    });
    sidebar.on('touchend', function(event) {
      if (startY) {
        const endY = event.originalEvent.changedTouches[0].clientY;
        const deltaY = endY - startY;
        if (deltaY > 200) {
          if ($(window).width() < 1240) {
            bg.removeClass('active');
            gsap.to(sidebar, {y: '100%', opacity: 1, duration: 0.4, ease: "power2.out"});
            enablePageScroll();
          }
        }
        startY = null;
      }
    });
  }
  closeSidebarCruise();

  bg.on('click', function() {
    bg.removeClass('active');
    if (sidebar.length > 0) {
      gsap.to(sidebar, {y: '100%', opacity: 1, duration: 0.4, ease: "power2.out"});
    }
    enablePageScroll();
  });
}
toggleSidebarCruises();