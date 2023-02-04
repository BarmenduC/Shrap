import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")


    } catch (err) {
      setErr(true);
    }

  };
  return (
    <div className='formContainer'>
        < div className='formWrapper'>
            <span className="logo">Shrap</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' name="" id="" />
                <input type="password" placeholder='password' name="" id="" />
               
                <button>Sign In</button>
                {err && <span>Something went Wrong!</span>}
            </form>
            <p>Don't have an account? <Link to = "/register">Sign Up</Link></p>
        </div>
    </div>
  )
}

export default Login