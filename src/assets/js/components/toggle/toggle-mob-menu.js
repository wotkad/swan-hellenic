import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from "scroll-lock";

export default function toggleMobMenu() {
  let button = $(".header__burger");
  let menu = $(".mob-menu");
  let list = document.querySelectorAll('.mob-menu__list');
  button.on("click", function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      menu.removeClass('active');
      $('.mob-menu__block').removeClass('active');
      $('.mob-menu__year').removeClass('active');
      clearQueueScrollLocks();
      enablePageScroll();
    } else {
      $(this).addClass('active');
      menu.addClass('active');
      disablePageScroll(list);
      $('.mob-menu__block[data-id="menu"]').addClass('active');
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
      button.removeClass('active')
      menu.removeClass('active');
      $('.mob-menu__block').removeClass('active');
      $('.mob-menu__year').removeClass('active');
      enablePageScroll();
    }
  });
}
toggleMobMenu();