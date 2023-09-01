import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function toggleMobMenu() {
  let button = $(".header__burger");
  let menu = $(".mob-menu");
  button.on("click", function() {
    $(this).toggleClass('active')
    menu.toggleClass('active');
    if ($(this).hasClass('active')) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  });
}
toggleMobMenu();