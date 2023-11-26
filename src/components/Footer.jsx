import React from 'react'
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo-black-white.png"
const Footer = () => {
  return (
    <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <Link to="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
       <img src={Logo} alt="" srcset="" width={40}/>
      </Link>
      <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className='ms-3 fs-3'><FaGithub /></li>
      <li class="ms-3 fs-3"><FaTwitter /></li>
      <li class="ms-3 fs-3"><FaFacebook /></li>
    </ul>
  </footer>
</div>

  )
}

export default Footer