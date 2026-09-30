const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  // Retrieve existing users from LocalStorage
  const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // Check if email already exists
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    alert("This email is already registered! Please log in.");
    return;
  }

  // Create new user object
  const newUser = {
    id: "USR-" + Math.floor(1000 + Math.random() * 9000),
    name: name,
    email: email,
    password: password,
    joinedDate: new Date().toLocaleDateString("en-GB")
  };

  // Save to LocalStorage
  users.push(newUser);
  localStorage.setItem("registeredUsers", JSON.stringify(users));

  alert("Registration successful! Redirecting to login...");
  window.location.href = "login.html";
});