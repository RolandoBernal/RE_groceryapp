$(document).ready(function() {

  // User clicked on an edit button
  $(".editButton").click(function () {
    window.location.href = "/todo/" + $(this)[0].id;
  });

  // User clicked on a delete button
  $(".deleteButton").click(function () {
    var todoItemId = $(this)[0].id;

    $.ajax({
      url: "/todo",
      method: "DELETE",
      data: {
        todo_id: todoItemId
      },
      success: function (response) {
        $("#todo_"+todoItemId).remove();  // Remove the DOM element on success
      }
    });
  });



});
