import React from 'react'

const Navigation = ({Page, onPageChange}) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p onClick={() => onPageChange("home")} className="navbar-brand" >LucidChart</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <p onClick={() => onPageChange("product")} className="nav-link" >Product</p>
        <p onClick={() => onPageChange("about")} className="nav-link">About</p>
        <p onClick={() => onPageChange("contact")} className="nav-link" >Contact</p>
        <p onClick={() => onPageChange("login")} className="nav-link" >Login</p>
        <p onClick={() => onPageChange("register")} className="nav-link" >Register</p>
        <p onClick={() => onPageChange("order")} className="nav-link" >Order</p>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navigation