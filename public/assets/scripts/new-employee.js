// Good ol' client side scripting
$(document).ready(function(){
    // Don't need to do anything here yet
});

$('#form-submit').click(function(event) {
    event.preventDefault(); // Prevents page from resetting
    $.ajax({
	url: "/"
    }).done(function() {
	console.log("Sent an AJAX request");
    });
});
