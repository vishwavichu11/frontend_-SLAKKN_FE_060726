
const box = document.getElementById("colorBox");
const button = document.getElementById("toggleColorBtn");


button.addEventListener("click", () => {
 
  box.classList.toggle("green");
});