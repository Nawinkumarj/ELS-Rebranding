import React from "react";
import { assets } from "../assets/assets";

const Banner = ({ bannerImg, heading, content}) => {
  return (
    <div className="banner-container">
      <div className="banner-main">
        <div className="banner-bg">
          <img src={bannerImg} />
        </div>
        <div className="banner-section">
          <div className="banner-section-main">
            <div className="banner-logo">
              <img src={assets.logo} />
            </div>
            <div className="banner-heading">
              <h1>{heading}</h1>
            </div>
            <div className="banner-content">
              <p>{content}
              </p>
            </div>
            <div className="banner-button">
              <button>Explore all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
