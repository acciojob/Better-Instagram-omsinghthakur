//your code here
$(document).ready(function() {
  $(".draggable").draggable({
    revert: "invalid",
    containment: "body",
    cursor: "move",
    zIndex: 100,
  });

  $(".draggable").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
      var draggableId = ui.draggable.attr("id");
      var droppableId = $(this).attr("id");

      if (draggableId !== droppableId) {
        // Swap background images
        var draggableBg = ui.draggable.css("background-image");
        var droppableBg = $(this).css("background-image");

        ui.draggable.css("background-image", droppableBg);
        $(this).css("background-image", draggableBg);
      }
    },
  });
});
