import {BrowserRouter,Router,Route } from "react-router-dom";
import Nav from "./assets/Compentent/Nav";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";
import Service from "./assets/Pages/Service";
import Help from "./assets/Pages/Help";


const App = () => {

  const courses =[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS"
    ]

  const student ={
    name:"Surya",
    age:"24",
    course :"React",
    arya : "Velachery",
    city : "Chennai"
  }

  return (

    <>

     <Nav/>
   <BrowserRouter>
      <Router>
      <Route path="./" element = {<Home/>}/>
      <Route path="./about" element = {<About/>}/>
      <Route path="./contact" element = {<Contact/>}/>
      <Route path="./service" element = {<Service/>} />
      <Route path="./help" element = {<Help/>}/>
      </Router>
    </BrowserRouter>
    <div>

      <h1>My Courses</h1>

      <ul>

        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}

      </ul>

      <div>
        <p><strong>Name :</strong> {student.name}</p>
        <p><strong>Age :</strong> {student.age}</p>
        <p><strong>Course :</strong> {student.course}</p>
        <p><strong>Arya :</strong> {student.arya}</p>
        <p><strong>City :</strong> {student.city}</p>
      </div>

    </div>

    </>
  );

}

export default App