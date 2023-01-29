import React from 'react'
import Add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className='formContainer'>
        < div className='formWrapper'>
            <span className="logo">Shrap</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='email' name="" id="" />
                <input type="password" placeholder='password' name="" id="" />
               
                <button>Sign In</button>
            </form>
            <p>Don't have an account? Sign Up</p>
        </div>
    </div>
  )
}

export default Login