import React from "react";
import logo from "./images/logo.png";
const Serviceone = () => {
  return (
    <>
      <div style={{ backgroundColor: "var(--secondary-color)" }}>
        <div className="container one px-4 pt-4">
          <div className="row pt-4" style={{ backgroundColor: "white" }}>
            <div className="col-12 col-md-6 p-1 p-1">
              <p className="p-1" style={{ color: "gray" }}>
                Our Service
              </p>
              <h1
                className="display-6 text-center p-5"
                style={{ fontFamily: "var(--head-font)" }}
              >
                Designing <br /> An <br /> Experience
              </h1>
            </div>
            <div className="col-12 col-md-6 p-1">
              <img
                src={logo}
                style={{
                  display: "flex",
                  margin: "auto",
                }}
                alt="Himalayas"
                className="img-fluid p-1 mt-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--secondary-color)" }}>
        <div
          className="container py-2 "
          style={{ backgroundColor: "lightgrey" }}
        >
          <div className="row p-1" style={{ backgroundColor: "white" }}>
            <div className="col-12 col-md-6 p-1 p-1">
              <h1
                className="text-center pt-5"
                style={{ fontFamily: "var(--head-font)" }}
              >
                Lorem 
              </h1>
              <p
                className="text-center"
                style={{ fontFamily: "var(--para-font)", color: "gray" }}
              >
                Lorem ipsum dolor
              </p>
              <p
                className="text-center lead p-5"
                style={{ fontFamily: "var(--para-font)" }}
              >
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
              
              </p>
            </div>

            <div className="col-12 col-md-6 p-1">
            <h1
                className="text-center pt-5"
                style={{ fontFamily: "var(--head-font)" }}
              >
                Lorem 
              </h1>
              <p
                className="text-center"
                style={{ fontFamily: "var(--para-font)", color: "gray" }}
              >
               Lorem ipsum dolor

              </p>
              <p
                className="text-center lead p-5"
                style={{ fontFamily: "var(--para-font)" }}
              >
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
              

              </p>
            </div>
          </div>
          <div className="row p-1" style={{ backgroundColor: "white" }}>
            <div className="col-12 col-md-6 p-1 "><h1
                className="text-center pt-5"
                style={{ fontFamily: "var(--head-font)" }}
              >
                Lorem
              </h1>
              <p
                className="text-center"
                style={{ fontFamily: "var(--para-font)", color: "gray" }}
              >
                Lorem ipsum dolor 

              </p>
              <p
                className="text-center lead p-5"
                style={{ fontFamily: "var(--para-font)" }}
              >
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
              

              </p></div>
            <div className="col-12 col-md-6 p-1 py-5">
            <h1
                className="text-center "
                style={{ fontFamily: "var(--head-font)" }}
              >
                Lorem 

              </h1>
              <p
                className="text-center"
                style={{ fontFamily: "var(--para-font)", color: "gray" }}
              >
Lorem ipsum dolor  </p>
              <p
                className="text-center lead p-5"
                style={{ fontFamily: "var(--para-font)" }}
              >
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serviceone;
