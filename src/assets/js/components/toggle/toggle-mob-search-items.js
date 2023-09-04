function toggleMobSearchItems() {
  $('.mob-search input[type="radio"]').on('change', function() {
    $('.mob-search__button-clear').addClass('active');
  });

  $('.mob-search input[name="location"]').on('change', function() {
    let selectedValue = $(this).val();
    $('.mob-search__block-location').addClass('active');
    $('.mob-search__block-location .mob-search__title span').text(selectedValue);
  });

  $('.mob-search input[name="year"], input[name="month"]').on('change', function() {
    let selectedYear = $('input[name="year"]:checked').val();
    let selectedMonth = $('input[name="month"]:checked').val() || '';
    $('.mob-search__labels-months').addClass('active');
    $('.mob-search__block-years').addClass('active');
    $('.mob-search__block-years .mob-search__title span').text(selectedYear + '/' + selectedMonth);
  });

  $('.mob-search input[name="ship"]').on('change', function() {
    let selectedValue = $(this).val();
    $('.mob-search__block-ships').addClass('active');
    $('.mob-search__block-ships .mob-search__title span').text(selectedValue);
  });

  $('.mob-search__button-clear').on('click', function() {
    $(this).removeClass('active');
    $('.mob-search input[type="radio"]').prop('checked', false);
    $('.mob-search__labels-months').hide();
    $('.mob-search__block').removeClass('active');
    $('.mob-search__block-location .mob-search__title span').text('Destination');
    $('.mob-search__block-years .mob-search__title span').text('Year & month');
    $('.mob-search__block-ships .mob-search__title span').text('Ship');
  });
}
toggleMobSearchItems();