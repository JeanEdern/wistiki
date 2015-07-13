$('a').click(function (e) {
  e.preventDefault();
  return false;
  // $('.modal').modal('show');
})

// tableau[1].getAttribute('href')

// $(document).ready(function(){
//   // console.log("hello");
//   $('.modal').modal('show');
// })

// $(document).ready(function() {
//  // As the DOM is ready, you can traverse it, and register event handlers (callbacks)
//   $("#modal-trigger").on("click", function(){
//     var button = $(event.relatedTarget);
//     var recipient = button.data('href');
//     var modal = $('#myModal');
//     modal.find('#modal-link').attr("href", "http://www.google.com/");
//   });
// });

// $('#myModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var href = button.data('href') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $('#myModal')
//   modal.find('#modal-link').attr("href", href)
// })