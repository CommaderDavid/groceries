// backend

// front end
$(document).ready(function() {
  $("form#market").submit(function(e) {
    var gorc = [];
    var list = $("#groc").val().split(",").sort();
    
    list.forEach(function(item) {
      $("ul#list").append("<li>" + item.toUpperCase() + "</li>");
    });

    $("#market").hide();
    $("#list").show();

    e.preventDefault();
  });
});
