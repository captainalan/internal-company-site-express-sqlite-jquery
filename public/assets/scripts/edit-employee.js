$('#cancelButton').click((event) => {
  event.preventDefault(); 
  // Why not just use a link?
  window.location.href = "/employees";
});
