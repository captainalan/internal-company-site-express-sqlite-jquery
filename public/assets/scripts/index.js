$(document).ready(function(){
  console.log("Index page is ready!")

  $('#learn-more-button').click(function(event){
      window.location("/about"); // Why don't I just make a link?
  });
});
