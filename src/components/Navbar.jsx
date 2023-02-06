import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../config/firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Wave</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1672653981976-53ad364e6657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="john" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar