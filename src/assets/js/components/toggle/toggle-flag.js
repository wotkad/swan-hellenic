function toggleFlag() {
  let button = $('.popup__dropdown__current');
  let menu = $('.popup__dropdown__list');
  let items = $('.popup__dropdown__country');
  let input = $('.popup input[type="tel"]');
  button.on('click', function(e) {
    $(this).toggleClass('active');
    menu.toggleClass('active');
  });
  for (let i = 0; i < Array.from(items).length; i++) {
    $(items[i]).on('click', function () {
      let id = items[i].getAttribute('data-id');
      let block = $('.popup__dropdown__country [data-id="' + id + '"]');
      items.removeClass('active');
      button.removeClass('active');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
      menu.removeClass('active');
      input.val($(this).find('span').text());
      let newFlag = $(this).find('use').prop('href');
      let currentFlag = $(this).parent().prev().find('.popup__dropdown__flag use').prop('href');
      currentFlag.animVal = newFlag.animVal;
      currentFlag.baseVal = newFlag.baseVal;
    });
  }
  $(document).mouseup(function(e) {
    if (!menu.is(e.target) && !button.is(e.target) && button.has(e.target).length === 0) {
      menu.removeClass('active');
      button.removeClass('active');
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
      button.removeClass('active');
      menu.removeClass('active');
      document.removeEventListener('keydown', arguments.callee);
    }
  });
}
toggleFlag();