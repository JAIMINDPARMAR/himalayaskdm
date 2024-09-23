import React from 'react'
import img2 from './images/img2.jpg'
import expone from './images/expone.jpg'
import exptwo from './images/exptwo.jpg'
import galleryone from './images/galleryone.jpg'
import Serviceimgone from './images/Serviceimgone.jpg' 
import Serviceimgtwo from './images/Serviceimgtwo.jpg'
import mainimgone from './images/mainimgone.jpeg'
import mainimgtwo from './images/mainimgtwo.jpeg'
import Serviceimgthree from './images/Serviceimgthree.jpg'
const Galleryimg = () => {
  return (
    <div className='container my-5' style={{backgroundColor:'var(--secondary-color)'}}>
        <div className='row'>
            <div className='col-12 col-md-6'>
            <img src={img2} style={{height:'400px',width:'400px',display:'flex',margin:'auto'}} alt='img' className='img-fluid p-2 px-5'/>
            </div>
            <div className='col-12 col-md-6'>
            <img src={mainimgone} alt='img' className='img-fluid p-2 px-5' style={{height:'400px',width:'400px',display:'flex',margin:'auto'}}/>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6'>
            <img src={expone} style={{height:'400px',width:'400px',display:'flex',margin:'auto'}} alt='img' className='img-fluid p-2'/>
            </div>
            <div className='col-12 col-md-6'>
            <img src={exptwo} alt='img' className='img-fluid p-2' style={{height:'400px',width:'400px',display:'flex',margin:'auto'}}/>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-3'>
            <img src={Serviceimgone} style={{height:'400px',width:'400px',display:'flex',margin:'auto'}} alt='img' className='img-fluid p-2'/>
            </div>
            
            <div className='col-12 col-md-5'>
            <img src={galleryone} style={{height:'300px',width:'500px',display:'flex',margin:'auto'}} alt='img' className='img-fluid p-2'/>
            </div>

            <div className='col-12 col-md-4'>
            <img src={Serviceimgtwo} alt='img' className='img-fluid p-2' style={{height:'400px',width:'500px',display:'flex',margin:'auto'}}/>
            </div>
        </div>
        

        <div className='row'>
            <div className='col-12 col-md-6'>
            <img src={mainimgtwo} style={{height:'400px',width:'400px',display:'flex',margin:'auto'}} alt='img' className='img-fluid p-2'/>
            </div>
            <div className='col-12 col-md-6'>
            <img src={Serviceimgthree} alt='img' className='img-fluid p-2' style={{height:'400px',width:'400px',display:'flex',margin:'auto'}}/>
            </div>
        </div>
        
    </div>
  )
}

export default Galleryimg
