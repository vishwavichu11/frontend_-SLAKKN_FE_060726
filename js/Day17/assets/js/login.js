const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  // Retrieve registered users
  const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // Verify email and password
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid email or password! Please try again.");
    return;
  }

  // Store active session data
  const sessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    joinedDate: user.joinedDate
  };

  localStorage.setItem("currentUser", JSON.stringify(sessionUser));

  alert("Login successful! Welcome back.");
  window.location.href = "dashboard.html";
});