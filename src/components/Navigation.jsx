import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { HiMiniShoppingCart } from "react-icons/hi2";

const Nav = () => {
  return (
  <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
    <Link
      to="/"
      className="d-flex align-items-center link-body-emphasis text-decoration-none"
    >
      <img src={Logo} alt="logo" width={45}/>
        <title>Bootstrap</title>
      <span className="p-1 fs-4 fw-bold">Oceany</span>
    </Link>
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link to="/product" className="me-3 py-2 link-body-emphasis text-decoration-none" >Product</Link>
      <Link to="/about" className="me-3 py-2 link-body-emphasis text-decoration-none">About</Link>
      <Link to="/contact" className="me-3 py-2 link-body-emphasis text-decoration-none">Contact</Link>
      <Link to="/login" className="me-3 py-2 link-body-emphasis text-decoration-none">Login</Link>
      <Link to="/register" className="me-3 py-2 link-body-emphasis text-decoration-none">Register</Link>
      <Link to="/order" className="btn btn-outline-dark me-3 py-2 link-body-emphasis text-decoration-none">
        <HiMiniShoppingCart className='fs-4'/>
      </Link>
    </nav>
  </div>
  )
}
export default Nav