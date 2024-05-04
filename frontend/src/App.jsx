import React, { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './footer/footer'
import {Route,Routes} from "react-router-dom"
import Home from './pages/home/home'
import PlaceOrder from './pages/place order/placeOrder'
import Cart from './pages/cart/cart'
import SignIn from './signIn/signIn'
import AboutUs from './pages/aboutUs/aboutUs'
import LogOut from './pages/logout/logout'
const App = () => {

  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
    {
      showLogin?<SignIn setshowLogin={setshowLogin}/>:<></>
    }
  
    <div className='app'>
      <Navbar setshowLogin={setshowLogin}></Navbar>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route> <Route path="/order" element={<PlaceOrder/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/logout" element={<LogOut/>}></Route>
      </Routes>
      
    </div>
    </>
  )
}

export default App
