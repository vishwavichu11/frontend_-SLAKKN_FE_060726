class Students{
    constructor(name,age,mark){
this.name=name;
this.age=age;
this.mark=mark
    }
    displayDetails(){
        console.log(`Name: ${this.name} ,Age: ${this.age} ,Mark: ${this.mark} `);
        
    }
}
const students1= new Students("Vishwa",21,57);
const students2= new Students("Vish",241,95);

students1.displayDetails()
students2.displayDetails()