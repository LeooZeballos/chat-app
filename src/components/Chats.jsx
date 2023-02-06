import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1675332911384-b55fc27f54ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="john" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1675175471354-8cd06a342562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="robert" />
        <div className="userChatInfo">
          <span>Robert</span>
          <p>Bruh</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1641392740168-2f3a73b3e514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="cathy" />
        <div className="userChatInfo">
          <span>Cathy</span>
          <p>Hey</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1670693372126-74a275d7d086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="jackson" />
        <div className="userChatInfo">
          <span>Jackson</span>
          <p>no way!!</p>
        </div>
      </div>
    </div>
  )
}

export default Chats