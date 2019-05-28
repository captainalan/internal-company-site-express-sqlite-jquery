// Good ol' client side scripting
$(document).ready(function(){
    // Don't need to do anything here yet
});

$('#form-submit').click(function(event) {
    event.preventDefault(); // Prevents page from resetting
    // Fields that need to be added
    var data = {
        name: $('#inputName').val(),
        position: $('#inputPosition').val(),
        date_started: $('#inputDateStarted').val(),
        months_worked: $('#inputMonthsWorked').val(),
        hourly_rate: $('#inputHourlyRate').val(),
        total_billed: $('#inputTotalBilled').val()
    };

    $.ajax({
        url: "./new", //--> http://localhost:3000/employee/new
        method: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data)
    }).done(function() {
	console.log("Sent an AJAX request");
    });
});
