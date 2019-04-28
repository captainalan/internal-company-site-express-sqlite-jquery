// Get the employee id (in the employees table) as stored in data attribute
$(document).ready(function() {
  $(".editButton").click(function() {
    let employee_id = this.getAttribute("data-employee-id");
    window.location.href = "/employee/edit/" + employee_id;
  });
});


