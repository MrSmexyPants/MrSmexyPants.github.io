document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation (for demonstration purposes only)
    if (username === "admin" && password === "password123") {
      alert("Login successful! Welcome, " + username + ".");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});
