// we need click events for the buttons to go to their right links
// the click event on the contact page will send a review to the senders email.
// Initialize EmailJS
(function(){
  emailjs.init("kkhbWkXpqBJWedpZW"); 
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    emailjs.send("service_7z4fn5u", "template_customer", formData)
      .then(() => {
        alert("Thank you! We received your request. A copy was sent to your email.");
        form.reset();
        window.location.href = "Meyer-Landscapes-Contact.html"; // Redirect back to Contact page
      })
      .catch(err => {
        console.error("Error sending confirmation:", err);
        alert("Oops! Something went wrong. Please try again later.");
      });
  });
});
