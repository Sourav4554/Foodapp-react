import React from 'react';
import './Hero.css';
import image from './heroimage.jpg';
const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='for-hero-image'>
            <img src={image} alt="" />
        </div>
        <div className='for-hero-text'>
          <h1 className="heading">Epicurean Delight</h1>
          <div className="for-text">
          <p className="text-1">Epicurean Delight offers a refined dining experience in a cozy atmosphere.</p>
          <p className='text-1'>Our menu features exquisite dishes crafted with the freshest local ingredients.</p>
          <p className='text-1'>Customers love our chef's  approach to traditional and modern cuisine.</p>
          <p className='text-1'>Enjoy a wide selection of fine wines and artisanal cocktails here.</p>

          </div>
        </div>
    </div>
  )
}

export default Hero