export default function errorMessage(text) {
  let container = $('.error-alert');
  let content = $('.error-alert__text')
  container.addClass('active');
  content.text(text);
  setTimeout(function() {
    container.removeClass('active');
  }, 2000);
}