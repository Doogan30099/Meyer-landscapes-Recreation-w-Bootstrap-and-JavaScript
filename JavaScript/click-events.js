document.addEventListener("DOMContentLoaded", function () {

  const maintenanceBtn = document.getElementById("maintenance-packages-btn");
  if (maintenanceBtn) {
    maintenanceBtn.addEventListener("click", function () {
      window.location.hash = "maintenance-packages";
    });
  }


  const materialsBtn = document.getElementById("materials-price-btn");
  if (materialsBtn) {
    materialsBtn.addEventListener("click", function () {
      window.location.href = "Materials-pricing.html";
    });
  }


  document.querySelectorAll('button.btn-success.fw-bold.text-uppercase').forEach(btn => {
    if (btn.textContent.trim() === "Request an estimate") {
      btn.addEventListener("click", function () {
        window.location.href = "Meyer-Landscapes-Contact.html";
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      window.location.href = "Meyer-Landscapes-Contact.html";
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("explore-btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      window.location.href = "Meyer-Landscapes-Services.html";
    });
  }
});
