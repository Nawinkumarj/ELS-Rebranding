import React from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "../__mocks__data/ServiceData";
import { assets } from "../assets/assets";
import Banner from "../Components/Banner";
import useChangeColor from "../Hooks/useChangeColor.jsx";
import useScrollReveal from "../Hooks/UseScrollReveal.jsx";

const SubServiceDetail = () => {
  const revealRefs = useScrollReveal();
  const colorRefs = useChangeColor();
  const { serviceUrl, subServiceUrl } = useParams();

  // Find the main service using `url` instead of `id`
  const service = ServicesData.find((service) => service.url === serviceUrl);

  // Find the sub-service using `url`
  const subService = service?.subServices.find(
    (sub) => sub.url === decodeURIComponent(subServiceUrl) // FIX: Use `subServiceUrl`
  );

  if (!service || !subService) {
    return <h2>Sub-service not found</h2>;
  }

  return (
    <div className="subservice-container">
      <Banner
        bannerImg={assets.Bannerbg}
        heading={subService.name}
        content={subService.description}
      />
      <div className="subservice-main">
        <div className="subservice-heading">
          <h1 ref={(el) => (colorRefs.current[0] = el)}>{subService.name}</h1>
        </div>
        <div className="subservice-section1">
          <div className="subService-sect1-content">
            <div className="subService-content-l">
              <p ref={(el) => (revealRefs.current[0] = el)}>
                {subService.subContent1}
              </p>
            </div>
            <div className="subService-content-r">
              <p ref={(el) => (revealRefs.current[1] = el)}>
                {subService.subContent2}
              </p>
            </div>
          </div>
        </div>
        <div className="subservice-section2">
          <div className="sect2-heading">
            <h1 ref={(el) => (revealRefs.current[2] = el)}>
              {subService.serviceListHead}
            </h1>
          </div>
          <div className="sect2-content">
            <div className="sect2-content-l">
              {subService.serviceList.map((serviceItem, index) => (
                <div key={index} className="sect2-content-l-list">
                  <div className="sect2-content-l-name">
                    <div className="sect2-content-l-head">
                      <h1>{serviceItem.title}</h1>
                    </div>
                    <div className="sect2-content-l-para">
                      <p>{serviceItem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="subservice-section3">
        <div className="subservice-section3-bg">
          <img src={assets.subService_bg1} />
        </div>
        <div className="subservice-section3-content">
          <div className="subservice-sect3-l">
            <div className="sect3-crosstext">
              <h1 ref={(el) => (revealRefs.current[3] = el)}>our approch</h1>
            </div>
          </div>

          <div className="subservice-sect3-r">
            <div className="sect3-r-list">
              {subService.approch.map((item, index) => (
                <div key={index} className={`sect3-r-list${index + 1}`}>
                  <div className="sect3-r-list1-number">
                    <p>{`0${index + 1}`}</p>
                  </div>
                  <div className="sect3-r-list1-content">
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      <div className="subservice-section4">
        <div className="subservice-section4-content">
          <div className="section4-chooseus-desktop">
            <div className="chooseus-desktop-head1">
              <h1>why choose els legal</h1>
            </div>
            {/* <div className="chooseus-desktop-img">
              <img src={assets.subService_3} />
            </div> */}
            {/* <div className="chooseus-desktop-head1">
              <h1>els legal</h1>
            </div> */}
          </div>

          <div className="section4-chooseus-mobile">
            <div className="chooseus-mobile-head1">
              <h1>
                why choose <br /> els legal
              </h1>
            </div>
            <div className="chooseus-mobile-img">
              <img src={assets.subService_3} />
            </div>
          </div>
          {subService.whyChooseus.map((chooseus, index) => (
            <div key={index} className="subservice-sect4-list">
              <div className="sect4-list-header">
                {/* <div className="list-header-icon">
                  <img src={assets.subService_icon2} />
                </div> */}
                <div className="list-header-head">
                  <h1>{chooseus.title}</h1>
                </div>
              </div>
              <div className="sect4-list-content">
                <p>{chooseus.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="subservice-section5">
        <div className="subservice-section5-contact">
          <div className="section5-contact-head">
            <h1>Get in touch with us</h1>
          </div>
          <div className="section5-contact-content">
            <p>
              <span className="section5-quotation1">&#10077;</span>
              {subService.contact}
              <span className="section5-quotation">&#10078;</span>
            </p>
          </div>
        </div>
      </div>
      <div className="subservice-section5-subtag">
        <p>{subService.contactInfo}</p>
      </div>
    </div>
  );
};

export default SubServiceDetail;
