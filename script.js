// Select the wrapper and the toggle links
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// Event listener for "Sign Up" link
registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    wrapper.classList.add('active'); // Add the 'active' class
});

// Event listener for "Login" link
loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    wrapper.classList.remove('active'); // Remove the 'active' class
});
