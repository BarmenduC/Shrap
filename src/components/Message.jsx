import React from 'react'
import Tom from "../img/Tom.jpeg"

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Tom} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Tom} alt="" />
      </div>
    </div>
  )
}

export default Message