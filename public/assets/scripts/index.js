$(document).ready(function(){
  console.log("Index page is ready!")

  $('#learn-more-button').click(function(event){
    event.preventDefault(); 
    console.log("You wanna learn more?!");
  });
});
