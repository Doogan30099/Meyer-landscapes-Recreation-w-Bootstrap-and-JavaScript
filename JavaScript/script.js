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

    emailjs
      .send("service_7z4fn5u", "template_6l4dp3j", formData)
      .then(() => {
        alert(
          "Thank you! We received your request. A copy was sent to your email."
        );
        form.reset();
        window.location.reload(); // Redirect back to Contact page
      })
      .catch((err) => {
        console.error("Error sending confirmation:", err);
        alert("Oops! Something went wrong. Please try again later.");
      });
  });
});





//materials calculator

let materialPrices = [
    //soils and shells
    { name: "3/8\" Loam", price: 23.00 },
    { name: "compost", price: 32.00 },
    { name: "Turfgro Top Dressing", price: 43.00 },
    { name: "Divotgro - 2mm Sand/Compost mix", price: 60.00},
    { name: "Plantgro Planting mix", price: 70.00 },
    { name: "Quahog Shells", price: 80.00 },
    //mulch and wood chips
    { name: "Nature's Best", price: 34.50 },
    { name: "Premium Pine", price: 40.50 },
    { name: "Premium Black", price: 40.50 },
    { name: "New Hampshire Pine", price: 40.50 },
    { name: "Jolly Brown Cow", price: 46.50 },
    { name: "Hemlock", price: 52.00 },
    { name: "Aged Hemlock", price: 54.00 },
    { name: "Common Wood Chips", price: 16.00 },
    { name: "White Wood Chips", price: 30.00 },
    //sand and stone
    { name: "Used Fill (Not Screened)", price: 11.00 },
    { name: "Screened Fill", price: 16.00 },
    { name: "Game Changer 2mm Sand", price: 55.00 },
    { name: "Mason Sand", price: 48.25 },
    { name: "1/2\" Double Washed Stone", price: 48.25 },
    { name: "1\" Double Washed Stone", price: 48.25 },
    { name: "1 1/2\" Double Washed Stone", price: 48.25 },
    { name: "3/4\" Stone", price: 48.25 },
    { name: "3/8\" Stone", price: 48.25 },
    { name: "3/4\" Recycled Concrete", price: 48.25 },
    { name: "3/4\" Recycled Asphalt", price: 48.25 },
    // firewood
    { name: "Seasoned", price: 100, 425 },
    { name: "Semi-seasoned", price: 75, 400 },
    { name: "Green", price: 300 },
    { name: "Chunk Hardwood", price: 75, 250 },
    // dumping fees
    { name: "Pick-up truck and 1 ton", price: 30.00 },
    { name: "6wh and over", price: 60.00 },
    //brush and stump loads
    { name: "pick-up and small trailer ", price: 55.00 },
    { name: "1 ton and cargo trailer", price: 100.00 },
    { name: "6 wheeler and xl cargo trailer" , price: 135.00 },
    { name: "10 wheeler" , price: 195.00 } ,
    { name: "tri-axle" , price: 240 } ,
    { name: "Trailer dump and 30 yard container" , price: 295.00 },
    { name: "40 yard container" , price: 395.00 } ,
    { name: "100 Yard container" , price: 750.00 } ,


]




// calculator 
   let total = 0;

    function addMaterial() {
      const materials = document.getElementById("materials");
      const price = parseFloat(materials.value);
      const text = materials.options[materials.selectedIndex].text;

      if (price > 0) {
        // Add item to list
        const list = document.getElementById("selectedList");
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);

        // Update total
        total += price;
        document.getElementById("totalPrice").textContent = total;
      }
    }