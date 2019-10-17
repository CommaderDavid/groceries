// backend

// front end
$(document).ready(function() {
  $("form#market").submit(function(e) {
    var foods = ["food1", "food2", "food3", "food4", "food5", "food6"]

    foods.forEach(function(food) {
      var userInput = $("input#" + food).val();
      $(food).text(userInput);
    });

    $("#market").hide();

    e.preventDefault();
  });
});
