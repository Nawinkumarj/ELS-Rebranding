import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import useChangeColor from "../Hooks/useChangeColor.jsx";
import useScrollReveal from "../Hooks/UseScrollReveal.jsx";

const ServiceSection = ({ selectedService }) => {

  const navigate = useNavigate();
  const revealRefs = useScrollReveal();
  const colorRefs = useChangeColor();
  

  return (
    <div className="serviceSection-container">
      <div className="serviceSection-main">
        <div className="serviceSection-section1">
          <div className="section1-bgHead">
            <h1 ref={(el) => (revealRefs.current[0] = el)}>Services</h1>
          </div>

          <div className="section1-head">
            <h1 ref={(el) => (colorRefs.current[0] = el)}>
              {selectedService.name.includes("Wills & Probate")
                ? "Wills & Probate"
                : selectedService.name}
            </h1>
          </div>
          <div className="section1-full-content">
            <div className="section1-left">
              <div className="section1-content">
                {selectedService.descriptionList?.length > 0 ? (
                  selectedService.descriptionList.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))
                ) : (
                  <p>
                    {selectedService.description ||
                      "More details coming soon..."}
                  </p>
                )}
              </div>
            </div>
            <div className="section1-right">
              <div className="section1-right-img">
                <img src={assets.ServiceMain} alt="Service Main" />
              </div>
            </div>
          </div>
        </div>
       
        <div className="serviceSection-section3">
          <div className="section3-bgHead">
            <h1 ref={(el) => (revealRefs.current[1] = el)}>
              {selectedService.name.includes("Wills & Probate")
                ? "Wills & Probate"
                : selectedService.name}
            </h1>
          </div>

          <div className="section3-head">
            <h1 ref={(el) => (colorRefs.current[2] = el)}>our service</h1>
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
                          `/services/${
                            selectedService.url
                          }/${encodeURIComponent(subService.url)}`
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
