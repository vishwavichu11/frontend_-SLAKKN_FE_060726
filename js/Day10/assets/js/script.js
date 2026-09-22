// Task 1: Reverse String without .reverse()
function runTask1() {
  const str = document.getElementById("t1-input").value;
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  document.getElementById("t1-out").innerText = `Reversed: "${reversed}"`;
}

// Task 2: Palindrome Check
function runTask2() {
  const str = document.getElementById("t2-input").value;
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  const isPal = clean === reversed;
  document.getElementById("t2-out").innerText = isPal
    ? `"${str}" is a Palindrome`
    : `"${str}" is NOT a Palindrome`;
}

// Task 3: Find Min & Max
function runTask3() {
  const raw = document.getElementById("t3-input").value;
  const nums = raw.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
  if (!nums.length) {
    document.getElementById("t3-out").innerText = "Invalid inputs";
    return;
  }
  document.getElementById("t3-out").innerText = `Max: ${Math.max(...nums)} | Min: ${Math.min(...nums)}`;
}

// Task 4: Remove Duplicates
function runTask4() {
  const raw = document.getElementById("t4-input").value;
  const items = raw.split(",").map(s => s.trim()).filter(Boolean);
  const unique = [...new Set(items)];
  document.getElementById("t4-out").innerText = `Unique: [ ${unique.join(", ")} ]`;
}

// Task 5: Frequency Counter
function runTask5() {
  const str = document.getElementById("t5-input").value;
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  document.getElementById("t5-out").innerText = JSON.stringify(freq);
}

// Task 6: Factorial
function runTask6() {
  const n = parseInt(document.getElementById("t6-input").value, 10);
  const fact = (num) => (num <= 1 ? 1 : num * fact(num - 1));
  document.getElementById("t6-out").innerText = `${n}! = ${fact(n)}`;
}

// Task 7: Promise Delay
function runTask7() {
  const out = document.getElementById("t7-out");
  out.innerText = "Loading data (1.5s delay)...";
  const loadData = () => new Promise(res => setTimeout(() => res("Data Loaded"), 1500));
  (async () => {
    const result = await loadData();
    out.innerText = `Result: "${result}" via async/await`;
  })();
}

// Task 8: Optional Chaining & Nullish Coalescing
function runTask8(hasCity) {
  const user = hasCity ? { name: "Ravi", address: { city: "Bangalore" } } : { name: "Ravi" };
  const city = user?.address?.city ?? "City Not Available";
  document.getElementById("t8-out").innerText = `Extracted City: "${city}"`;
}

// Task 9: ES6 Array Methods
function runTask9() {
  const numbers = [10, 25, 30, 45, 50, 65];
  const greaterThan30 = numbers.filter(n => n > 30);
  const firstGreaterThan40 = numbers.find(n => n > 40);
  const hasFifty = numbers.includes(50);
  const doubled = numbers.map(n => n * 2);
  
  document.getElementById("t9-out").innerText = 
    `>30: [${greaterThan30}] | >40 first: ${firstGreaterThan40} | Has 50: ${hasFifty} | Doubled: [${doubled}]`;
}

// Task 10: ES5 to ES6+ Conversion
function runTask10() {
  const name = "Ravi";
  const age = 25;
  const student = { name, age };
  const greet = (person) => `Hello ${person}!`;
  document.getElementById("t10-out").innerText = 
    `${greet(student.name)} (Age: ${student.age}) - Executed using ES6+`;
}