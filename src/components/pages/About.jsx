import React from 'react'
import Ourstory from "../../assets/OurStory.png";
import OurValues from "../../assets/Ourvalue.png"
import Helm from "../../assets/helm.png"
import Global from "../../assets/global.png"
import Flatforms from "../../assets/multi-platform.png"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="container">
    <div className="container px-4 pt-5 mt-2 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis">
      We can help you visualize, plan, and build your business
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
        As organizations adapt to the constantly evolving business landscape, we aim to help teams collaborate effectively, get and stay aligned, and make complexity clearer.
        </p>
      </div>
    </div>
    <div className="container px-4 py-5" id="hanging-icons">
      <div className="container px-4 pt-5 mt-2 text-center">
        <h1 className="pb-2 fw-bold border-bottom">Our Story</h1>
          <div className="col d-flex align-items-start">
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
              Co-founders Ben Dilts and Karl Sun launched Oneanychart in 2010. Since then, Oneany has added additional products to its suite. Today, millions of people at thousands of companies use Oneany to collaborate visually.
              </p>
            </div>
          </div>
        </div>
    </div>
    <div className="overflow-hidden">
          <div className="container p-5 d-flex justify-content-center">
            <img
              src={Ourstory}
              className="rounded-3 mb-4"
              alt="Example"
              width={900}
              loading="lazy"
            />
          </div>
      </div>
      <div className="container px-4 py-5" id="hanging-icons">
      <div className="container px-4 pt-5 mt-2 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis border-top">Who we are</h1>
          <div className="col d-flex align-items-start">
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
              We’ve built a leading end-to-end Visual Collaboration Suite that helps teams see and build the future from idea to reality
              </p>
            </div>
          </div>
        </div>
      </div>
    {/* feature section */}
    <div className="pb-2 border-top border-bottom">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="pb-2 fw-bold text-body-emphasis lh-1 mb-3">Our values</h1>
          <p className="lead">It’s our employees that make our culture and values what they are: teamwork, innovation, autonomy, and excellence in all that we do.</p>
          {/* Join our team */}
          <div>
          <Link to="/register" className="me-3 py-2 link-body-emphasis text-primary text-decoration-none">Join our team now!</Link>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={OurValues} className="d-block rounded-5 m-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="450" height="450" loading="lazy"/>
        </div>
      </div>
    </div>
          {/* feature section */}
          <div className="pb-2 border-top">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={Helm} className="d-block  rounded-5 m-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="600" height="auto" loading="lazy"/>
        </div>
        <div className="col-lg-6">
          <h1 className="pb-2 fw-bold text-body-emphasis lh-1 mb-3 d-flex">Who’s at the helm?</h1>
          <p className="lead d-flex justify-content-end">Talented founders, skilled executives, and passionate builders lead the way. Together, they’re changing the way teams collaborate.</p>
        </div>
      </div>
          {/* feature section */}
      <div className="pb-2 border-top border-bottom">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="pb-2 fw-bold text-body-emphasis lh-1 mb-3">We’re global</h1>
          <p className="lead">Oceany is a hybrid, remote-friendly workforce. Our headquarters are in Utah, but we also have offices in North Carolina, Amsterdam, and Melbourne.</p>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={Global} className="d-block rounded-5 m-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="450" height="450" loading="lazy"/>
        </div>
      </div>
    </div>
          {/* feature section */}  
      <div className="pb-2 border-top">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={Flatforms} className="d-block  rounded-5 m-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="400" height="400" loading="lazy"/>
        </div>
        <div className="col-lg-6">
          <h1 className="pb-2 fw-bold text-body-emphasis lh-1 mb-3">Thousands of use cases</h1>
          <p className="lead">From industry-leading brands to entrepreneurs, Oceany gives teams, departments, and organizations in a wide variety of industries a place to dream, plan, and build visually.</p>
        </div>
      </div>    
      </div>
    </div>
  </div>
  );
};

export default About