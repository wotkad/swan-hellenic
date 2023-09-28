function toggleShipSuite() {
  let deck = $('.popup-select__deck');
  let type = $('.popup-select__type')
  let room = $('.popup-select__suite');
  let typesContainer = $('.popup-select__types');
  let shipContainer = $('.popup-select__ship');
  for (let i = 0; i < Array.from(deck).length; i++) {
    $(deck[i]).on('click', function () {
      deck.removeClass('active');
      $(this).addClass('active');
      typesContainer.removeClass('active');
      shipContainer.removeClass('active');
      let id = deck[i].getAttribute('data-deck');
      let typesBlock = $('.popup-select__types[data-types="' + id + '"]');
      $(typesBlock).attr('data-types', $(this).attr('data-deck')).addClass('active');
      let shipBlock = $('.popup-select__ship[data-ship="' + id + '"]');
      $(shipBlock).attr('data-ship', $(this).attr('data-deck')).addClass('active');
    });
  }

  for (let i = 0; i < Array.from(type).length; i++) {
    $(type[i]).not('.popup-select__type-unavalible').on('click', function () {
      room.removeClass('active');
      type.removeClass('active');
      let id = type[i].getAttribute('data-type');
      let rooms = $('.popup-select__suite[data-type="' + id + '"]');
      let types = $('.popup-select__type[data-type="' + id + '"]');
      $('.popup-select__type').removeClass('active');
      $('.popup-select__suite').removeClass('active');
      $(rooms).attr('data-type', $(this).attr('data-type')).addClass('active');
      $(types).attr('data-type', $(this).attr('data-type')).addClass('active');
    });
  }
  for (let i = 0; i < Array.from(room).length; i++) {
    $(room[i]).not('.popup-select__suite-unavalible').on('click', function () {
      room.removeClass('active').removeClass('selected');
      let id = room[i].getAttribute('data-type');
      let rooms = $('.popup-select__suite[data-type="' + id + '"]');
      let types = $('.popup-select__type[data-type="' + id + '"]');
      $('.popup-select__type').removeClass('active');
      $('.popup-select__suite').removeClass('active');
      $(rooms).attr('data-type', $(this).attr('data-type')).addClass('active');
      $(types).attr('data-type', $(this).attr('data-type')).addClass('active');
      $(this).addClass('selected');
    });
  }
}
toggleShipSuite();