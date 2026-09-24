const heading = document.getElementById("myHeading");
const button = document.getElementById("actionBtn");
button.addEventListener("click",()=>{
    heading.textContent = "Button Clicked! Text changed Successfully!";
    heading.style.color = "crimson";
    heading.classList.add("highlight-border");
});