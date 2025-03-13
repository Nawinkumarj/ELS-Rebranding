import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ServiceSection = ({ selectedService }) => {
  const navigate = useNavigate();
  

  return (
    <div className="serviceSection-container">
      <div className="serviceSection-main">
        <div className="serviceSection-section1">
          <div className="section1-left">
            <div className="section1-bgHead">
              <h1>Services</h1>
            </div>

            <div className="section1-head">
              <h1>{selectedService.name.includes("Wills & Probate")
                ? "Wills & Probate"
                : selectedService.name}</h1>
            </div>
            <div className="section1-content">
              <p>
                {selectedService.description || "More details coming soon..."}
              </p>
            </div>
          </div>
          <div className="section1-right">
            <div className="section1-right-img">
              <img src={assets.ServiceMain} alt="Service Main" />
            </div>
          </div>
        </div>
        <div className="serviceSection-section2">
          <div className="section2-head">
            <h1>els legal</h1>
          </div>
          <div className="section2-video">
            <video className="video-container" muted width="100%" height="100%">
              <source src={assets.Hero_Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="serviceSection-section3">
          <div className="section3-bgHead">
            <h1>
              {selectedService.name.includes("Wills & Probate")
                ? "Wills & Probate"
                : selectedService.name}
            </h1>
          </div>

          <div className="section3-head">
            <h1>our service</h1>
          </div>
          <div className="section3-list">
            {selectedService.subServices &&
            selectedService.subServices.length > 0 ? (
              selectedService.subServices.map((subService, index) => (
                <div className="section3-list-content" key={index}>
                  <div className="section3-content-l">
                    <div className="section3-content-head">
                      <h1>{subService.name}</h1>
                    </div>
                    <div className="section3-content-line">
                      <p>{subService.description}</p>
                    </div>
                  </div>
                  <div className="section3-content-r">
                    <div
                      className="section3-readmore"
                      onClick={() =>
                        navigate(
                          `/services/${selectedService.url}/${encodeURIComponent(subService.url)}`
                        )
                      }
                    >
                      <h1>read more &rarr;</h1>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No sub-services available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
