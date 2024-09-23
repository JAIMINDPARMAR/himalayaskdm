import React from "react";
import aimgone from "./images/aimg1.jpeg";
import aimgtwo from "./images/aimgtwo.jpg";
import "./Aboutimg.css";
const Aboutimg = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <div className="imgadiv" style={{position:'relative',height:'400px',
                  }}>
              <img
                src={aimgone}
                style={{
                  display: "flex",
                  
                  height:'400px',
                  width:'auto',
                    
                  opacity:'.5',
                  
                }}
                alt="Himalayas"
                className="img-fluid p-2 mt-5"
              />
            <div className=""  style={{
                  
                  position:'absolute',
                  left:' 45%',
            top: '20%',
            transform: 'translate(-50%, -50%)',
            textAlign:'center' 
}}>
                    <h4 className="text-center" style={{fontFamily:'var(--para-font)',color:'var(--secondary-color)',fontWeight:'bold'}}>Wedding & ceremonies</h4>
                </div>
                <div className=""  style={{
                  
                  position:'absolute',
                  left:' 45%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign:'center' 
}}>
                    <h1 className="text-center" style={{fontFamily:'var(--head-font)',color:'var(--secondary-color)'}}>Life is an event make it memorable</h1>
                </div>
                </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <div className="imgadiv" style={{position:'relative'}}>
              <img
                src={aimgtwo}
                style={{
                  display: "flex",
                  margin: "auto",
                  height:'400px',
                  width:'auto',
                  opacity:'.5',
                  
                }}
                alt="Himalayas"
                className="img-fluid p-2 mt-5"
              />
            
            <div className=""  style={{
                  
                  position:'absolute',
                  left:' 45%',
            top: '20%',
            transform: 'translate(-50%, -50%)',
            textAlign:'center' 
}}>
                    <h4 className="text-center" style={{fontFamily:'var(--para-font)',color:'var(--secondary-color)',fontWeight:'bold'}}>Corporate Events</h4>
                </div>
                <div className=""  style={{
                  
                  position:'absolute',
                  left:' 45%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign:'center' 
}}>
                    <h1 className="text-center" style={{fontFamily:'var(--head-font)',color:'var(--secondary-color)'}}>Our business is making memories</h1>
                </div>
                </div>
          </div>
          
          <br/>
        </div>
      </div>
    </>
  );
};

export default Aboutimg;
