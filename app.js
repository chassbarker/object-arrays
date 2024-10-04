
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.details = function() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    };
}


Product.prototype.updateQuantity = function(newQuantity) {
    this.quantity = newQuantity;
};

let inventory = [
    new Product("Laptop", 999, 10),
    new Product("Smartphone", 699, 25),
    new Product("Tablet", 499, 15),
    new Product("Headphones", 199, 0) // Out of stock product
];


function displayInventory(products) {
    const tableBody = document.getElementById("inventoryTable").querySelector("tbody");
    tableBody.innerHTML = ""; // Clear table

    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}

function showOutOfStock() {
    const outOfStock = inventory.filter(product => product.quantity === 0);
    displayInventory(outOfStock);
}


function resetInventory() {
    displayInventory(inventory);
}


function updateFirstProduct() {
    inventory[0].updateQuantity(12); // Update Laptop quantity to 12
    resetInventory(); // Refresh the table
}


displayInventory(inventory);
