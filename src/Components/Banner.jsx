import React from "react";
import { assets } from "../assets/assets";

const Banner = ({ bannerImg, heading, content, button, onButtonClick }) => {
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
              <p>{content}</p>
            </div>
            {button && (
              <div className="banner-button">
                <button onClick={onButtonClick}>{button}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
