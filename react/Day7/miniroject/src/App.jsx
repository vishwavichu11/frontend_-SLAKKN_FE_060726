

const App = () => {
      const students =[
      { name: "Arun",age: 21,mark:45},
      { name: "Aksh",age: 43,mark:67},
      { name: "Vishwa",age: 21,mark:102},
      { name: "Nizar",age: 43,mark:45},
      
    ]
  return (
    <>
     <div className="bg-blue-400 flex justify-between p-5 rounded-2xl my-5 border-2 border-amber-800">
      {students.map((e,i)=>(
        <div key={i} className="bg-amber-50 p-10 text-black rounded-2xl flex flex-col gap-5  border-2 border-black shadow-black shadow-2xl">
          <h2>{e.name}</h2>
          <p>{e.age}</p>
          <p>{e.mark}</p>
          <button className="bg-black p-2 rounded-3xl text-amber-50 border-2 border-amber-600">click here</button>
        </div>
      ))}
     </div>
    
    </>
  )
}

export default App