import React, { useContext } from 'react'
import "./foodItems.css"
import { assets } from '../assets/assets'
import { StoreContext } from '../context/storeContext';

const FoodItems = ({id,name,price,description, image}) => {

 
// to have access of these three things
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  // console.log(cartItems[1])
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-img" />
        {
          !cartItems[id]?<img className='add-img' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>:<div className='food-item-counter'>
            <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} ></img>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={()=>addToCart(id)} ></img>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
         <p>{name}</p>
         <img src={assets.rating_starts} alt="" />
        </div>
      <p className="food-item-desc">{description}</p>
      <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItems
