function togglePartnerText() {
  let button = $('.partner-block__toggle');
  button.on('click', function() {
    $(this).prev().addClass('active');
    $(this).hide();
  });
}
togglePartnerText();