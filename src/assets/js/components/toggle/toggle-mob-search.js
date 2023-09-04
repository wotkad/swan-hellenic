import { disablePageScroll, enablePageScroll } from "scroll-lock";

function toggleMobSearch() {
  let button = $('.header__search-mob');
  let burger = $(".header__burger");
  let menu = $('.mob-search');
  let list = document.querySelectorAll('.mob-search__blocks');
  button.on("click", function() {
    if (!burger.hasClass('active')) {
      burger.addClass('active')
      disablePageScroll(list);
      menu.addClass('active');
    }
  });
  burger.on("click", function() {
    if (menu.hasClass('active')) {
      burger.removeClass('active');
      menu.removeClass('active');
      enablePageScroll();
    }
  });
}
toggleMobSearch();