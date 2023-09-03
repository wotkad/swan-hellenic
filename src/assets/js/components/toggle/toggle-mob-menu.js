import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function toggleMobMenu() {
  let button = $(".header__burger");
  let menu = $(".mob-menu");
  let list = document.querySelectorAll('.mob-menu__list');
  button.on("click", function() {
    $(this).toggleClass('active')
    menu.toggleClass('active');
    if ($(this).hasClass('active')) {
      disablePageScroll(list);
      $('.mob-menu__block[data-id="menu"]').addClass('active');
    } else {
      $('.mob-menu__block').removeClass('active');
      $('.mob-menu__year').removeClass('active');
      enablePageScroll();
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