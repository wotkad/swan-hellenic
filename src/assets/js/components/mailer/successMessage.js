export default function successMessage(text) {
  let container = $('.success-alert');
  let content = $('.success-alert__text')
  container.addClass('active');
  content.text(text);
  setTimeout(function() {
    container.removeClass('active');
  }, 2000);
}