import logo from '../assets/react.svg'
import {Link} from 'react-router-dom'

const Nav = () => {


  return (

    <div>
        <div><img src={logo} alt="logo" /></div>
        <Link to = "./">Home</Link>
        <Link to = "./about">About</Link>
        <Link to = "./service">Service</Link>
        <Link to = "./contact">Contact</Link>
        <Link to = "./help">Help</Link>
        <Link to = "./gallery">Gallery</Link>
        <Link to = "./course">Courses</Link>
    </div>

  )
}

export default Nav