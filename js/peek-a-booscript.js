$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
  });
  $(".hover").hover(function() {
    $(".seahorse-showing").slideToggle();
    $(".seahorse-hidden").slideToggle();
  });
});
