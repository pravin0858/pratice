// Registration Form Handling
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  alert(`User Registered!\nUsername: ${username}`);
});

// Login Form Handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  alert(`User Logged In!\nUsername: ${username}`);
});
