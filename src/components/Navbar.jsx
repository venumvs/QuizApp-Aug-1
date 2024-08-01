import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'><Link to="/register" className='navbar-link'>Register</Link></li>
                <li className='navbar-item'><Link to="/login" className='navbar-link'>Login</Link></li>
                <li className='navbar-item'><Link to="/user-dashboard" className='navbar-link'>User dashboard</Link></li>
                <li className='navbar-item'><Link to="/" className='navbar-link'>Logout</Link></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
