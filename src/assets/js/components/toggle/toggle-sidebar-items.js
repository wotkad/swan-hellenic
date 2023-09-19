function toggleSidebarItems() {
  const $selectValuesContainer = $('.sidebar__select-types .sidebar__select__values');
  const $clearButton = $(".sidebar__button");
  const $headerButton = $(".sidebar__select__header");
  const $sidebarList = $(".sidebar__select__list");
  const $selectMonths = $(".sidebar__select-months");
  const $typeButton = $(".sidebar__select-type");
  const $selectItem = $(".sidebar__select__item");
  const $filterInput = $('.sidebar__filter input');
  const $labelsYears = $('.sidebar__labels-years input[name="year"]');

  $headerButton.on('click', function (e) {
    if ($headerButton.is(e.target) || $(".sidebar__select__value span").is(e.target) || $(".sidebar__select__header svg").is(e.target) || $(".sidebar__select__header use").is(e.target)) {
      $(this).toggleClass('active');
      $(this).next($sidebarList).toggleClass('active');
      $headerButton.not(this).removeClass('active');
      $headerButton.not(this).next($sidebarList).removeClass('active');
    }
  });

  $filterInput.on('input', function () {
    $clearButton.removeClass("sidebar__button-hidden");
  });

  function updateClearButtonVisibility() {
    $clearButton.removeClass("sidebar__button-hidden", $filterInput.filter(':checked').length === 0);
  }

  function updateSelectMonthsVisibility() {
    $selectMonths.toggle($labelsYears.is(':checked'));
  }

  $clearButton.on('click', function () {
    updateClearButtonVisibility();
    $filterInput.prop('checked', false);
    $selectMonths.hide();
    $(this).addClass('sidebar__button-hidden');
    $('.sidebar__select__item').removeClass('active');
    $('.sidebar__select-destination .sidebar__select__value span').text('Choose destination');
    $('.sidebar__select-departing_port .sidebar__select__value span').text('Choose departing port');
    $('.sidebar__select-months .sidebar__select__value span').text('Choose month');
    noValueFiller();
  });

  function createValues() {
    $('.sidebar__select-type input').on('change', function () {
      $selectValuesContainer.empty();
      $('.sidebar__select-type input:checked').each(function () {
        const $checked = $(this);
        const text = $checked.siblings('span').text();
        const newItem = $(`
          <div class="sidebar__select__value active">
            <input type="text" name="type" value="${text}">
            <span>${text}</span>
            <button class="sidebar__select__remove"><svg width="12px" height="12px" viewBox="0 0 24 24"><use xlink:href="#svg-x-mark"></use></svg></button>
          </div>
        `);
        $selectValuesContainer.append(newItem);
      });
    });

    $selectValuesContainer.on('click', '.sidebar__select__remove', function () {
      const $parent = $(this).parent();
      const text = $parent.find('span').text();
      $('.sidebar__select-type input[value="'+text+'"]').prop('checked', false);
      $parent.remove();
      noValueFiller();
    });
  }

  $typeButton.on('click', function () {
    createValues();
    setTimeout(function () {
      noValueFiller();
    }, 0);
  });

  function noValueFiller() {
    if ($('.sidebar__select-type input:checked').length == 0) {
      $selectValuesContainer.empty();
      let noItem = $(`
        <div class="sidebar__select__value">
          <span>Choose cruise types</span>
        </div>
      `);
      $selectValuesContainer.append(noItem);
    }
  }

  $selectItem.not($typeButton).on('click', function () {
    $(this).closest(".sidebar__block").find($selectItem).removeClass("active");
    $(this).addClass("active");
    const itemText = $(this).find("span").text();
    const itemValue = itemText;
    const selectValue = $(this).closest(".sidebar__block").find(".sidebar__select__value span");
    const selectInput = $(this).closest(".sidebar__block").find(".sidebar__select__value input");
    selectValue.text(itemText);
    selectInput.val(itemValue);
    $clearButton.removeClass("sidebar__button-hidden");
    $sidebarList.removeClass('active');
    $headerButton.removeClass('active');
    updateClearButtonVisibility();
  });

  // Добавьте следующий код:
  $(document).on('click', function(e) {
    if (!$typeButton.is(e.target) && !$headerButton.is(e.target) && !$sidebarList.is(e.target) && !$(".sidebar__select-type span").is(e.target) && !$(".sidebar__select-type svg").is(e.target)  && !$(".sidebar__select-type use").is(e.target)) {
      $sidebarList.removeClass('active');
      $headerButton.removeClass('active');
    }
  });

  $typeButton.on('click', function (e) {
    e.stopPropagation();
  });
  
  $(document).on('keydown', function(e) {
    if (e.key == 'Escape') {
        $headerButton.removeClass('active');
      $sidebarList.removeClass('active');
    }
  });

  $filterInput.on('input', updateClearButtonVisibility);
  $labelsYears.on('change', updateSelectMonthsVisibility);

}
toggleSidebarItems();