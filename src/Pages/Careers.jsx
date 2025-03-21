import React from 'react'
import Banner from '../Components/Banner'
import { assets } from '../assets/assets'

const Careers = () => {
  return (
    <div className="careers-container">
      <Banner
        bannerImg={assets.Bannerbg}
        heading="Careers"
        content="description"
      />
      <div className="careers-section">
        <p className="careers-text1">
          We’re more than a team; we’re a force committed to shaping the future
          of legal practice. Join us in our mission to drive positive change and
          create lasting impact
        </p>
        <p className="careers-text2">
          There are no vacancies available for now. For updates- Follow us on{" "}
          <a href="">LinkedIn</a>
        </p>
        <a href='mailto:info@els.legal' className="email-btn">E-mail us</a>
      </div>
    </div>
  );
}

export default Careers
