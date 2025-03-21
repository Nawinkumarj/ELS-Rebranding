
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Banner from "../Components/Banner";
import EnquiryForm from "../Components/EnquiryForm";
const Contact = () => {

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setShowMap(true);
  }, []);
  
  return (
    <>
      <Banner
        bannerImg={assets.Bannerbg}
        heading="contact us"
        content="lorem"
      />
      <div className="wrapper">
        <div className="info-section">
          <div className="info-item">
            <img src={assets.CallIcon} alt="Phone" className="info-icon" />
            <span className="info-text">+91 8765432187</span>
          </div>
          <div className="info-item">
            <img
              src={assets.LocationIcon}
              alt="Location"
              className="info-icon"
            />
            <span className="info-text">elslegal@gmail.com</span>
          </div>
          <div className="info-item">
            <img src={assets.EmailIcon} alt="Email" className="info-icon" />
            <span className="info-text">elslegal@gmail.com</span>
          </div>
        </div>
        <div className="social-section">
          <div className="social-box">
            <div className="social-logo">
              <img
                src={assets.InstagramIcon}
                alt="Instagram"
                className="social-logo-img"
              />
            </div>
            <div className="social-content">
              <span className="social-title">Instagram</span>
              <p className="social-desc">Lorem ipsum text</p>
            </div>
          </div>
          <div className="social-box right-icon">
            <div className="social-logo">
              <img
                src={assets.FaceBook}
                alt="Instagram"
                className="social-logo-img"
              />
            </div>
            <div className="social-content">
              <span className="social-title">Facebook</span>
              <p className="social-desc">Lorem ipstext</p>
            </div>
          </div>
          <div className="social-box">
            <div className="social-logo">
              <img
                src={assets.LinkedinIcon}
                alt="Instagram"
                className="social-logo-img"
              />
            </div>
            <div className="social-content">
              <span className="social-title">Linkedin</span>
              <p className="social-desc">Lorem ipsum text</p>
            </div>
          </div>
        </div>
      </div>

     <EnquiryForm />

     <div className="map-container">
        {showMap && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.083487285188!2d-0.2554823!3d51.658307799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617243bc26fc3%3A0x63573796ad554ad9!2sExchange%20Legal%20Services!5e0!3m2!1sen!2sin!4v1742283479424!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </>
  );
};

export default Contact;
