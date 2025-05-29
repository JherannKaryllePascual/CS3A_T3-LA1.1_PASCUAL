// Initialize an empty array to hold user data
let users = [];

// Function to handle signup
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user input
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password confirmation
    if (password === confirmPassword) {
        // Save new user
        users.push({ email, password });
        alert('User registered successfully!');
        window.location.href = 'logIn.html'; // Redirect to login
    } else {
        alert('Passwords do not match!');
    }
});

// Function to handle login
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if user exists
    const userExists = users.find(user => user.email === email && user.password === password);

    if (userExists) {
        // If user valid, redirect to loggedIn.html
        window.location.href = 'loggedIn.html';
    } else {
        alert('Invalid email or password!');
    }
});

