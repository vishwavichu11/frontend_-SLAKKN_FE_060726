import { Link } from "react-router-dom"
import logo from '../Pages/vite.svg'

const Nav = () => {
  return (
   <>
 
         <div className='bg-[#45ABAB] h-30 p-2 flex justify-around items-center '>
        <div><img src={logo} alt="Logo" with="15"/></div>
        <div className='font-bold flex gap-3 ite text-amber-50 '>
            <Link to ="./"> Home </Link>
            <Link to ="./about"> About </Link>
            <Link to ="./contact"> Contact </Link>
            <Link to ="./service"> Service </Link> 
            <Link to ="./help"> Help </Link></div>
        </div>
   
   </>
  )
}

export default Nav