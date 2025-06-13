function sendMail(event) {
    event.preventDefault(); 

    let parms = {
        user_name: document.getElementById("name").value, 
        user_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

   emailjs.send("service_cdcm8lh", "template_vfuzlvi", parms)
    .then(function(response) {
      console.log("SUCCESS!", response);
      alert("Email sent successfully!");
    })
    .catch(function(error) {
      console.error("FAILED...", error);
      alert("Failed to send email. Please try again.");
    });
  }
 
    
       

