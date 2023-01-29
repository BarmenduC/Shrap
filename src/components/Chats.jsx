import React from 'react'
import Tom from "../img/Tom.jpeg"

const Chats = () => {
  return (
    <div className="chats">
       <div className="userChat">
        <img src={Tom} alt="" />
        <div className="userChatInfo">
          <span>Tom</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Tom} alt="" />
        <div className="userChatInfo">
          <span>Tom</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Tom} alt="" />
        <div className="userChatInfo">
          <span>Tom</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats