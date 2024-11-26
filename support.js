$(document).ready(function() {
    // FAQ section toggle
    $(".faq h3").click(function() {
        $(this).next(".answer").slideToggle();
    });

    // Live chat button click handler
    $("#liveChatButton").click(function() {
        $("#liveChatStatus").text("Connecting to live chat...");
        setTimeout(() => {
            $("#liveChatStatus").text("Live chat is currently unavailable. Please try again later.");
        }, 2000);
    });

    // Ticket form submission handler
    $("#ticketForm").submit(function(event) {
        event.preventDefault();
        $("#formStatus").text("Submitting your ticket...");
        setTimeout(() => {
            $("#formStatus").text("Your ticket has been submitted successfully.");
            $("#ticketForm")[0].reset();
        }, 2000);
    });
});
