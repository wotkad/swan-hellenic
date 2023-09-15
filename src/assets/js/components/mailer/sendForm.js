import sendMail from "./sendMail.js"
import successMessage from "./successMessage.js";
import errorMessage from "./errorMessage.js";

function sendForm() {

  function sendPopupForm() {
    let form = $('.popup form');
    if (form) {
      form.on('submit', function(e) {
        e.preventDefault();
        sendMail(that).then(function() {
          that.get(0).reset();
          // if (form.hasClass('subscribe__form')) {
          //   return successMessage('Бриф отправлен!');
          // } else {
          //   return successMessage('Заявка отправлена!');
          // }
        });
        // errorMessage('Ошибка отправки!');
      });
    }
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