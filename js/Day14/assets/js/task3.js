// Step 1: Select the toggle button and the description paragraph
const detailsBtn = document.getElementById("detailsBtn");
const cardDescription = document.getElementById("cardDescription");

// Step 2: Handle the click event
detailsBtn.addEventListener("click", () => {
  // Toggle the 'expanded' class to smoothly show/hide the paragraph
  cardDescription.classList.toggle("expanded");

  // Step 3: Switch the button text based on visibility
  if (cardDescription.classList.contains("expanded")) {
    detailsBtn.textContent = "Hide Details";
  } else {
    detailsBtn.textContent = "Show Details";
  }
});