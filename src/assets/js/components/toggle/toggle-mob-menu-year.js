function toggleMobMenuYear() {
  let button = $('.mob-menu__button');
  let container = $('.mob-menu__year');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.mob-menu__year[data-id="' + id + '"]');
      container.removeClass('current');
      button.removeClass('current');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('current');
      $(this).addClass('current');
    });
  }
}
toggleMobMenuYear();