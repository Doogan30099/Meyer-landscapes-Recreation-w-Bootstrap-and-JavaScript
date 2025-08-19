(function () {
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

    emailjs
      .send("service_7z4fn5u", "template_6l4dp3j", formData)
      .then(() => {
        alert(
          "Thank you! We received your request. A copy was sent to your email."
        );
        form.reset();
        window.location.reload(); 
      })
      .catch((err) => {
        console.error("Error sending confirmation:", err);
        alert("Oops! Something went wrong. Please try again later.");
      });
  });
});
