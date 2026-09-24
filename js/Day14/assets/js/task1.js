const toggleButton = document.getElementById("toggleBtn");
const toggleParagraph = document.getElementById("toggleText");
toggleButton.addEventListener("click",()=>{
    if(toggleParagraph.classList.toggle("show")){
        toggleButton.textContent = "Hide Content";
    }else{
        toggleButton.textContent = "show Content"
    }
});