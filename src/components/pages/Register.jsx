import React from 'react'
import { Link } from 'react-router-dom';
import register1 from "../../assets/register1.png"
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaYahoo } from "react-icons/fa";


const Register = () => {
  return (
    <div className="container">
    <div className="container px-4 pt-3 d-flex justify-content-center">
      <h1 className="fs-2 text-body-emphasis">
      <span className="text-primary">Register</span> an account to be able to use our services
      </h1> 
     </div>

  <div className="pb-2">
    <div className="row flex-lg-row-reverse align-items-start g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={register1} className="img-fluid d-block rounded-5 m-auto shadow-lg img-fluid d-none d-md-block " alt="Bootstrap Themes" width="450" height="450" loading="lazy"/>
      </div>
      <div className="col-md-10 mx-auto col-lg-5 ">
          <form >    

          <div className="form-floating form-group mb-2">
              <div className="row">
                <div className="col">
                <div className="form-floating">
                  <input required type="text" className="form-control" id="floatingInput" placeholder="First Name"/>
                  <label for="floatingInput">First Name</label>
                </div>
                </div>
                
                <div className="col">
                  <div className="form-floating">
                    <input required type="text" className="form-control" id="floatingInput" placeholder="Last Name"/>
                    <label for="floatingInput">Last Name</label>
                  </div>
                </div>
            </div>
            </div> 

              <div className="form-floating form-group mb-2">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating form-group mb-2">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for ="floatingPassword" >Password</label>
              </div>
              <div className="form-floating form-group mb-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for ="floatingPassword" >Confirm Password</label>
              </div>
              <button className="btn btn-primary w-100 py-2 mb-3" type="submit">Sign in</button>
              <button type="reset" className="btn btn-outline-secondary w-100 py-2 mb-3" >Cannel</button>
            </form>

            <p className='text-muted text-center mb-3'>or continue with</p>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                    <button className="btn btn-light w-100 py-2 mb-3 shadow">
                    <div className="icon-square text-body-emphasis bg-body-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <FaGoogle  width={50} height={50}/>
                    </div>
                    </button>
                </div>
                
                <div className="col">
                  <Link to="#" className="btn btn-light w-100 py-2 mb-3 shadow">
                    <div className="icon-square text-body-emphasis bg-body-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <FaApple   width={50} height={50}/>
                    </div>
                  </Link>
                </div>
            </div>
            <div className="row">
              <div className="col">
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
                  <button type="button" className="btn btn-link">Terms of Service</button>
                  and you acknowledge that you have read and understood our 
                  <button type="button" className="btn btn-link">Privacy Policy</button>
                  .
            </span>
      
    </div>
</div>
    </div>
  )
}

export default Register;