const box1 =document.getElementById("box1");
const addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",()=>{
    box1.classList.add("active");
});

const box2 = document.getElementById("box2");
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {
  box2.classList.remove("active");
});

const themeCard = document.getElementById("themeCard");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

toggleThemeBtn.addEventListener("click", () => {
  themeCard.classList.toggle("dark-theme");
});

const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const enteredValue = userInput.value;
  console.log("Submitted Value:", enteredValue);
});