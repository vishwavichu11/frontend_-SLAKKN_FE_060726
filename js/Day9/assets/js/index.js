//Task 1 — Function + Parameters
//Create a function that accepts two numbers as parameters and returns their sum.
   
     function add(a,b){
        return a+b;
     }
     console.log(add(67,89));


//Task 2 — Function + for Loop
//Create a function that accepts a number n and uses a for loop to print all even numbers from 1 to n.
     
      function printEven(n){
        for(let i=1; i<=n;i++){
            if(i%2===0){
                console.log(i);
                
            }
        }
      }
      printEven(50);


//Task 3 — Arrow Function
//Create an arrow function that accepts a number and returns its factorial.
     
     const factorialnum=(n)=>(n<=1?1:n*factorialnum(n-1))
     console.log(factorialnum(5));


//Task 4 — Scope
//Create a program demonstrating the difference between global scope, function scope, and block scope using var, let, and const.
       
     // 1. Global Scope
var globalVar = "Global var";
let globalLet = "Global let";
const globalConst = "Global const";

function scopeTest() {
  // 2. Function Scope
  var functionVar = "Function var";
  let functionLet = "Function let";
  const functionConst = "Function const";

  if (true) {
    // 3. Block Scope
    var blockVar = "Var inside block (Leaked)";
    let blockLet = "Let inside block";
    const blockConst = "Const inside block";

    console.log(blockVar);   // OK
    console.log(blockLet);   // OK
    console.log(blockConst); // OK
  }

  // Inside function, outside block:
  console.log(blockVar);     // OK: var-க்கு block scope கிடையாது
  // console.log(blockLet);   // ReferenceError
  // console.log(blockConst); // ReferenceError

  console.log(functionVar);   // OK
  console.log(globalVar);     // OK
}

scopeTest();

// Outside function (Global):
// console.log(functionVar); // ReferenceError
// console.log(blockVar);    // ReferenceError
console.log(globalVar);      // OK
console.log(globalLet);      // OK
console.log(globalConst);    // OK



//Task 5 — Hoisting
//Write a program to demonstrate the different behavior of var, let, const, and a function declaration when they are accessed before their declaration/initialization.
     

       greet();
function greet() {
  console.log("Hello!");
}

console.log(a);
var a = 10;
console.log(a);

try {
  console.log(b);
} catch (e) {
  console.log(e.message);
}
let b = 20;

try {
  console.log(c);
} catch (e) {
  console.log(e.message);
}
const c = 30;