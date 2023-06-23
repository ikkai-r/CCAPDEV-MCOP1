document.addEventListener("DOMContentLoaded", function() {
    // Get the query parameter from the URL
    var queryParams = new URLSearchParams(window.location.search);
    var msg = queryParams.get("msg");
    // Check if the message is "logout" and display the logout message
    if (msg === "logout") {
        $('#logoutModal').modal('show');

        setTimeout(function() {
            $('#logoutModal').modal('hide');
        }, 1500)
    }
});

$(document).ready(function() {
    $('.post').click(function() {
      window.location.href = 'view-post.html';
    });
});