const fruits = ["Apple","Mango","Orange"];
const vegetables = ["Carrot","Potato"];

fruits.push("Banana");
console.log("After push:",fruits);

fruits.pop();
console.log("After pop:",fruits);

fruits.unshift("Grapes");
console.log("After unshift:",fruits);

fruits.shift();
console.log("After shift:",fruits);

console.log("Total length of fruits:",fruits.length);

const combinedArray = fruits.concat(vegetables);

console.log("Final Combined Result:",combinedArray);



