import React from "react";
import ServiceCard from "../Components/ServiceCard.jsx";
import { ServicesData } from "../__mocks__data/ServiceData.js";
import useChangeColor from "../Hooks/useChangeColor.jsx";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner.jsx";
import { assets } from "../assets/assets.js";


const ServiceLandingPage = () => {

    const colorRefs = useChangeColor();

  return (
    <div>
            <Banner
        bannerImg={assets.HeroBG}
        heading={'Services'}
        content={'Explore our services and find the best one for you'}
      />

      {/* <div className="homeServiceCard">
        {ServicesData.map((service) => (
          <ServiceCard
            key={service.id}
            servicebg={service.serviceBg}
            serviceName={service.name}
            serviceUrl={service.url}
          />
        ))}
      </div> */}
      <div className="servicePage-main">
        <div className="servicePage-head">
          <div className="servicePage-title">
            <h1>Expert Legal Solutions</h1>
          </div>
          <div className="servicePage-descrip">
            <p>
              At ELS Legal, we know that dealing with legal matters, whether
              personal or business-related, can feel overwhelming. That’s why we
              offer clear, straightforward advice with a personal touch, helping
              individuals and businesses navigate legal challenges with
              confidence.
            </p>
            <p>
              Our team of experienced solicitors specialises in a wide range of
              legal services, ensuring you get tailored support for your
              specific needs. Whether you’re buying a property, resolving a
              dispute, planning for the future, or protecting your business,
              we’re here to help, every step of the way.
            </p>
          </div>
        </div>
        <div className="servicePage-services">
          {ServicesData.map((service, serviceIndex) => (
            <div key={serviceIndex} className="servicePage-service">
              <div className="servicePage-services-head">
                <h1>
                  {service.name}
                </h1>
              </div>
              <div className="servicePage-services-descrip">
                <p>{service.description}</p>
              </div>

              <div className="servicePage-subserviceList">
                <div className="servicePage-subserviceList-head">
                  <h1>
                    Our{" "}
                    {service.name.includes("Wills & Probate")
                      ? "Wills & Probate"
                      : service.name}{" "}
                    services include:
                  </h1>
                </div>

                <div className="servicePage-subserviceList-list">
                  {service.subServices.map((subService, subIndex) => (
                    <p key={subIndex}><span className="subserviceList-list-dot">&#183;</span> {subService.name}</p>
                  ))}
                </div>
                <div className="servicePage-subserviceList-button">
                  <p>
                    Need{" "}<span className="serviceLearnmore">
                    {service.name.includes("Wills & Probate")
                      ? "Wills & Probate"
                      : service.name}{" "}
                    advice ?</span>
                    <Link to={`/services/${service.url}`}>
                      <span className="subserviceList-button"> Learn More</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceLandingPage;
