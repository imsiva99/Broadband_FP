$(document).ready(function() {
    // Switch to Registration Form
    $('#register-link').click(function(e) {
        e.preventDefault();
        $('#login-form').hide();
        $('#register-form').show();
    });

    // Switch to Login Form
    $('#login-link').click(function(e) {
        e.preventDefault();
        $('#register-form').hide();
        $('#login-form').show();
    });

    // Submit Login Form
    $('#login-form').submit(function(e) {
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        
        // Simulated login logic (replace with actual authentication)
        console.log('Email:', email);
        console.log('Password:', password);

        // Example: Redirect to dashboard after successful login
        // Replace with actual redirection logic
        window.location.href = 'dashboard.html';
    });

    // Submit Registration Form
    $('#register-form').submit(function(e) {
        e.preventDefault();
        var email = $('#reg-email').val();
        var password = $('#reg-password').val();

        // Simulated registration logic (replace with actual registration)
        console.log('Registered Email:', email);
        console.log('Registered Password:', password);

        // Example: Redirect to login after successful registration
        // Replace with actual redirection logic
        alert('Registration successful. Please login.');
        $('#register-form').hide();
        $('#login-form').show();
    });

    // Password Recovery Link (example, replace with actual functionality)
    $('#password-recovery').click(function(e) {
        e.preventDefault();
        alert('Password recovery functionality would be implemented here.');
    });
});
