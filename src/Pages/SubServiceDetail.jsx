import React from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "../__mocks__data/ServiceData";
import { assets } from "../assets/assets";
import Banner from "../Components/Banner"

const SubServiceDetail = () => {
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
          <h1>{subService.name}</h1>
        </div>
        <div className="subservice-section1">
          <div className="subservice-img">
            <img src={assets.subService_1} />
          </div>
          <div className="subService-sect1-content">
            <div className="subService-content-l">
              <p>
                ELS Legal understands that contentious divorces can be
                emotionally and legally complex.
              </p>
            </div>
            <div className="subService-content-r">
              <p>
                Our experienced team is here to provide you with clear and
                actionable advice with robust representation to ensure your
                interests are protected throughout.
              </p>
            </div>
          </div>
        </div>
        <div className="subservice-section2">
          <div className="sect2-heading">
            <h1>
              We offer comprehensive support for different elements of
              contentious divorce:
            </h1>
          </div>
          <div className="sect2-content">
            <div className="sect2-content-l">
              <div className="sect2-content-l-list">
                <div className="sect2-content-l-icon">
                  <img src={assets.subService_icon} />
                </div>
                <div className="sect2-content-l-name">
                  <div className="sect2-content-l-head">
                    <h1>legal advice</h1>
                  </div>
                  <div className="sect2-content-l-para">
                    <p>
                      We provide clear and practical advice on your rights and
                      options during a contentious divorce
                    </p>
                  </div>
                </div>
              </div>

              <div className="sect2-content-l-list">
                <div className="sect2-content-l-icon">
                  <img src={assets.subService_icon} />
                </div>
                <div className="sect2-content-l-name">
                  <div className="sect2-content-l-head">
                    <h1>legal advice</h1>
                  </div>
                  <div className="sect2-content-l-para">
                    <p>
                      We provide clear and practical advice on your rights and
                      options during a contentious divorce
                    </p>
                  </div>
                </div>
              </div>

              <div className="sect2-content-l-list">
                <div className="sect2-content-l-icon">
                  <img src={assets.subService_icon} />
                </div>
                <div className="sect2-content-l-name">
                  <div className="sect2-content-l-head">
                    <h1>legal advice</h1>
                  </div>
                  <div className="sect2-content-l-para">
                    <p>
                      We provide clear and practical advice on your rights and
                      options during a contentious divorce
                    </p>
                  </div>
                </div>
              </div>

              <div className="sect2-content-l-list">
                <div className="sect2-content-l-icon">
                  <img src={assets.subService_icon} />
                </div>
                <div className="sect2-content-l-name">
                  <div className="sect2-content-l-head">
                    <h1>legal advice</h1>
                  </div>
                  <div className="sect2-content-l-para">
                    <p>
                      We provide clear and practical advice on your rights and
                      options during a contentious divorce
                    </p>
                  </div>
                </div>
              </div>

              <div className="sect2-content-l-list">
                <div className="sect2-content-l-icon">
                  <img src={assets.subService_icon} />
                </div>
                <div className="sect2-content-l-name">
                  <div className="sect2-content-l-head">
                    <h1>legal advice</h1>
                  </div>
                  <div className="sect2-content-l-para">
                    <p>
                      We provide clear and practical advice on your rights and
                      options during a contentious divorce
                    </p>
                  </div>
                </div>
              </div>

             
            </div>
            <div className="sect2-content-r">
              <div className="sect2-content-r-img">
                <img src={assets.subService_2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subservice-section3">
        <div className="subservice-section3-content">
          <div className="subservice-sect3-l">
            <div className="sect3-crosstext">
              <h1>our approch</h1>
            </div>
          </div>
          <div className="subservice-sect3-r">
            <div className="sect3-r-list">
              <div className="sect3-r-list1">
                <div className="sect3-r-list1-number">
                  <p>01</p>
                </div>
                <div className="sect3-r-list1-content">
                  <p>
                    We take a compassionate and client-centric approach to
                    contentious divorce.
                  </p>
                </div>
              </div>

                <div className="sect3-r-list2">
                <div className="sect3-r-list1-number">
                  <p>01</p>
                </div>
                <div className="sect3-r-list1-content">
                  <p>
                    We take a compassionate and client-centric approach to
                    contentious divorce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServiceDetail;
