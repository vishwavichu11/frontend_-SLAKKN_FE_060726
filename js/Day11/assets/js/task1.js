
function processNumber(num, callback) {
  const result = num * 2;
  callback(result);
}

function displayOutput(output) {
  console.log("Processed Result: " + output);
}

processNumber(7, displayOutput);