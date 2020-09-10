$(function() {
  $('a[href^="https://translate."]').each(function(index, elem) {
    const $elem = $(elem);
    $elem.replaceWith(function(){
      return $('<span>' + $(this).html() + '</span>');
    });
  })
});
