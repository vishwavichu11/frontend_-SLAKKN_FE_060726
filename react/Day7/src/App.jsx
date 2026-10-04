

const App = () => {
  const studentsdata =[
    {sname:"surya",sage:"18",smark:"98",srank:"A+"},
    {sname:"Karthi",sage:"23",smark:"44",srank:"E"},
    {sname:"Kaviya",sage:"15",smark:"20",srank:"D"},
    {sname:"Suresh",sage:"20",smark:"84",srank:"A"},
    {sname:"Kumar",sage:"24",smark:"50",srank:"B"},
    {sname:"Kavin",sage:"13",smark:"36",srank:"C"},
    {sname:"Priya",sage:"28",smark:"70",srank:"B"},
    {sname:"Arun",sage:"25",smark:"35",srank:"E"},
    {sname:"Abi",sage:"31",smark:"64",srank:"C"}

  ]

  return (
    <>
        <h1 className="text-2xl font-bold text-center my-3 ">Student Details</h1>
    <div className="bg-blue-400 my-5 rounded-2xl grid grid-cols-4 justify-center items-center h-80wh flex-wrap gap-4 p-5">
      {studentsdata.map((e,i)=>(
       <div key={i} className="bg-amber-50 w-40 items-center text-center h-40 rounded-2xl p-4 ">
        <h2 className="font-mono text-red-600 font-bold text-xl"> {e.sname}</h2>
        <p><b>Age : </b> {e.sage}</p>
        <p><b>Mark : </b> {e.smark}</p>
        <p><b>Rank : </b> {e.srank}</p>
        <button className = "bg-black font- text-white text-center w-20 h-7 rounded-xl my-2">Visit</button>
       </div>
       
      ))
          }
    </div>

    </>
  )
}

export default App