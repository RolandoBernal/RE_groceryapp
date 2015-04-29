$(document).ready(function() {  // jQuery Starts

  // User clicked on an edit button
  $(".editButton").click(function () {
    window.location.href = "/grocery/" + $(this)[0].id;
  });

  // User clicked on a delete button
  $(".deleteButton").click(function () {
    var groceryItemId = $(this)[0].id;
    console.log("groceryItemId: ",groceryItemId);
    $.ajax({
      url: "/grocery",
      method: "DELETE",
      data: {
        grocery_id: groceryItemId
      },
      success: function (response) {
        console.log("groceryItemId: ",groceryItemId);
        $("#grocery_"+groceryItemId).remove();  // Remove the DOM element on success
      }
    });
  });



}); // jQuery Ends
