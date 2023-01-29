import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
        < div className='formWrapper'>
            <span className="logo">Shrap</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='display name' name="" id="" />
                <input type="email" placeholder='email' name="" id="" />
                <input type="password" placeholder='password' name="" id="" />
                <input style={{display:"none"}} type="file" placeholder='' name="" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Register