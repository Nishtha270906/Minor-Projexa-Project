let selectedSize = "";
const product = JSON.parse(localStorage.getItem('selectedProduct'));

document.getElementById('detailImg').src = product.img;
document.getElementById('detailName').textContent = product.name;
document.getElementById('detailDesc').textContent = product.desc;
document.getElementById('detailPrice').textContent = "₹" + product.price;


// Add to cart from detail page
document.getElementById('addToCartBtn').addEventListener('click', () => {

    if (!selectedSize) {
        alert("Please select size");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cart.find(item =>
        item.name === product.name && item.size === selectedSize
    );

    if (existing) {
        existing.qty++;
    } else {
      cart.push({ ...product, qty: qty, size: selectedSize });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Added to cart 🛒");
});

function goBack() {
    if (history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}

function changeImage(el) {
    document.getElementById('detailImg').src = el.src;
}

document.querySelectorAll('.size').forEach(s => {
    s.addEventListener('click', () => {

        document.querySelectorAll('.size').forEach(x => x.classList.remove('active'));

        s.classList.add('active');

        selectedSize = s.textContent;
    });
});

let qty = 1;

function changeQty(val) {
    qty += val;
    if (qty < 1) qty = 1;
    document.getElementById('qty').textContent = qty;
}