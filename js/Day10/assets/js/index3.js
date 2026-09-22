// Rest parameter (...) collects arguments into an array

function sumAll(...numbers){
    return numbers.reduce((total,num)=>total+num,0)
}
console.log(sumAll(10,15));
console.log(sumAll(10,15,67,56,5));


// Spread syntax (...) expands array elements

const frontend =["HTML","CSS","Javascript"];
const backend =["node.js","Express"];
const fullstack=[...frontend,...backend,"Mongo DB"];
console.log(fullstack);
