$(document).ready(function() {
  $("h1").click(function() {
      alert("This is a header.");
      alert("I told you, THIS IS A HEADER!");
    });
  $("h2").click(function() {
      alert("This is another header.");
    });
  $("p").click(function() {
      alert("This is a paragraph.");
    });
  $("img").dblclick(function() {
      alert("This is an image.");
    });
  $("li").hover(function() {
        alert("This is an unordered list.");
    });
});
