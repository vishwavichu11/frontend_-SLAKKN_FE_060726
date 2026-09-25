import { useState } from "react"


const App = () => {

  const [nameUser,setNameUser]=useState("")
  const [ageUser,setAgeUser]=useState("")
  const [showdata,setShaowData]=useState("")


const handleChange=(e)=>{
  setNameUser(e.target.value)

}



const handleAge=(e)=>{
  setAgeUser(e.target.value)
  
}
  

const clickHandle =() =>{

  const obj ={id:Date.now(),name:nameUser,age:ageUser}
  const arr=[...showdata]
  arr.push(obj)
  setShaowData(arr)
  alert("Successfully Save")
  setNameUser("")
  setAgeUser("")

}

  return (
   <>
   <div>
    <input type="text"  onChange={handleChange} value={nameUser} placeholder="Enter the name"/>
     <input type="number" onChange={handleAge} value={ageUser} placeholder="Enter the age"/>
     <button onClick={clickHandle}>Click to Login</button>
   </div>
   </>
  )
}

export default App