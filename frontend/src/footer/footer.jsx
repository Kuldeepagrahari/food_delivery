import React from 'react'
import "./footer.css"
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-1">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laborum! Est illum voluptates atque, ab commodi soluta eligendi nam vitae sunt! Animi, nisi voluptates perspiciatis commodi dicta qui libero assumenda.</p>
        <div className="social-links">
            <ul>
                <li><a href="https://leetcode.com/problemset/"><img src={assets.facebook_icon} alt="" /></a></li>
                <li><a href="https://leetcode.com/problemset/"><img src={assets.linkedin_icon} alt="" /></a></li>
                <li><a href="https://leetcode.com/problemset/"><img src={assets.twitter_icon} alt="" /></a></li>
            </ul>

        </div>
      </div>
      <div className="right">
      <div className="footer-2">
        <h2>Company</h2>
        <ul>
            <li><a href="https://leetcode.com/problemset/">Home</a></li>
        <li><a href="https://leetcode.com/problemset/">About Us</a></li>
        <li><a href="https://leetcode.com/problemset/">Delivery</a></li>
        <li><a href="https://leetcode.com/problemset/">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-3">
        <h2>Get In Touch</h2>
        <p>+1-212-456-7890</p>
        <p>contactTomato.com</p>
      </div>
    </div></div>
  )
}

export default Footer
