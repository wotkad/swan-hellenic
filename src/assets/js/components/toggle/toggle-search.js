function toggleSearch() {
  let button = $('.header__search');
  let search = $('.search__form');
  button.on('click', function() {
    search.addClass('active');
  });
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
      search.removeClass('active');
    }
  });
}
toggleSearch();