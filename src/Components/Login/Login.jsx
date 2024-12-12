import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../../Assets/assets'
const Login = ({setShowlogin}) => {
    const[currState , setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>{setShowlogin(false)}}  src={assets.cross_icon} alt="" />
        </div>  
          <div className="login-popup-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required />
          </div>
          <button>{currState==="Signup"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i aggre  to the terms of use & privacy policy  </p>
        </div>
        {currState==="Login"
        ?<p>Create a new account ? <span onClick={()=>{setCurrState("Signup")}}>Click here </span></p>
        :<p>Already have an account <span onClick={()=>{setCurrState("Login")}}>Click here </span></p>
        }
      </form>
    </div>
  )
}

export default Login