// Good ol' client side scripting
$(document).ready(function(){
  console.log("File loaded successfully");
});

$('#form-submit').click(function(event) {
  event.preventDefault(); // Prevents page from resetting
  console.log("Need to implement form submitty thing");
});
