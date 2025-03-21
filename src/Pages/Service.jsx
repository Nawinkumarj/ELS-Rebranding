import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import ServiceSection from "../Components/ServiceSection";
import { assets } from "../assets/assets";
import { ServicesData } from "../__mocks__data/ServiceData.js";
import useScrollReveal from "../Hooks/UseScrollReveal.jsx";

const Service = () => {
  const revealRefs = useScrollReveal();
  const { serviceUrl } = useParams(); // Get dynamic URL param
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Find the selected service based on the URL
  const initialService =
    ServicesData.find((service) => service.url === serviceUrl) ||
    ServicesData[0];

  const [selectedService, setSelectedService] = useState(initialService);

  useEffect(() => {
    if (!serviceUrl) {
      navigate(`/services/${ServicesData[0].url}`, { replace: true });
    } else {
      const newService = ServicesData.find(
        (service) => service.url === serviceUrl
      );
      if (newService) setSelectedService(newService);
    }
  }, [serviceUrl, navigate]);

  return (
    <div className="service-container">
      <Banner
        bannerImg={assets.Bannerbg}
        heading={selectedService.name}
        content={selectedService.description}
      />
      <div className="service-main">
        <div className="service-top">
          <div className="service-top-img">
            <img src={assets.ServiceMain} />
          </div>

          <div className="service-list-mobile">
            <div className="dropdown-container">
              {/* Dropdown Header */}
              <div
                className={`dropdown-header ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="service-title-mobile">
                  <div className="service-title-img">
                    <img src={assets.Auction} alt={selectedService.name} />
                  </div>
                  <div className="service-name">
                    <h1>
                      {selectedService.name.includes("Wills & Probate")
                        ? "Wills & Probate"
                        : selectedService.name}
                    </h1>
                  </div>
                </div>
                <p className={`dropdown-icon ${isOpen ? "rotate" : ""}`}>
                  &gt;
                </p>
              </div>

              {/* Dropdown Items */}

              <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
                {ServicesData.filter(
                  (service) => service.name !== selectedService.name
                ) //exclude selected item
                  .map((service, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        navigate(`/services/${service.url}`);
                        setIsOpen(false);
                      }}
                    >
                      <div className="service-title-img">
                        <img src={assets.Auction} alt={service.name} />
                      </div>
                      <div className="service-name">
                        <h1>
                          {service.name.includes("Wills & Probate")
                            ? "Wills & Probate"
                            : service.name}
                        </h1>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          

          <div className="service-section">
            <div className="service-section-head">
              <h1 ref={(el) => (revealRefs.current[0] = el)}>
                {selectedService.name.includes("Wills & Probate")
                  ? "Wills & Probate"
                  : selectedService.name}
              </h1>
            </div>
            <div className="service-content">
              <p ref={(el) => (revealRefs.current[1] = el)}>
                {selectedService.description ||
                  "Service details will appear here."}
              </p>
            </div>
          </div>
        </div>
        <div className="service-bottom">
          <div className="service-list">
            {ServicesData.map((service) => (
              <div
                className="service-title"
                key={service.id}
                onClick={() => navigate(`/services/${service.url}`)}
                style={{ cursor: "pointer" }} // Indicate interactivity
              >
                <div className="service-title-img">
                  <img src={assets.Auction} alt={service.name} />
                </div>
                <div className="service-name">
                  <h1>
                    {service.name.includes("Wills & Probate")
                      ? "Wills & Probate"
                      : service.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ServiceSection selectedService={selectedService} />
      </div>
    </div>
  );
};

export default Service;
