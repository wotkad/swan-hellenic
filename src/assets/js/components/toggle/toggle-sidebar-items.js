function toggleSidebarItems() {
  const $selectValuesContainer = $('.sidebar__select-types .sidebar__select__values');
  const $clearButton = $(".sidebar__button");
  const $headerButton = $(".sidebar__select__header");
  const $sidebarList = $(".sidebar__select__list");
  const $selectMonths = $(".sidebar__select-months");
  const $typeButton = $(".sidebar__select-type");
  const $selectItem = $(".sidebar__select__item");
  const $filterInput = $('.sidebar__filter input');

  $headerButton.on('click', function (e) {
    if ($headerButton.is(e.target) || $(".sidebar__select__value span").is(e.target) || $(".sidebar__select__header svg").is(e.target) || $(".sidebar__select__header use").is(e.target)) {
      $(this).addClass('active');
      $(this).next($sidebarList).addClass('active');
    }
  });

  $filterInput.on('input', function () {
    $clearButton.removeClass("sidebar__button-hidden");
  });

  $clearButton.on('click', function () {
    $filterInput.prop('checked', false);
    $selectMonths.hide();
    $(this).addClass('sidebar__button-hidden');
    $('.sidebar__select__item').removeClass('active');
    $('.sidebar__select-destination .sidebar__select__value span').text('Choose destination');
    $('.sidebar__select-departing_port .sidebar__select__value span').text('Choose departing port');
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
            <button class="sidebar__select__remove"><svg width="12px" height="12px" viewBox="0 0 24 24"><use xlink:href="#svg-close"></use></svg></button>
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
  });

  $('.sidebar__labels-years input[name="year"]').on('change', function () {
    $selectMonths.show();
  });


  $(document).on('mouseup', function(e) {
    if (!$typeButton.is(e.target) && !$(".sidebar__select-type span").is(e.target) && !$(".sidebar__select-type svg").is(e.target)  && !$(".sidebar__select-type use").is(e.target)) {
        $headerButton.removeClass('active');
      $sidebarList.removeClass('active');
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key == 'Escape') {
        $headerButton.removeClass('active');
      $sidebarList.removeClass('active');
    }
  });

}
toggleSidebarItems();