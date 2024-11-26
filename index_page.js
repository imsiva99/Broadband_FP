$(document).ready(function() {
  // Highlight the current page in the navbar
  var currentPage = window.location.pathname.split('/').pop().split('.').shift();
  $('#' + currentPage).addClass('active');

  // Handle form submission for feedback (example)
  $('#feedbackForm').on('submit', function(e) {
      e.preventDefault();
      const rating = $('input[name="rating"]:checked').val();
      const comments = $('#comments').val();
      const survey = $('#survey').val();

      if (!rating) {
          alert('Please select a rating.');
          return;
      }

      if (!comments) {
          alert('Please enter your comments.');
          return;
      }

      if (!survey) {
          alert('Please select an option for the survey.');
          return;
      }

      alert('Thank you for your feedback!');
      // Here you can handle form submission, e.g., send data to server
      $('#feedbackForm')[0].reset();
  });
});
