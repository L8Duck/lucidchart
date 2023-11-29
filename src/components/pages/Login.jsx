import React from "react";
import { Link } from "react-router-dom";

import Login1 from "../../assets/login1.png"
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaYahoo } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container">
      <div className="container px-4 pt-3 d-flex justify-content-center">
        <h1 className="fs-2 text-body-emphasis">
          <span className="text-primary">Log in </span> 
          to access the 
          <span className="shadow-sm"> Oceany Visual Collaboration Suite</span> 
        </h1> 
       </div>

    <div className="pb-2">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={Login1} className="img-fluid d-block rounded-5 m-auto shadow-lg img-fluid d-none d-md-block d-flex justify-content-center" alt="Bootstrap Themes" width="450" height="450" loading="lazy"/>
        </div>
        <div className="col-md-10 mx-auto col-lg-5 ">
            <form >    
                <div className="form-floating form-group mb-2">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating form-group mb-2">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for ="floatingPassword" >Password</label>
                </div>

                <div className="form-check text-start my-3">
                  <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button className="btn btn-primary w-100 py-2 mb-3" type="submit">Log in</button>
                <button type="reset" className="btn btn-outline-secondary w-100 py-2 mb-3" >Cannel</button>
              </form>

              <p className='text-muted text-center mb-3'>or log in with</p>
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                      <button class="btn btn-light w-100 py-2 mb-3 shadow">
                      <div className="icon-square text-body-emphasis bg-body-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                          <FaGoogle  width={50} height={50}/>
                      </div>
                      </button>
                  </div>
                  
                  <div class="col">
                    <Link to="#" className="btn btn-light w-100 py-2 mb-3 shadow">
                      <div className="icon-square text-body-emphasis bg-body-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                          <FaApple   width={50} height={50}/>
                      </div>
                    </Link>
                  </div>
              </div>
              <div class="row">
                <div class="col">
                    <Link to="#" className="btn btn-light w-100 py-2 mb-3 shadow">
                    <div className="icon-square text-body-emphasis bg-body-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <TfiMicrosoftAlt   width={50} height={50}/>
                    </div>
                    </Link>
                </div>
                <div class="col">
                <Link to="#" className="btn btn-light w-100 py-2 mb-3 shadow">
                    <div className="icon-square text-body-emphasis bg-body-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <FaYahoo   width={50} height={50}/> 
                    </div>
                </Link>
                </div>
              </div>
              </div>   
            
        </div>
        {/* Terms of Service and Privacy Policy */}
              <span className="text-center">By registering, you agree to our 
                    <button type="button" class="btn btn-link">Terms of Service</button>
                    and you acknowledge that you have read and understood our 
                    <button type="button" class="btn btn-link">Privacy Policy</button>
                    .
              </span>
        
      </div>
  </div>
    </div>
  )
}

export default Login