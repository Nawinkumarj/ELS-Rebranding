import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import SRABadge from "./SRABadge";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-section1">
            <div className="footer-section1-head">
              <h1>Contact</h1>
            </div>
            <div className="footer-section1-address">
              <div className="address-head">
                <h1>Address:</h1>
              </div>
              <div className="address-content">
                <p>
                  Second Floor, One Oaks Court, Warwick Road, Borehamwood,
                  Hertfordshire, United Kingdom, WD6 1GS
                </p>
              </div>
            </div>
            <div className="footer-section1-email">
              <a href="mailto:nfo@els.legal">
                info@els.legal
              </a>
            </div>
            <div className="footer-section1-phone">
              <a href="tel:+44 203 149 8488">0203 149 8488</a>
            </div>
            <div className="footer-section1-icons">
              <div className="footer-icons">
                <a
                  href="https://www.linkedin.com/company/elslegal/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={assets.linkedin} alt="LinkedIn" />
                </a>
              </div>
              <div className="footer-icons">
                <a
                  href="https://www.instagram.com/elslegal/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={assets.insta} alt="Instagram" />
                </a>
              </div>
              <div className="footer-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100089853312850&locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={assets.fb} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-section2">
            <div className="footer-section2-logo">
             <Link to='/'> <img src={assets.logo} /> </Link>
            </div>
            <div className="footer-section2-certificate">
              <SRABadge />
            </div>
            <div className="footer-section2-image">
              <img src={assets.alzeimer}/>
            </div>
          </div>
          <div className="footer-section3">
            <Link to="/services" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-name">
                  <h1>Services</h1>
                  <h1>Services</h1>
                </div>
              </div>
            </Link>

            <Link to="/about-us" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-name">
                  <h1>about us</h1>
                  <h1>about us</h1>
                </div>
              </div>
            </Link>

            <Link to="/our-team" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-name">
                  <h1>our teams</h1>
                  <h1>our teams</h1>
                </div>
              </div>
            </Link>

            <Link to="/contact-us" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-name">
                  <h1>contact us</h1>
                  <h1>contact us</h1>
                </div>
              </div>
            </Link>

            <Link to="/careers" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-name">
                  <h1>careers</h1>
                  <h1>careers</h1>
                </div>
              </div>
            </Link>

            <Link to="/faqs" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-name">
                  <h1>faq</h1>
                  <h1>faq</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-section1">
            <p>Copyrights©{year}</p>
          </div>
          <div className="footer-bottom-section3">
            <div className="footer-bottom-section3-content">
              <Link to="/privacy-policy">
                <div className="footer-policy">
                  <p>privacy policy</p>
                </div>
              </Link>
              <Link to="/cookie-policy">
                <div className="footer-cookies">
                  <p>cookie policy</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='waterMark flex-center'>
        <a href='https://virtuai.billionairefrequencycode.com/' target="_blank">Developed By <span> BFC virtu ai</span></a>
      </div>
    </div>
  );
};

export default Footer;
