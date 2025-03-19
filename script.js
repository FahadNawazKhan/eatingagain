const foods = {
    sweet: ["Chocolate Cake", "Ice Cream", "Donuts", "Pancakes", "Mango Sticky Rice", "Gulab Jamun", "Rasgulla", "Jalebi", "Kheer", "Ladoo", "Fahad Nawaz", "Double Ka Meetha", "Qubani Ka Meetha"],
    salty: ["French Fries", "Salted Peanuts", "Pretzels", "Nachos", "Cheese Popcorn", "Samosa", "Kachori", "Chakli", "Sev", "Murukku", "Osmania Biscuit"],
    spicy: ["Hot Wings", "Chili Paneer", "Spicy Ramen", "Tacos with Hot Sauce", "Curry", "Biryani", "Vindaloo", "Pav Bhaji", "Chole Bhature", "Paneer Tikka", "Hyderabadi Biryani", "Mirchi Ka Salan"],
    healthy: ["Salad", "Smoothie Bowl", "Grilled Chicken", "Avocado Toast", "Steamed Vegetables", "Dal", "Raita", "Sprout Salad", "Palak Paneer", "Tandoori Chicken", "Bagara Baingan"]
};

// Function to generate a random food item based on the type
function generateFood(type) {
    if (!foods[type]) {
        console.error(`Invalid food type: ${type}`);
        return;
    }
    const randomIndex = Math.floor(Math.random() * foods[type].length);
    document.getElementById("food-box").innerText = foods[type][randomIndex];
}

// Function to initialize event listeners for buttons
function init() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const type = button.getAttribute("data-type");
            generateFood(type);
        });
    });
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
