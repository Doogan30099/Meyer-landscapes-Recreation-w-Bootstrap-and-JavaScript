

let materialPrices = [
  //soils and shells
  { name: '3/8" Loam', price: 23.0 },
  { name: "compost", price: 32.0 },
  { name: "Turfgro Top Dressing", price: 43.0 },
  { name: "Divotgro - 2mm Sand/Compost mix", price: 60.0 },
  { name: "Plantgro Planting mix", price: 70.0 },
  { name: "Quahog Shells", price: 80.0 },
  //mulch and wood chips
  { name: "Nature's Best", price: 34.5 },
  { name: "Premium Pine", price: 40.5 },
  { name: "Premium Black", price: 40.5 },
  { name: "New Hampshire Pine", price: 40.5 },
  { name: "Jolly Brown Cow", price: 46.5 },
  { name: "Hemlock", price: 52.0 },
  { name: "Aged Hemlock", price: 54.0 },
  { name: "Common Wood Chips", price: 16.0 },
  { name: "White Wood Chips", price: 30.0 },
  //sand and stone
  { name: "Used Fill (Not Screened)", price: 11.0 },
  { name: "Screened Fill", price: 16.0 },
  { name: "Game Changer 2mm Sand", price: 55.0 },
  { name: "Mason Sand", price: 48.25 },
  { name: '1/2" Double Washed Stone', price: 48.25 },
  { name: '1" Double Washed Stone', price: 48.25 },
  { name: '1 1/2" Double Washed Stone', price: 48.25 },
  { name: '3/4" Stone', price: 48.25 },
  { name: '3/8" Stone', price: 48.25 },
  { name: '3/4" Recycled Concrete', price: 48.25 },
  { name: '3/4" Recycled Asphalt', price: 48.25 },
  // firewood
  { name: "Seasoned", price: 100.0 },
  { name: "Semi-seasoned", price: 75.0 },
  { name: "Green", price: 300.0 },
  { name: "Chunk Hardwood", price: 75.0 },
  // dumping fees
  { name: "Pick-up truck and 1 ton", price: 30.0 },
  { name: "6wh and over", price: 60.0 },
  //brush and stump loads
  { name: "pick-up and small trailer ", price: 55.0 },
  { name: "1 ton and cargo trailer", price: 100.0 },
  { name: "6 wheeler and xl cargo trailer", price: 135.0 },
  { name: "10 wheeler", price: 195.0 },
  { name: "tri-axle", price: 240 },
  { name: "Trailer dump and 30 yard container", price: 295.0 },
  { name: "40 yard container", price: 395.0 },
  { name: "100 Yard container", price: 750.0 },
];

let total = 0;

function addMaterial() {
  const materials = document.getElementById("materials");
  const price = parseFloat(materials.value);
  const text = materials.options[materials.selectedIndex].text;

  if (!isNaN(price) && price > 0) {
    const list = document.getElementById("selectedList");
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    total += price;
    document.getElementById("totalPrice").textContent = total.toFixed(2);
  }
}

window.addMaterial = addMaterial;
