
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const totalParagraph = document.getElementById("total");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the selected product's price
    const selectedProduct = document.querySelector('input[name="product"]:checked');
    if (!selectedProduct) {
      alert("Please select a product.");
      return;
    }
    const price = parseFloat(selectedProduct.value);

    // Get the quantity
    const quantity = document.getElementById("amount").value;
    if (!quantity || isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }
    const qty = parseInt(quantity);

    // Calculate the total cost
    const totalCost = price * qty;

    // Display the total cost
    totalParagraph.textContent = totalCost.toFixed(2);
  });
});
