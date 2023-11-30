import React from "react";
import { BsToggles } from "react-icons/bs";
import { FaMicrochip } from "react-icons/fa6";
import { MdAutoFixOff } from "react-icons/md";
import Header from "../../assets/hero.png";
import Feature1 from "../../assets/feature1.png";
import Feature2 from "../../assets/feature 2.png";

const Home = () => {
  return (
    <div className="container">
      {/* Heros section */}
      <div className="container px-4 pt-5 mt-2 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">
        Welcome to Oceany, Your Productivity Companion!
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Discover a new era of productivity with Oceany. Our innovative app is designed to simplify your workflow, enhance collaboration, and boost efficiency. Navigate seamlessly through tasks and projects, making work a breeze.          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Get Started
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="container p-5">
            <img
              src={Header}
              className="rounded-3 mb-4"
              alt="Example"
              width={900}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* How it work/feature section */}
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Feature</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <BsToggles width={50} height={50}/>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Intuitive Interface</h3>
              <p>
              Our product or service is designed to simplify your life and boost your productivity.Make it easier for your team to start the project as quick as possible.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <FaMicrochip width={50} height={50}/>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Collab Boards</h3>
              <p>
              Foster teamwork like never before with collaborative boards. Work together with your team in real-time, ensuring everyone stays on the same page.
              </p>
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
            <MdAutoFixOff width={50} height={50}/>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Task Automation</h3>
              <p>
              Say goodbye to repetitive tasks! Oceany empowers you to automate routine processes, freeing up time for more meaningful and impactful work.
              </p>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      {/* feature section */}
      <div className="pb-2 border-top border-bottom">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Simple platform for you workflow efficent</h1>
            <p className="lead">
            Foster teamwork like never before with collaborative boards. Work together with your team in real-time, ensuring everyone stays on the same page.              </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Feature1} className="d-block rounded-5 m-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="450" height="450" loading="lazy"/>
          </div>
        </div>
      </div>
            {/* feature section */}
            <div className="pb-2 border-top">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Feature2} className="d-block  rounded-5 m-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="400" height="400" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Collaborative all in one</h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
