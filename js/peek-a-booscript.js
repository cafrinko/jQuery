$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $(".hover").hover(function() {
    $(".seahorse-showing").toggle();
    $(".seahorse-hidden").toggle();
  });
});
