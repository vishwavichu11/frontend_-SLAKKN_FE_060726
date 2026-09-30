//1. Defined Inline (Most Common)
const performTask = (data, callback) => {

  callback(data);
};


performTask("User Data", (result) => {
  console.log("Defined Inline:",result);
});


//2. Defined Separately and Passed as an Argument

const handleResult =(message) =>{
  console.log("2. Defined Separately and Passed as an Argument:",message);
  
}

const greet = (name,callback) =>{
  callback(`Hello,${name}!`)
}
greet("Alex",handleResult)



//3. Built-in Example (setTimeout / Array Methods)

setTimeout(()=>{
  console.log("Executed after delay");
  
},1000)

const numbers =[1,2,3];
numbers.forEach((num)=>{
  console.log(num*2);
  
})