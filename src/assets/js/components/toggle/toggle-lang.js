function toggleLang() {
  let button = $('.header__toggle');
  let menu = $('.header__languages');
  let items = $('.header__languages a');
  button.on('click', function() {
    $(this).addClass('active');
    menu.fadeIn(300);
  });
  Array.from(items).forEach(function(item) {
    $(item).on('click', function() {
      items.removeClass('current');
      $(this).addClass('current');
      button.removeClass('active');
      menu.fadeOut(300);
    });
  });
  $(document).mouseup( function(e) {
    if (!menu.is(e.target)) {
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