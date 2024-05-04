import React from 'react'
import "./exploreMenu.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
      <h1>Explore Our Menu</h1>

      <p className='emploreMenu-text'>
      Satisfy your cravings with our diverse menu, featuring a tantalizing array of dishes from around the world. From hearty burgers to fresh salads and flavorful pastas, there's something to please every palate
      </p>

      <div className="exploreMenu-list">
       {
        menu_list.map((item,index)=>{
            return (

                <div onClick={()=>setCategory(prev=>prev===item.menu?"All":item.menu_name)}key={index}className="exploreMenu-list-item">
                <img className={category===item.menu_name?"active"
                :""}
                src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
                </div>
            )
        })
       }
      </div>
    </div>
  )
}

export default ExploreMenu
