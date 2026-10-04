import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Services from "./assets/pages/Services"
import Contact from "./assets/pages/Contact"
import Help from "./assets/pages/Help"
import Gallery from "./assets/pages/Gallery"
import Courses from "./assets/pages/Courses"

import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
   <>
   
   <Nav/>
   <Routes>
    
      <Route path="./" element = {<Home/>}/>
      <Route path="./about" element = {<About/>}/>
      <Route path ="./contact" element = {<Contact/>}/>
      <Route path="./service" element = {<Services/>}/>
      <Route path="./help" element = {<Help/>}/>
      <Route path ="./gallery" element = {<Gallery/>}/>
      <Route path ="./course" element = {<Courses/>}/>
      
   </Routes>
   </>
  )
}

export default App 