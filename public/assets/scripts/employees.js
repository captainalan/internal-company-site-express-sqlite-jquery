// Get the employee id (in the employees table) as stored in data attribute
$(document).ready(function() {
  // Edit buttons
  $(".editButton").click(function() {
    let employee_id = $(this).parent().attr("data-employee-id");
    window.location.href = "/employee/edit/" + employee_id;
  });

  // Delete buttons
  $(".deleteButton").click(function(event) {
    event.preventDefault();
    // console.log($(this).parent().attr("data-employee-id"));
    let employee_id = $(this).parent().attr("data-employee-id");
    $.ajax({
      url: "/employee/edit/" + employee_id,
      method: 'DELETE'
    }).then(() => {;
      console.log("You clicked the delete button");
      window.location.href = "/employees"; // Return to the employees page
    });
  });
});


