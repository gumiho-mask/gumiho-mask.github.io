$(document).ready(function() {
  $("#product__new--multi-item").swiperight(function() {
     $(this).carousel('prev');
   });
  $("#product__new--multi-item").swipeleft(function() {
     $(this).carousel('next');
  });
});
