import { createContext, useContext, useState } from "react";
export const AuthContext = createContext()

// authentication

export const AuthProvider = ({children}) => {

    const  [token,settoken] = useState(localStorage.getItem("token"))
     let IsLoggedin = !!token

    const storeTokenInLS = ( token ) =>{
         return localStorage.setItem('token', token)
    }
   
    // logout 
       const LogOutUser = () => {
       settoken("")
       return localStorage.removeItem("token")
    }
    return <AuthContext.Provider value={{IsLoggedin,storeTokenInLS,LogOutUser}} >
        {children}
    </AuthContext.Provider>

}

// delivery boy

export const useAuth = () =>{
return useContext(AuthContext)
}