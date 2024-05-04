import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>
            Lets Order Your Favourite Food !
        </h2>
        <p><i> Delight in Simple Dining: Order with Ease and Enjoy Delicious Meals Delivered Straight to You. Experience Convenience and Flavor in Every Bite. </i></p>
        <button><a href="#exploreMenu">View Menu</a></button>
      </div>
    </div>
  )
}

export default Header
