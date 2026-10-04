import React, { useState } from 'react'


const App = () => {

  const [countNumber,setCountNumber]=useState(0)

  // // const ingrease =()=>{

  // //   setCountNumber(countNumber+1000)
  // // }
  // const dicrease =()=>{

  //   setCountNumber(countNumber-1)
  // }
  // const reset =()=>{
    
  //   setCountNumber(0)

  // }

  const [defauls,defaulChange]= useState(true)


  return (
   <>
     
   <div className='bg-red-400 h-100 text-center my-3 p-5'>
     <h1 className='font-bold'>Number : {countNumber}</h1>

      <div className=''>
        <button onClick={()=>setCountNumber(countNumber+4)}>Count +</button>
        <button onClick={()=>setCountNumber(countNumber-2)}>Count -</button>
        <button onClick={()=>setCountNumber(0)}>Reaset</button></div>
    </div>

   </>
    
  )
}

export default App