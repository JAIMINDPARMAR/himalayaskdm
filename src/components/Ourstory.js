import React from "react";
import imageabout from './images/imageabout.jpg'
const Ourstory = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "var(--secondary-color)" , borderRadius: "10px" }}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <h5 className="p-2 pt-5 " style={{ color: "var(--primary-color)" }}>
              Our Story
            </h5>
            <h1
              className="display-5 p-2 mb-2"
              style={{
                
                color: "var(--primary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
              Creating Great Event Experiences -
            </h1>
            <p
            className="lead p-2 mt-5 mb-5"
            style={{
              color: "var(--primary-color)",
              fontFamily: "var(--head-para)",
            }}>
              Culinary Journey Begins Welcome to Himalaya Catering, where we
              offer a culinary journey inspired by Himalayan flavors.
              Established in 1995, we take immense pride in showcasing authentic
              and quality dishes at various events. Our customized dining
              experiences honor fresh and flavorful cuisine. Contact us today to
              learn how we can cater your next event, fill your fridge with
              delicious meals or teach you some secret recipes.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
          <img src={imageabout  } style={{
               height:'400px',
                display:'flex',
                margin:'auto'
            }} alt="Himalayas" className="img-fluid p-2 mt-5"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
