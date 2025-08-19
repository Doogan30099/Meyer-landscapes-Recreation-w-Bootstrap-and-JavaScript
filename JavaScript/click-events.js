document.addEventListener("DOMContentLoaded", function () {
  // Example: Maintenance packages button
  const maintenanceBtn = document.getElementById("maintenance-packages-btn");
  if (maintenanceBtn) {
    maintenanceBtn.addEventListener("click", function () {
      window.location.hash = "maintenance-packages";
    });
  }

  // Example: Materials price list button
  const materialsBtn = document.getElementById("materials-price-btn");
  if (materialsBtn) {
    materialsBtn.addEventListener("click", function () {
      window.location.href = "Materials-pricing.html";
    });
  }

  // Example: Request an estimate button
  const estimateBtn = document.getElementById("estimate-btn");
  if (estimateBtn) {
    estimateBtn.addEventListener("click", function () {
      window.location.href = "Meyer-Landscapes-Contact.html";
    });
  }
});
