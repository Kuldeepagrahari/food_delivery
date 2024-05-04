import React, { useState } from 'react'
import "./signIn.css"
import { assets } from '../assets/assets'
import { useAuth } from '../context/auth-context'
import {useNavigate} from "react-router-dom"



const SignIn = ({ setshowLogin }) => {



  const [currState, setCurrState] = useState("Login")
  
  const [user, setuser] = useState({ name: "", email: "", password: "" })

  let name, value;

  const navigate = useNavigate()
  
  const {storeTokenInLS} = useAuth()

  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value
    setuser({ ...user, [name]: value })
    console.log(setuser)
  }

  const PostData = async (e) => {
    e.preventDefault()
    const { name, email, password } = user
    try {
       
      if ( currState === "Sign Up")
      {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({

          name, email, password

        })
      })

      if ( res.ok ){
        const res_data = await res.json()
        console.log(res_data)

        storeTokenInLS(res_data.token)

        setuser({name:"",email:"",password:""
      })
      
      
      window.alert("you have successfully registered")
      navigate(setCurrState("Login"))

      }
      console.log(res)


    }
  else{


    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

         email, password

      })
    })

    if ( res.ok ){
      
    const res_data = await res.json()
    storeTokenInLS(res_data.token)
    console.log(res_data.token)
    setuser({email:"",password:""
    })
    navigate("/")
    window.alert("you logged in !")
    }


    console.log(res)
  
  }
  } catch (err) {
      console.log("register", err)
    }


    const data = await res.json()

    console.log(data.status)

    if (data.status === 400 || !data) {
      window.alert("invalid registration")
      console.log("invalid reg")
    }
    else if (data.status === 400) {
      window.alert("user already registered!")
    }
    else {
      window.alert("registration successful!")
      console.log("reg succ")
    }
    console.log(data)
  }
  

  return (


    <div className="login-page">
      <form className='login' method='POST'>
        <div className="login-r1">
          <h2>{currState}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-r2">
          {currState === "Login" ? <></> : <input type="text" name="name" value={user.name} onChange={handleInputs} placeholder='Your name' />}
          <input name="email" type="text" value={user.email} onChange={handleInputs} placeholder='Your email' />
          <input name="password" type="text" value={user.password} onChange={handleInputs} placeholder='Password' />
          <button type='submit' name="signup" id="signup" onClick={PostData}>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        </div>
        <div className="login-r3">

          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label > By continuing, I agree to the terms of use & privacy policy</label>
        </div>

        {currState === "Login" ? <div className="login-r4">
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} className='click-here'>Click-here</span> </p>
        </div> : <div className="login-r4">
          <p>Already have an account? <span onClick={() => setCurrState("Login")} className='click-here'>Login-here</span> </p>
        </div>}



      </form>
    </div>
  )
}

export default SignIn
