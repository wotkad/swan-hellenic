function toggleSuiteType() {
  var buttons = $(".suites__button");

  // Назначаем обработчик события click для каждой кнопки
  buttons.on("click", function() {
    // Получаем контейнер с контентом, соответствующий ID кнопки
    var container = $(".suites__container[data-id='" + $(this).data("id") + "']");

    // Скрываем все контейнеры
    $(".suites__container").hide();

    // Показываем выбранный контейнер
    container.show();
  });
}
toggleSuiteType();