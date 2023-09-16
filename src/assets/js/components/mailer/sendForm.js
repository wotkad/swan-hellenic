import sendMail from "./sendMail.js"
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function sendForm() {

  let closeAlertPopup = $('.popup-alert__button');
  let bg = $('.popup__overlay');
  let popupAlert = $('.popup-alert')
  closeAlertPopup.on('click', function() {
    popupAlert.removeClass('active');
    bg.removeClass('active');
    enablePageScroll();
  });

  function sendPopupForm() {
    $('button[type="submit"]').closest('form').on('submit', function(e) {
      disablePageScroll();
      let that = $(this);
      e.preventDefault();
      sendMail(that).then(function() {
        $('.popup').removeClass('active');
        $('.popup__bg').removeClass('active');
        that.get(0).reset();
      });
    });
  }
  sendPopupForm();

  // function inputMask() {
  //   let input =  $('input[type="tel"]');
  //   Array.from(input).forEach(function(element) {
  //     let mask = new Inputmask('+7 (999) 999-99-99');
  //     mask.mask(element);
  //   });
  // }
  // inputMask();
}
setTimeout(function() {
  sendForm();
}, 100);