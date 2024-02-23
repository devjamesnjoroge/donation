// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById('scrollbtn');

    // Add click event listener to the button
    scrollToTopButton.addEventListener('click', function() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
