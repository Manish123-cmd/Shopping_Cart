const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const productList = document.getElementById("productList");

const products = [
  { id: 1, title: "Headphones", price: 29.99, image: "Assets/Headphone.jpg" },
  { id: 2, title: "Smart Watch", price: 49.99, image: "Assets/SmartWatch.jpg" },
  { id: 3, title: "Bluetooth Speaker", price: 19.99, image: "Assets/BluetoothSpeaker.jpg" },
  { id: 4, title: "USB Charger", price: 9.99, image: "Assets/USB_Cable.jpg" },
  { id: 5, title: "Wireless Mouse", price: 14.99, image: "Assets/Wireless_Mouse.jpg" }
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCount.textContent = cart.length;
updateTotal();

products.forEach(function (product) {
    const div = document.createElement("div");
    div.classList.add("product");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.width = 200;
    img.height = 200;


    const title = document.createElement("p");
    title.textContent = product.title + " - £" + product.price;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";

    button.addEventListener("click", function () {
        cart.push(product);
        cartCount.textContent = cart.length;
        updateTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
    });
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(button);
    productList.appendChild(div);
});

function updateTotal() {
    let total = 0;

    cart.forEach(function (item) {
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}
