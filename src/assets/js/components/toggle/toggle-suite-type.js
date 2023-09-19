function toggleSuiteType() {
  let button = $('.suites__button');
  let container = $('.suites__container');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.suites__container[data-id="' + id + '"]');

      if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        container.removeClass('active');
      }
      
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(container).attr('data-id', $(this).attr('data-id')).addClass('active');
    });
  }
}
toggleSuiteType();