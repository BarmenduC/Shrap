import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Shrap</span>
      <div className="user">
        <img src="https://avatars.githubusercontent.com/u/87941013?v=4" alt="" />
        <span>Beecee</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar