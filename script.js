function sendMail(event) {
    event.preventDefault(); // Prevents form from refreshing

    let parms = {
        user_name: document.getElementById("name").value, 
        user_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_m58o6we", "template_n6tvn8b", parms)
        .then(function(response) {
            console.log("SUCCESS!", response);
            alert("Email sent successfully!");
        })
        .catch(function(error) {
            console.error("FAILED...", error);
            alert("Failed to send email. Please try again.");
        });
}

// Attach event listener to the form
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", sendMail);
});
