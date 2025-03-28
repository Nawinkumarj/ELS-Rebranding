
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
        bannerImg={assets.aboutbg}
        heading="contact us"
      />
      <div className="wrapper">
        <div className="info-section">
          <div className="info-item">
            <img src={assets.CallIcon} alt="Phone" className="info-icon" />
            <a href="tel:+44 203 149 8488" className="info-text">
              0203 149 8488
            </a>
          </div>
          <div className="info-item">
            <img
              src={assets.LocationIcon}
              alt="Location"
              className="info-icon"
            />
            <a
              href="https://maps.app.goo.gl/Vw7DzieTNRfRFuBj6"
              target="_blank"
              rel="noopener noreferrer"
              className="info-text"
            >
              Second Floor, One Oaks Court, Warwick Road, Borehamwood,
              Hertfordshire, United Kingdom, WD6 1GS
            </a>
          </div>
          <div className="info-item">
            <img src={assets.EmailIcon} alt="Email" className="info-icon" />
            <a
              href="mailto:info@els.legal"
              className="info-text"
            >
              info@els.legal
            </a>
          </div>
        </div>

        <div className="social-section">
          <div className="social-box">
            <div className="social-logo">
              <a
                href="https://www.instagram.com/elslegal/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.InstagramIcon}
                  alt="Instagram"
                  className="social-logo-img"
                />
              </a>
            </div>
            <div className="social-content">
              <span className="social-title">Instagram</span>
            </div>
          </div>

          <div className="social-box right-icon">
            <div className="social-logo">
              <a
                href="https://www.facebook.com/profile.php?id=100089853312850&locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.FaceBook}
                  alt="Facebook"
                  className="social-logo-img"
                />
              </a>
            </div>
            <div className="social-content">
              <span className="social-title">Facebook</span>
            </div>
          </div>

          <div className="social-box">
            <div className="social-logo">
              <a
                href="https://www.linkedin.com/company/elslegal/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.LinkedinIcon}
                  alt="LinkedIn"
                  className="social-logo-img"
                />
              </a>
            </div>
            <div className="social-content">
              <span className="social-title">LinkedIn</span>
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
