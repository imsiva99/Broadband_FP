$(document).ready(function() {
    // Handle compare button click
    $('.compare-btn').on('click', function() {
        const plan = $(this).data('plan');
        $('#comparison').append('<p>' + plan + '</p>');
        $('#compareModal').show();
    });

    // Handle close button click
    $('.close').on('click', function() {
        $('#compareModal').hide();
        $('#comparison').empty();
    });

    // Handle outside click
    $(window).on('click', function(event) {
        if (event.target == $('#compareModal')[0]) {
            $('#compareModal').hide();
            $('#comparison').empty();
        }
    });

    // Handle subscribe button click
    $('.subscribe-btn').on('click', function() {
        const plan = $(this).data('plan');
        alert('You have subscribed to ' + plan);
        // Add your subscription logic here
    });
});
