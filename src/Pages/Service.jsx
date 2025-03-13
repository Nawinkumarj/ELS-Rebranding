import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import ServiceSection from "../Components/ServiceSection";
import { assets } from "../assets/assets";
import { ServicesData } from "../__mocks__data/ServiceData";

const Service = () => {
  const { serviceUrl } = useParams(); // Get dynamic URL param
  const navigate = useNavigate();

  // Find the selected service based on the URL
  const initialService =
    ServicesData.find((service) => service.url === serviceUrl) ||
    ServicesData[0];

  const [selectedService, setSelectedService] = useState(initialService);

  useEffect(() => {
    if (!serviceUrl) {
      // If no service URL, navigate to the first service URL
      navigate(`/services/${ServicesData[0].url}`, { replace: true });
    } else {
      // Update state when URL changes
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
        heading={"Service"}
        content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Explicabo recusandae est blanditiis aliquam, op"}
      />
      <div className="service-main">
        <div className="service-top">
          <div className="service-top-img">
            <img src={assets.ServiceMain} />
          </div>
          <div className="service-section">
            <div className="service-section-head">
              <h1>{selectedService.name}</h1>
            </div>
            <div className="service-content">
              <p>
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
