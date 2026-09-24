 const heading = document.getElementById("main-heading");
 heading.textContent = "Updated DOM Heading!";
 const paragraphs = document.querySelectorAll(".description");
 paragraphs.forEach((p,index) =>{
     p.textContent = `Updated paragrph content for item ${index+1}.`
 });