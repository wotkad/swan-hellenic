import { gsap } from "gsap";
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from "scroll-lock";

function toggleShipSuite() {
  let deck = $('.popup-select__deck');
  let type = $('.popup-select__type')
  let room = $('.popup-select__suite');
  let typesContainer = $('.popup-select__types');
  let shipContainer = $('.popup-select__ship');
  let select = $('.popup-select__button');
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

      $('.popup-select__preference-deck span').text($('.popup-select__deck.active').text())
      $('.popup-select__preference-type span').text($('.popup-select__type.active .popup-select__type__content p').eq(0).text())
      $('.popup-select__preference-stateroom span').text($('.popup-select__deck.active').eq(0).text())
      $('.popup-select__preference-price span').text($('.popup-select__type.active .popup-select__type__content span').eq(0).text())

      select.removeClass('button-disabled');

    });
  }

  const popup = $('.popup-select');
  const bg = $('.popup__overlay');
  const wrapper = popup.find('.popup__wrapper');
  const container = popup.find('.popup__container');

  select.on('click', function() {
    if ($(window).width() > 768) {
      gsap.to(wrapper, { x: container.outerWidth(), duration: 0.4, ease: "power2.out", onComplete: () => {
        popup.removeClass('active');
        bg.removeClass('active');
      }});
      clearQueueScrollLocks();
    } else {
      gsap.to(wrapper, { y: container.outerHeight(), duration: 0.4, ease: "power2.out", onComplete: () => {
        popup.removeClass('active');
        bg.removeClass('active');
      }});
    }

    $('.popup-select__suite').removeClass('active').removeClass('selected');
    $('.popup-select__type').removeClass('active');
    $('.popup-select__suite').removeClass('active');
    $('.popup-select__types').removeClass('active');
    $('.popup-select__types[data-types="deck_5"]').addClass('active');
    $('.popup-select__deck').removeClass('active');
    $('.popup-select__deck[data-deck="deck_5"]').addClass('active');
    $('.popup-select__ship').removeClass('active');
    $('.popup-select__ship[data-ship="deck_5"]').addClass('active');
    $('.popup-select__button').addClass('button-disabled');

    $('.popup-select__preference-deck span').text('-');
    $('.popup-select__preference-type span').text('-');
    $('.popup-select__preference-stateroom span').text('-');
    $('.popup-select__preference-price span').text('-');

    const cardButtons = $('.card-suite__button');
    cardButtons.each(function() {
      let dataSelected = $(this).find('.button__input').attr('data-selected');
      if (dataSelected === select.find('.button__input').attr('data-selected')) {
        cardButtons.find('.button__input').attr('checked', false);
        $(this).find('.button__input').attr('checked', true);
        cardButtons.removeClass('selected');
        $(this).addClass('selected');
      }
    });
    enablePageScroll();
  });
}
toggleShipSuite();