import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Shrap</span>
      <div className="user">
        <img src="https://avatars.githubusercontent.com/u/87941013?v=4" alt="" />
        <span>Beecee</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar