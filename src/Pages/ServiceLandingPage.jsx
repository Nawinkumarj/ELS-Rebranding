import React from "react";
import ServiceCard from "../Components/ServiceCard.jsx";
import { ServicesData } from "../__mocks__data/ServiceData.js";
import useChangeColor from "../Hooks/useChangeColor.jsx";


const ServiceLandingPage = () => {

    const colorRefs = useChangeColor();

  return (
    <div>
      <h1 ref={(el) => (colorRefs.current[0] = el)} className="sectionTitle">
        Services
      </h1>

      <div className="homeServiceCard">
        {ServicesData.map((service) => (
          <ServiceCard
            key={service.id}
            serviceName={service.name}
            serviceUrl={service.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceLandingPage;
