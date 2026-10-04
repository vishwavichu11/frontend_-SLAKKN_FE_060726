import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'


const NavBar = () => {




  return (
    <div className='bg-[#45ABAB] h-30 p-2 flex justify-around items-center '>
        <div><img src={logo} alt="Logo" with="15"/></div>
        <div className='font-bold flex gap-5 ite text-amber-50 '>
          <Link to="/" >Home</Link>
        <Link to="/contact">Contact</Link></div>
    </div>
  )
}

export default NavBar