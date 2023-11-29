import React from 'react'
import contact from "../../assets/contact.png"
import { Link } from 'react-router-dom'


const Contact = () => {


  return (
    <div className="container">
     <div className ="text-center col-lg-8 mx-auto"> 
     <h1 className="display-4 fw-bold text-body-emphasis">
     Contact our sales team
        </h1>
        <p className="lead mb-4">
        Submit the form and we’ll contact you to discuss how an Enterprise Plan boosts collaboration and productivity across teams and workflows. 
          </p>
     </div>
      <div className="pb-2">
        <div className="row flex-lg-row-reverse align-items-start g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={contact} className="img-fluid d-block rounded-5 m-auto img-fluid d-none d-md-block shadow-lg" alt="Bootstrap Themes" width="400" height="400" loading="lazy"/>
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
                  <div className="row">
                    <div className="col">
                    <div className="form-floating">
                      <input required type="text" className="form-control" id="floatingInput" placeholder="Company Email"/>
                      <label for="floatingInput">Company Email</label>
                    </div>
                    </div>
                    
                    <div className="col">
                      <div className="form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder="Phone Number"/>
                        <label for="floatingInput">Phone Number</label>
                      </div>
                    </div>
                </div> 
                </div> 
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Details" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Details</label>
                </div>
                <p className="mt-3 mb-3">By submitting this form, you agree to our privacy policy.</p>
                 <button className="btn btn-primary w-100 py-2 mb-5" type="submit">Submit</button>
              <div>
                <span className="mt-5">Need help with account issues including billing, renewals, or cancellations? Visit our 
                <Link to="#" className=" me-1 link-body-primary text-decoration-none"> Help Center</Link>or<Link to="#" className="me-1 py-2 link-body-primary text-decoration-none"> contact Support</Link>
                   directly.
               </span>
              </div>
                </form>

                
            
              
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact