import React from 'react'
import Banner from '../Components/Banner'
import { assets } from '../assets/assets'

const Careers = () => {
  return (
    <div className='careers-container'>
      <Banner />
      <div className="careers-section">
        <img src={assets.Careers} alt="" />
        <p className='careers-text1'>We’re more than a team; we’re a force committed to shaping the future of legal practice. Join us in our mission to drive positive change and create lasting impact</p>
        <p className='careers-text2'>There are no vacancies available for now. For updates- Follow us on <a href="">LinkedIn</a></p>
        <button className='email-btn'>E-mail us</button>
      </div>
    </div>
  )
}

export default Careers
