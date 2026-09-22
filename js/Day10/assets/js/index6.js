
function loadData(delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, delay);
  });
}


loadData(1000)
  .then((result) => {
    console.log("Using .then():", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


async function handleWithAsyncAwait() {
  try {
    const result = await loadData(1000);
    console.log("Using async/await:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

handleWithAsyncAwait();