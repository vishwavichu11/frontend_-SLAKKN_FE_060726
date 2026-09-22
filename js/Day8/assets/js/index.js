//Task1

//1. Create an array of 5 numbers. Use a for loop to print all the numbers.

     const numbers =[20,30,40,50,60];

     for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
        
     }


//Task2

//2. Create an array of 5 student names. Use a for loop to print each name on a separate line.

     const names=["vishwa","nizar","lokesh","jerom","sarathi"];

     for(i=0; i<names.length;i++){
        console.log(names[i]);
        
     }


//Task3

//3. Create an array of numbers. Use a for loop to find and print only the even numbers.

     const nums=[19,36,75,73,68,26,56,42,63,65];

     for(i=0; i<nums.length;i++){

        if(nums[i]%2===0){
            console.log("This is the Even number="+nums[i]);
            
        }
        
     }


//Task5

//4. Create an array of student objects containing name and mark. Use a for loop to print the names of students who scored more than 80.

     const stdnts=[
        {name:"rasul",mark:85},
        {name:"jerom",mark:75},
        {name:"vishwa",mark:89},
        {name:"gopi",mark:65},
        {name:"nizar",mark:56}
     ]

     for(let i=0;i<stdnts.length; i++){
        if(stdnts[i].mark>80){
            console.log(stdnts[i]);
            
        }
     }


//Task5

//5. Create an arrow function that accepts two numbers as parameters and returns their sum.

       const add=(a,b)=>{
        return a+b;
       }
       console.log(add(67,87));



//Task6

6. //Create an arrow function that accepts a student's name and mark as parameters and returns a message containing the student's name and mark.


    const studenDetails=(name,mark)=>`Student ${name} scored ${mark} Marks.`;

    const message=studenDetails("Vishwa",78)
    console.log(message);
    
       