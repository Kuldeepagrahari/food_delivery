import React, { useEffect } from 'react'
import { useAuth } from '../../context/auth-context'
const LogOut = () => {
    
    const {LogOutUser} = useAuth()
    
    useEffect(() => {
        LogOutUser()
    }, [LogOutUser])

  return (
    <>
   {/* {window.alert("you have successfully logged out !")} */}
   {/* <h1>THANK YOU ! <br></br>HOPE YOU WILL BE BACK SOON TO GIVE US CHANCE TO SERVE YOU AGAIN </h1> */}
   <img src="https://media.istockphoto.com/id/1928543445/photo/thank-you-speech-bubble-minimalist-abstract-design-with-white-cut-out-paper-on-green.jpg?s=612x612&w=0&k=20&c=v_G1gSLaJ5S95KZm6lW2Bx4dKL1bePezwTmFlhsDgls=" alt="thanks" width="1030vw" height="400vh" /></>
  )
}

export default LogOut
