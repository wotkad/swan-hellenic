import gsap from "gsap";

function scrollHeader() {
  let header = $('.header');
  let menu = $('.header__menu')
  let items = $('.header__menu > .header__item > .header__link')
  let container = $('.wrapper');
  let logo = $('.header__bottom .header__logo__inner');
  let main = $('main');
  gsap.to(logo, 0, {x: -(container.width() - menu.width()) / 2});
  $(window).on('scroll', function() {
    $('.header__languages').fadeOut(300);
    $('.header__toggle').removeClass('active');
    $('.search__form').removeClass('active');
    if (window.pageYOffset > 0) {
      header.addClass('scrolled');
      logo.addClass('active');
      main.addClass('scrolled');
      gsap.to(items, 0.3, {x: (container.width() - menu.width()) / 2});
    } else {
      header.removeClass('scrolled');
      logo.removeClass('active');
      main.removeClass('scrolled');
      gsap.to(items, 0.3, {x: 0});
    }
  });
}
scrollHeader();