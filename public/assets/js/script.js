// jquery code goes here
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-state").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("newBurger");
  
      var newEatState = {
        devoured: newEat
      };
  
      // Update the burger state to "devoured"
      $.ajax("/api/burger/" + id, {
        type: "UPDATE",
        data: newEatState
      }).then(
        function() {
          console.log("changed burger state to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[choice=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });