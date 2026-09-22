//Task 1

let result = ""
for(let i=0; i<=20; i++){
    
    result=result+i+" "

    
}
console.log(result);



//Task 2



let res=""
for( let i=0; i<=50; i++){
    if(i%2===0){
       
        res=res+i+" " 
        
    }
  
    
}
  console.log(res);



  //Task 3


empty=""
for(let i=0; i<=50; i++){
    if(i%2===1){
empty=empty+i+" "
    }
}
console.log(empty);



//Task 4
let sum=0
for(let i=0; i<=20; i++){
    sum=sum+i
}
console.log(sum);




//Task 5


let total=0
for(let i=0;i<=50;i++){
    if(i%2===0)
    {total=total+i}  

}
console.log(total);


//Task 6


let count=0
for(let i=1; i<=100; i++){
    if(i%2===0){
count++

    }
}
console.log(count);



//Task 7


for(let i=0; i<=100;i++){
    if(i===73){
        console.log("This is "+ i);
        break
        
    }
}



//TAsk 8
for (let i = 5; i >= 1; i--) {
  console.log(i);
}



//Task 9


let text="javascript"
let reverse=""
for(let i=text.length-1;i>=0;i--){
    reverse+=text[i]

}
console.log(reverse);



let tet = "javascript";
let target = "s";

for (let i = 0; i < tet.length; i++) {
  if (tet[i] === target) {
    console.log("Character Found: " + tet[i]);
    break; 
  }
}
