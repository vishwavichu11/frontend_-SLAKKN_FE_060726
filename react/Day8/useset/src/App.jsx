import { useState } from "react";


const App = () => {
    const [count,setCount]=useState(0);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1000)}>increment</button>
        <button onClick={()=> setCount(count-1)}>decrement</button>
        <button onClick={()=> setCount(0)}>reset</button>
    </div>
  )
}

export default App