const cart = JSON.parse(localStorage.getItem('cart')) || [];

const container = document.getElementById('orderItems');
const totalEl = document.getElementById('totalPrice');

let total = 0;

cart.forEach(item => {
  total += item.price * item.qty;

  const div = document.createElement('div');
  div.classList.add('order-item');

  div.innerHTML = `
    <span>${item.name} (${item.size || ''}) x${item.qty}</span>
    <span>₹${item.price * item.qty}</span>
  `;

  container.appendChild(div);
});

totalEl.textContent = "₹" + total;


// Place Order
function placeOrder() {
  alert("Order placed successfully 🎉");

  localStorage.removeItem('cart'); // clear cart

  window.location.href = "index.html";
}

