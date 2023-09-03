import { enablePageScroll } from "scroll-lock";

function toggleLang() {
  let button = $('.header__toggle');
  let menu = $('.header__languages');
  let items = $('.select-language');
  button.on('click', function() {
    $(this).addClass('active');
    menu.fadeIn(300);
  });
  for (let i = 0; i < Array.from(items).length; i++) {
    $(items[i]).on('click', function () {
      let id = items[i].getAttribute('data-id');
      let block = $('.select-language[data-id="' + id + '"]');
      items.removeClass('active');
      button.removeClass('active');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
      menu.fadeOut(300);

      $(".header__burger").removeClass('active')
      $(".mob-menu").removeClass('active');
      $('.mob-menu__block').removeClass('active');
      enablePageScroll();
    });
  }
  $(document).mouseup(function(e) {
    if (!menu.is(e.target) && !button.is(e.target)) {
      menu.fadeOut(300);
      button.removeClass('active');
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
      button.removeClass('active');
      menu.fadeOut(300);
    }
  });
}
toggleLang();