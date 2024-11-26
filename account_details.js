$(document).ready(function() {
    $('#personal-info-form').on('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        $('#formStatus').text('Personal information updated successfully!').show();
    });

    $('#change-password-form').on('submit', function(e) {
        e.preventDefault();
        const newPassword = $('#new-password').val();
        const confirmPassword = $('#confirm-password').val();
        
        if (newPassword !== confirmPassword) {
            $('#formStatus').text('Passwords do not match!').show();
            return;
        }
        
        // Add your form submission logic here
        $('#formStatus').text('Password changed successfully!').show();
    });

    $('#billing-preferences-form').on('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        $('#formStatus').text('Billing preferences updated successfully!').show();
    });
});
