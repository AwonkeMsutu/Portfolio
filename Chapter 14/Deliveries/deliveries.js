// 1. Link the button to our function
document.getElementById("placeOrder").onclick = function() {
    
    // 2. Get values from the HTML
    var foodChosen = document.getElementById("typeOrder").value;
    var quantity = document.getElementById("numDeliveries").value;
    var city = document.getElementById("deliveryCity").value;

    // 3. Set up our price data
    var foodItems = ["Burger", "Pizza", "Sandwitch", "Tortilla"];
    var prices = [60, 120, 45, 75]; // Respective prices
    var unitPrice = 0;

    // 4. LOOP logic to find the price of the selected food
    for (var i = 0; i < foodItems.length; i++) {
        if (foodChosen === foodItems[i]) {
            unitPrice = prices[i];
        }
    }

    // 5. Calculate the subtotal
    var subtotal = unitPrice * quantity;

    // 6. Logic for Delivery Fee (e.g., further cities cost more)
    var deliveryFee = 0;
    if (city === "Benoni") {
        deliveryFee = 20;
    } else if (city === "Boksburg") {
        deliveryFee = 30;
    } else {
        deliveryFee = 40; // Default for Brakpan/Edenvale
    }

    // 7. Calculate final total
    var finalTotal = subtotal + deliveryFee;

    // 8. Display the result
    document.getElementById("displayTotal").innerHTML = 
        "Total: R" + finalTotal + " (Inc. R" + deliveryFee + " delivery to " + city + ")";
};