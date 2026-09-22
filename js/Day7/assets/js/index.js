// Task 1

let fruits=["Apple","Orange","Banana","Mango","Cherry"]
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
    
}
// console.log(fruits);


//Task 2


let student ={
    name:"vishwa",
    age:20,
    course:"Computer Science",
    mark:"92"

}
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.mark);



//Task 3


let students=[
    {name:"Rahul",mark:89},
    {name:"vishwa",mark:90},
    {name:"nizar",mark:67}
]
for(let i=0; i<students.length; i++)
{
   console.log(`Name: ${students[i].name}, Mark: ${students[i].mark}`);
}



//Task 4


const studentss = [
  { name: "Alice", mark: 85 },
  { name: "Bob", mark: 92 },
  { name: "Charlie", mark: 78 },
  { name: "Diana", mark: 95 }
];

const targetName = "Charlie";
let found = false;

for (let i = 0; i < studentss.length; i++) {
  if (studentss[i].name === targetName) {
    console.log(`Name: ${studentss[i].name}, Mark: ${studentss[i].mark}`);
    found = true;
    break; 
  }
}

if (!found) {
  console.log(`Student "${targetName}" not found.`);
}



//Task 5


const employees = [
  { name: "Arun", salary: 35000 },
  { name: "Priya", salary: 52000 },
  { name: "Karthik", salary: 40000 },
  { name: "Divya", salary: 65000 },
  { name: "Suresh", salary: 48000 }
];

for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary > 40000) {
    console.log(`Name: ${employees[i].name}, Salary: ₹${employees[i].salary}`);
  }
}