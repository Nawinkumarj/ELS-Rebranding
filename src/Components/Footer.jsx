import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import SRABadge from "./SRABadge";

const Footer = () => {
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
              <p>info@exchangelegalservices.com</p>
            </div>
            <div className="footer-section1-phone">
              <p>+44 (0) 203 149 8488</p>
            </div>
            <div className="footer-section1-icons">
              <div className="footer-icons">
                <img src={assets.linkedin} />
              </div>
              <div className="footer-icons">
                <img src={assets.insta} />
              </div>
              <div className="footer-icons">
                <img src={assets.twitter} />
              </div>
              <div className="footer-icons">
                <img src={assets.fb} />
              </div>
            </div>
          </div>
          <div className="footer-section2">
            <div className="footer-section2-logo">
              <img src={assets.logo} />
            </div>
            <div className="footer-section2-certificate">
             <SRABadge/>
            </div>
          </div>
          <div className="footer-section3">
            <Link to="/services/family-law" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-count">
                  <p>01</p>
                </div>
                <div className="list-name">
                  <h1>legal service</h1>
                  <h1>legal service</h1>
                </div>
              </div>
            </Link>

            <Link to="/about-us" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-count">
                  <p>02</p>
                </div>
                <div className="list-name">
                  <h1>about us</h1>
                  <h1>about us</h1>
                </div>
              </div>
            </Link>

            <Link to="/our-team" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-count">
                  <p>03</p>
                </div>
                <div className="list-name">
                  <h1>our teams</h1>
                  <h1>our teams</h1>
                </div>
              </div>
            </Link>

            <Link to="/contact-us" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-count">
                  <p>04</p>
                </div>
                <div className="list-name">
                  <h1>contact us</h1>
                  <h1>contact us</h1>
                </div>
              </div>
            </Link>

            <Link to="/careers" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-count">
                  <p>05</p>
                </div>
                <div className="list-name">
                  <h1>careers</h1>
                  <h1>careers</h1>
                </div>
              </div>
            </Link>

            <Link to="/faqs" className="footer-link">
              <div className="footer-section3-list">
                <div className="list-count">
                  <p>06</p>
                </div>
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
            <p>Copyrights©2025</p>
          </div>
          <div className="footer-bottom-section2">
            <div className="footer-bottom-logo">
              <img src={assets.logoBranding} />
            </div>
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
    </div>
  );
};

export default Footer;
