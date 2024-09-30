import React from "react";
import img2 from './images/img2.jpg'
const Waw = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "var(--secondary-color)" ,borderRadius: '10px'}}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <img src={img2} style={{
                display:'flex',
                margin:'auto'
            }} alt="Himalayas" className="img-fluid p-2 mt-5"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <h5 className="p-2 pt-5" style={{ color: "var(--primary-color)" }}>
              Who are we
            </h5>
            <h1
              className="display-5 p-2 mb-2"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
              "Passionate About Flavors, Committed to Service."
            </h1>
            <p
              className="lead p-2 mt-5 mb-5"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-para)",
              }}
            >
              We are an award-winning catering company based in Mumbai, known
              for pleasing the most diverse and picky palates on a budget. Since
              1995, we have delighted our customers with innovative, delicious
              food. Whether you are too busy to cook, want to throw a dinner
              party or an event of the century, we will make food that looks and
              tastes amazing. Contact us today to learn more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Waw;
