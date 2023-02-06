import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../config/firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>Wave</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="john" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar