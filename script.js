document.addEventListener("DOMContentLoaded", function() {
    // Function to display alert when contact email link is clicked
    function displayContactAlert() {
        alert("For any inquiries or suggestions, please feel free to contact us at devanarayandevan4@gmail.com");
    }

    // Add click event listener to the contact email link
    var contactEmailLink = document.querySelector("#contact a");
    contactEmailLink.addEventListener("click", displayContactAlert);
});