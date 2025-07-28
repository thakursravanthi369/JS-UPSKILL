const services = [
  { name: "🧼 Dry Cleaning", price: 200 },
  { name: "🧺 Wash & Fold", price: 100 },
  { name: "🧴 Ironing", price: 30 },
  { name: "🧽 Stain Removal", price: 500 },
  { name: "🥼 Leather & Suede Cleaning", price: 999 },
  { name: "👰 Wedding Dress Cleaning", price: 2000 }
];

const serviceList = document.getElementById("serviceList");
const cartTable = document.getElementById("cartTable");
const totalAmount = document.getElementById("total");
let cart = [];

services.forEach((service, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${service.name}</strong> - ₹${service.price.toFixed(2)}
    <button onclick="addToCart(${index})">Add Item</button>
    <button onclick="removeFromCart(${index})" style="background: #b4655fff; color: white;">Remove</button>
  `;
  serviceList.appendChild(li);
});

function addToCart(index) {
  const item = services[index];
  cart.push(item);
  renderCart();
}

function removeFromCart(index) {
  const item = services[index];
  const idx = cart.findIndex(ci => ci.name === item.name);
  if (idx !== -1) {
    cart.splice(idx, 1);
    renderCart();
  }
}

function renderCart() {
  cartTable.innerHTML = "<tr><th>Sl.No</th><th>Service Name</th><th>Price</th></tr>";
  let total = 0;
  cart.forEach((item, i) => {
    cartTable.innerHTML += `<tr><td>${i + 1}</td><td>${item.name}</td><td>₹${item.price}</td></tr>`;
    total += item.price;
  });
  totalAmount.textContent = `Total Amount: ₹${total.toFixed(2)}`;
}
