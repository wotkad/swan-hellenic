import { gsap } from "gsap";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function toggleSidebarCruises() {
  let button = $('.heading__icon-cruises');
  let sidebar = $('.sidebar-cruises');
  let scrollableElement = document.querySelector('.sidebar__blocks');
  button.on('click', function() {
    if ($(window).width() < 768) {
      gsap.to(sidebar, {y: '-100%', opacity: 1, duration: 0.4, ease: "power2.out"});
    }
    disablePageScroll(scrollableElement);
  });

  function closeSidebarCruise() {
    let startY = null;
    sidebar.on('touchstart', function(event) {
      startY = event.originalEvent.touches[0].clientY;
    });
    sidebar.on('touchend', function(event) {
      if (startY) {
        const endY = event.originalEvent.changedTouches[0].clientY;
        const deltaY = endY - startY;
        if (deltaY > 100) {
          if ($(window).width() < 768) {
            gsap.to(sidebar, {y: '0', opacity: 1, duration: 0.4, ease: "power2.out"});
          }
          enablePageScroll();
        }
        startY = null;
      }
    });
  }
  closeSidebarCruise();
}
toggleSidebarCruises();