fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
   
    return response.json();
  })
  .then((data) => {
   
    console.log("Data received:", data);
  })
  .catch((error) => {
   
    console.error("Fetch failed:", error);
  });