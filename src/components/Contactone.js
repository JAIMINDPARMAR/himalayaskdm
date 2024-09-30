import React from 'react'

const Contactone = () => {
  return (
   <>
    <div className='container mb-5' style={{backgroundColor:'var(--secondary-color)'}}>
        <p className='text-center p-2 pt-5' style={{color:'var(--primary-color)'}}>
        Let's Connect
        </p>
        <h1 className='text-center display-2 pt-2' style={{color:'var(--primary-color)',fontFamily:'var(--head-font)'}}>
            Contact
        </h1>
        <div className='row'>
            <div className='col-12 col-md-4 pt-5'>
                <h5 className='text-center p-2  pt-5' style={{color:'var(--primary-color)'}}>
                Get In Touch
                </h5> 
                <h5 className='text-center px-2 ' style={{color:'var(--primary-color)'}}>
                Feel free to drop me an call anytime. I’d love to hear from you.
                </h5>  
                
                <a href='tel:9822841000' className='text-center px-2 pt-2 ' style={{textDecoration:'none',color:'var(--primary-color)'}}> <h6>+91 9822841000</h6></a>
                
            </div>
            <div className='col-12 col-md-4 pt-5'>
                <h5 className='text-center p-2 pt-5' style={{color:'var(--primary-color)'}}>
                Come & Visit

                </h5> 
                <h6 className='text-center px-2 ' style={{color:'var(--primary-color)'}}>
                Shop no.3, Himalaya Catering Service, Station Rd, opp. Ghanshyam medical, Ramayan Nagar, Ulhasnagar, Maharashtra 421003


                </h6>  
                <h5 className='text-center px-2 pt-2 ' style={{color:'var(--primary-color)'}}>
                See Directions
                </h5>
            </div>
            <div className='col-12 col-md-4 pt-5'>
                <h5 className='text-center p-2 pt-5' style={{color:'var(--primary-color)'}}>
                Drop An Email

                </h5> 
                <h5 className='text-center px-2 ' style={{color:'var(--primary-color)'}}>
                Also feel free to drop me an email. We usually respond within 24h.
                

                </h5>
                <br/>
                <a href='mailto:himalayas55@gmail.com' className='text-center pt-5 ' style={{textDecoration:'none',color:'var(--primary-color)'}}> <h6>himalayas55@gmail.com</h6></a>  
                
                
            
            </div>
        </div>
    </div>
   </>
  )
}

export default Contactone
