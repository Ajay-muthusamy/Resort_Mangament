import React from 'react'
import ResortImage from '../../../assets/resort.png'
import '../Header/header.css'
const header = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center  me-4 gap-5 header">
        <div className="text text-container">
            <p className='txt-1'>Book Your Resort</p>
            <h1>Discover Your Perfect Nature Retreat</h1>
            <p className='pt-2'>Discover your future home from anywhere with our immersive 3D tours. Your dream home is just a click away!</p>
            <button type="button" class="btn btn-secondary">Explore</button>
        </div>
        <div className="header_image">
            <img src="https://pngimg.com/uploads/house/house_PNG60.png" alt="" style={{width:"90%"}} className='resortimage'/>
        </div>
      </div>
    </div>
  )
}

export default header
