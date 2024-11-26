$(document).ready(function() {
  $('#feedbackForm').on('submit', function(e) {
      e.preventDefault();

      // Collect form data
      const formData = {
          name: $('#name').val(),
          email: $('#email').val(),
          rating: $('#rating').val(),
          comments: $('#comments').val()
      };

      // Send form data to the server (this example just logs it to the console)
      console.log(formData);

      // Show a success message (this can be replaced with actual form submission logic)
      alert('Thank you for your feedback!');

      // Clear the form
      $('#feedbackForm')[0].reset();
  });
});
