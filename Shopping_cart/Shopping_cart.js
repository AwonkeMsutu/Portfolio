// 1. Initial Data: Array of products
let cart = [
    { name: "Milk", price: 25, quantity: 0 },
    { name: "Bread", price: 18, quantity: 0 },
    { name: "Eggs", price: 30, quantity: 0 }
];

// 2. Function to display items and control buttons
function display_all() {
    let cartHTML = "";
    
    // Loop through the cart to create the list and buttons
    cart.forEach((item, index) => {
        cartHTML += `
            <div class="cart-item">
                <span>${item.name} (R${item.price})</span>
                <div class="controls">
                    <button onclick="removeItem(${index})">-</button>
                    <span class="qty">${item.quantity}</span>
                    <button onclick="addItem(${index})">+</button>
                </div>
            </div>
        `;
    });
    
    document.getElementById("demo").innerHTML = cartHTML;
}

// 3. Function to increase quantity
function addItem(index) {
    cart[index].quantity++;
    display_all(); // Refresh display
}

// 4. Function to decrease quantity (Prevents negative numbers)
function removeItem(index) {
    if (cart[index].quantity > 0) {
        cart[index].quantity--;
    } else {
        alert("Quantity is already zero!");
    }
    display_all(); // Refresh display
}

// 5. Checkout Function: Calculates the total price
function checkout() {
    let totalPrice = 0;
    
    // Multiply price by quantity for each item
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    
    // Place the total on the page
    document.getElementById("total").innerHTML = "<h3>Total Order: R" + totalPrice + "</h3>";
}