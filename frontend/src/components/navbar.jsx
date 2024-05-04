import React, { useContext } from 'react'
import "./navbar.css"
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../context/storeContext'
import ExploreMenu from './exploreMenu/exploreMenu'
import { useAuth } from '../context/auth-context'
const Navbar = ({ setshowLogin }) => {
  const {getTotalCartAmount} = useContext(StoreContext)
   const {IsLoggedin} = useAuth()
   console.log("login" + IsLoggedin)
  return (

   
    <div className='nav'>
      <a href="/">
        <img src={assets.logo} alt="logo" className='logo' /></a>
      <ul className="nav-menu">
        <li><Link to="/">home</Link></li>
        <li><a href="#exploreMenu">menu</a></li>
        <li><a href="#footer">contact us</a></li>
        <li><a href="/about-us">about us</a></li>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="serch-icon" />
        <div className="nav-search_icon"><Link to = "/cart"><img src={assets.bag_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>

        </div>
        {IsLoggedin? <button> <NavLink to = "/logout"> Sign Out</NavLink></button>:
      
        <button onClick={() => setshowLogin(true)}>Sign In</button>}
      </div>
    </div>
  )
}

export default Navbar
