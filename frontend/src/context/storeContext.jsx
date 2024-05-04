import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
// Create the context
const StoreContext = createContext(null);


// Provider component
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    // ... spread operator 
    
    const addToCart = (itemId) => {
        if (!cartItems[itemId]){
            setCartItems ((prev) =>({...prev,[itemId]:1}))
        }else{
            setCartItems ((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let total = 0
        for ( const item in cartItems ){
            if (cartItems[item]>0){
                let itemInfo = food_list.find((prod)=>prod._id === item)

                total += itemInfo.price*cartItems[item]
            }
           
        }
        return total
    }
    useEffect(()=>{console.log(cartItems)},[cartItems])


    const contextValue = {
      
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
     
       
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreContextProvider };
