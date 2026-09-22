const numbers = [10, 25, 30, 45, 50, 65];

// 1. Find numbers greater than 30
const greaterThan30 = numbers.filter((num) => num > 30);
console.log(greaterThan30); // [45, 50, 65]

// 2. Find the first number greater than 40
const firstGreaterThan40 = numbers.find((num) => num > 40);
console.log(firstGreaterThan40); // 45

// 3. Check whether 50 exists
const hasFifty = numbers.includes(50);
console.log(hasFifty); // true

// 4. Create a new array containing doubled values
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [20, 50, 60, 90, 100, 130]