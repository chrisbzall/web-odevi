// JavaScript code for email validation
const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault();

  // Validate email input field
  const emailValue = emailInput.value.trim();
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(emailValue)) {
    // Display error message if email is invalid
    emailInput.classList.add('invalid');
    emailInput.nextElementSibling.innerHTML = 'Please enter a valid email address';
  } else {
    // Remove error message if email is valid and submit form
    emailInput.classList.remove('invalid');
    emailInput.nextElementSibling.innerHTML = '';
    form.submit();
  }
});
