import img1 from "./images/rating.png";
import img2 from "./images/banner.png";
import img3 from "./images/teamwork.png";
import img4 from "./images/branding.png";
import'./Wcu.css';
const Wcu = () => {
  return (
    <>
      <div className="conatainer mt-5">
        <div className="container">
        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
          <h1
            className="text-center  "
            style={{ color: "var(--secondary-color)" }}
          >
            <strong>Why Choose Us ?</strong>
          </h1>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-2">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" 
              style={{maxWidth:'auto',height:"auto"}}
              src={img1} alt="" />
              <h1
                className="text-center  display-6"
                style={{ color: "var(--secondary-color)" }}
              >
                555+
              </h1>
              <h3
                className="text-center  "
                style={{ color: "var(--secondary-color)" }}
              >
                Customers Served
              </h3>
              <br />
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-2 mt-5">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" src={img2} alt="" />
              <h1
                className="text-center   display-6"
                style={{ color: "var(--secondary-color)" }}
              >
                55+
              </h1>
              <h3
                className="text-center   "
                style={{ color: "var(--secondary-color)" }}
              >
                Succesful Events
              </h3>
              <br />
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-2">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" src={img3} alt="" />
              <h1
                className="text-center   display-6"
                style={{ color: "var(--secondary-color)" }}
              >
                5+
              </h1>
              <h3
                className="text-center   "
                style={{ color: "var(--secondary-color)" }}
              >
                Qualified Staff
              </h3>
              <br />
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-2 mt-5">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" src={img4} alt="" />
              <h1
                className="text-center   display-6"
                style={{ color: "var(--secondary-color)" }}
              >
                5+
              </h1>
              <h3
                className="text-center   "
                style={{ color: "var(--secondary-color)" }}
              >
                Year's Experience
              </h3>
              <br />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Wcu;
