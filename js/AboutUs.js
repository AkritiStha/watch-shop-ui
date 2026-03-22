// Get form and message box
const form = document.getElementById("feedbackForm");
const messageBox = document.getElementById("messageBox");

// Form submission handler
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate fields
  if (!name || !email || !subject || !message) {
    messageBox.innerHTML =
      '<p class="error-message">Please fill out all fields.</p>';
    return;
  }

  if (!validateEmail(email)) {
    messageBox.innerHTML =
      '<p class="error-message">Please enter a valid email address.</p>';
    return;
  }

  // Show success message
  messageBox.innerHTML =
    '<p class="success-message">Thank you for your feedback!</p>';

  // Optionally clear the form fields
  form.reset();
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
