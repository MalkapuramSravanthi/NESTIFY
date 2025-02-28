// script.js
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission for testing

  // Gather form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simulate form submission or send data to a server
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    // Reset the form
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill in all the fields before submitting.");
  }
});
