import React from "react";
import photoone from "./images/photoone.jpeg";
import phototwo from "./images/phototwo.jpeg";
import "./Ourservices.css";
import { NavLink } from "react-router-dom";
const Ourservices = () => {
  return (
    <>
      <section className="homeSection ">
        <div
          className="container secondSec mb-5 ourservicesmain"
          style={{ backgroundColor: "var(--secondary-color)" }}
        >
          <div className="homeSection sectservice">
                <div className="row mt-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6 col-xxl-6">
                    <h1
                  className="text-center mt-5"
                  style={{ color: "var(--primary-color)" ,fontFamily:'var(--head-font)' }}
                >
                  - Our services -
                </h1>
                <h3
                  className="text-center mb-5 mt-4"
                  style={{ color: "var(--primary-color)" }}
                >
                  "From Kitchen to Celebration, We've Got You Covered."
                </h3>
                <p
                  className="text-center lead mb-5"
                  style={{ color: "var(--primary-color)" }}
                >
                  Giving every attendee a memorable and meaningful event
                  experience is our main motto.
                </p>

                <NavLink to='/services' style={{textDecoration:'none'}}><button className="btn mt-5" id="kmone">
                  <p className="text-center"> Our Process </p></button>
               </NavLink>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3  col-xl-3 col-xxl-3">
                    <img
                  className="img-fluid mt-5 mb-5 img5"
                  
                  src={phototwo}
                  alt="Himalayas"
                />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                    <img
                  className="img-fluid mt-5 img5"
                  
                  src={photoone}
                  alt="Himalayas"
                />
                    </div>
                </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourservices;
