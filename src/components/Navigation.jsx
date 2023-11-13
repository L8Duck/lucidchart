import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" >LucidChart</Link>
      <div className="flex flex-row gap-5 navbar-nav">
        <Link to="/product" className="nav-link" >Product</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
        <Link to="/login" className='nav-link'>Login</Link>
        <Link to="/resgister" className='nav-link'>Register</Link>
        <Link to="/order" className='nav-link'>Order</Link>
      </div>
  </div>
</nav>
    )
}

export default Navigation