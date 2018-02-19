$(document).ready (function() {
  $(".grid_cell").hover(function() {
      $(this).find('.topshot').removeClass('zoomIn').addClass('pulse')
  },function() {
    $(this).find('.topshot').removeClass('pulse').addClass('');
  });
});
