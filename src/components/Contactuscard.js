import React from "react";
import img4 from "./images/img4.jpeg";
import './Contactuscard.css';
const Contactuscard = () => {
  return (
    <>
      <div
        className=" container justify-content-center my-5"
        style={{ backgroundColor: "black" ,position:'relative',height:'500 px' }}
      >
        <img src={img4} className="img " alt="img" style={{opacity:'.5',width:'100%' ,height:'500px'}}/>
        
        <form className="   p-5 formcontact">
        <h1 style={{
          color:'white'
          ,fontFamily:'var(--head-font)'
        }} className="text-center display-6 ">Leave A Comment For US</h1>
          <div class="form-floating mb-3 mt-5 " >
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control "
              id="floatingName"
              placeholder="Name"
            />
            <label for="floatingPassword">Name</label>
          </div>
          <div class="form-floating mb-3" >
          <textarea class="form-control" style={{resize:'none'}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Comments</label>
          </div>
          <button className="btn btn-primary px-3" style={{display:'flex',margin:'auto'}}>Submit  </button>
        </form>
      </div>
    </>
  );
};

export default Contactuscard;
