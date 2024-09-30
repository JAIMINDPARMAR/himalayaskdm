import React from 'react'

const Swipersliderdiv = (props) => {
  return (
    <>
    <div className="card text-center mb-3" style={{backgroundColor: 'var(--primary-color)',border:'none'}} >
              <div className="card-body" style={{height:'400px'}}>
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">
                	{props.review}
                 </p>
                 <p className="card-text d-flex align-items-end justify-content-start" style={{color:'black',textAlign:'start'}}>
                 {props.rtime}
                 </p>
                 
              </div>
            </div>
    </>
  )
}

export default Swipersliderdiv
