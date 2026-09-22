// ==========================================
// 1. HOISTING & TEMPORAL DEAD ZONE (TDZ)
// ==========================================

console.log("---Hoisting & TDZ---");
 
//'var' is hoisted  and automatically intialized with undefined:
console.log("varHoisted before declarations:",varHoisted);
var varHoisted="I am Var";

//'let' and 'const' is hoisted, but uninitialized (in TDZ):
try{
    console.log(letHoisted);
    
}catch(err){
    console.log("TDZ Error (let):",err.message);
    
}
let letHoisted ="I am Let"

try{
    console.log(constHoisted);
}catch(err){
    console.log("TDZ Error (const):",err.message);
    
}
const constHoisted = "I am Const";

// ==========================================
// 2. SCOPE (Function Scope vs. Block Scope)
// ==========================================

console.log("---Scope---");
 if(true){
    var varScoped="Assessable outside block";
    let letScoped="Confined to block"
    const constScoped="Confined to block"
    
 }
 console.log("var outside block",varScoped);
 
 try{
    console.log(letScoped);
    
 }catch(err){
    console.log("let outside block",err.message);
    
 }

 try{
    console.log(constScoped);
 }catch(err){
    console.log("const outside block",err.message);
    
 }


// ==========================================
// 3. REDECLARATION
// ==========================================

console.log("--- Redeclaration ---");

var greeting="Hello";
var greeting="Hello again";
console.log("Redeclared var:",greeting);

// let testLet=1;
// let testLet=2;
// console.log(testLet);
//Uncaught SyntaxError: Identifier 'testLet' has already been declared


// const testConst=1;
// const testConst=2;
// console.log(testConst);
//Uncaught SyntaxError: Identifier 'testLet' has already been declared


// ==========================================
// 4. REASSIGNMENT & MUTABILITY
// ==========================================

console.log("--- Reassignment & Mutability---");

//var reassignment
var a =10;
a=20;
console.log("var reassignment:",a);//its works

//let reassignment
let b=10;
b=20;
console.log("let assignment:",b);//its works

//const reassignment
const c=10;
try{
   c=20;
}catch(err){
   console.log("const reassignment error:",err.message);
}

// const reference mutability:
// 'const' prevents rebinding the identifier, but objects/arrays remain mutable.
const user = { name: "Alice" };
user.name = "Bob";
console.log("Mutated const object:", user.name);

try {
  // user = { name: "Charlie" }; // TypeError: Rebinding reference is forbidden
} catch (err) {
  console.log("Reassigning object reference error:", err.message);
}










