// Auth Guard: Verify session
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  alert("Access denied! Please log in first.");
  window.location.href = "login.html";
} else {
  // Populate UI elements
  document.getElementById("welcomeName").textContent = currentUser.name;
  document.getElementById("avatarInitial").textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById("userId").textContent = currentUser.id;
  document.getElementById("userName").textContent = currentUser.name;
  document.getElementById("userEmail").textContent = currentUser.email;
  document.getElementById("userJoined").textContent = currentUser.joinedDate;
}

// Handle Logout
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  alert("You have been logged out successfully.");
  window.location.href = "login.html";
});