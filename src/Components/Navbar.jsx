import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ServicesData } from "../__mocks__data/ServiceData";
import EnquiryForm from "./EnquiryForm";

const Navbar = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [hamburgerActive, setHamburgerActive] = useState(false);

  const [showSmServiceNav, setshowSmServiceNav] = useState(false);

  const [activeService, setActiveService] = useState(null);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showEnquiryForm, setshowEnquiryForm] = useState(false);

  useEffect(() => {
    if (ServicesData.length > 0) {
      setActiveService(ServicesData[0].id);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveService(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="navbarContainer">
        <div className="topBar flex-center">
          <button onClick={() => setshowEnquiryForm(true)}>Enquiry Now</button>
          <button>
            <a href="tel:+44 (0) 203 149 8488">0203 149 8488</a>
          </button>
        </div>

        <div className={`navbarSection ${showNavbar ? "show" : "hide"}`}>
          <div className="logoContainer">
            <Link to="/">
              <img src={assets.logo} alt="" className="navLogo" />
            </Link>
          </div>
          <div className="navLinkContainer flex-center">
            <NavLink>
              <p onClick={toggleDropdown}>Services</p>
            </NavLink>
            <NavLink to="/about-us">
              <p>About Us</p>
            </NavLink>
            <NavLink to="/our-team">
              <p>Our Team</p>
            </NavLink>
            <NavLink to="/contact-us">
              <p>Contact Us</p>
            </NavLink>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -40, x: "5%" }}
                animate={{ opacity: 1, y: 0, x: "5%" }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="serviceDropDownContainer flex-center"
              >
                {/* <div className="dropdownBG">
                <img src={assets.dropdownBG} alt="" />
              </div> */}

                <div className="dropdownTitle flex-center">
                  <p className="dropdownHead">Legal Services</p>
                  <p onClick={toggleDropdown} className="dropdownClose">
                    X
                  </p>
                </div>

                <div ref={dropdownRef} className="dropdownNavList">
                  <div className="leftSide">
                    <div className="navInsideBG">
                      {/* <img
                        src="https://cdn.pixabay.com/photo/2024/04/06/17/58/ai-generated-8679746_1280.jpg"
                        alt=""
                      /> */}
                    </div>
                    <div className="insideNavList">
                      {ServicesData.map((service) => (
                        <NavLink
                          key={service.id}
                          to={`services/${service.url}`}
                          onMouseOver={() => setActiveService(service.id)}
                          onClick={toggleDropdown}
                          className={` ${
                            activeService === service.id ? "chumma" : ""
                          }`}
                        >
                          <p>{service.name}</p>
                          <span>&#10148;</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div className="rightSide">
                    <div className="navInsideBG">
                      {/* <img
                        src="https://cdn.pixabay.com/photo/2024/04/06/17/58/ai-generated-8679746_1280.jpg"
                        alt=""
                      /> */}
                    </div>
                    <div className="insideNavList">
                      {activeService &&
                        (() => {
                          const selectedService = ServicesData.find(
                            (service) => service.id === activeService
                          );

                          if (!selectedService) return null;

                          return (
                            <>
                              {/* <NavLink
                                to={`services/${selectedService.url}`}
                                className="linkService"
                                onClick={toggleDropdown}
                              >
                                <span>&#10140;</span>
                                <p>{selectedService.name}</p>
                              </NavLink> */}

                              {selectedService.subServices.map((sub) => (
                                <NavLink
                                  key={sub.url}
                                  to={`services/${selectedService.url}/${sub.url}`}
                                  onClick={toggleDropdown}
                                >
                                  <span>&#10140;</span>
                                  <p>{sub.name}</p>
                                </NavLink>
                              ))}
                            </>
                          );
                        })()}
                    </div>
                  </div>
                </div>
                <p onClick={toggleDropdown} className="dropdownClose">
                    X
                  </p>
              </motion.div>
            )}
          </AnimatePresence>{" "}
        </div>
      </div>

      <div className="NavbarSm">
        <div className="topBarSm flex-center">
          <div className="topBarSmContent flex-center">
            <button>Enquiry Now</button>
            <button className="smCallBtn">Call Us</button>
          </div>
        </div>
        <div className={`NavbarSmBlack ${showNavbar ? "show" : "hide"} flex-center`}>
          <div onClick={() => navigate("/")} className="navLogoSmContainer">
            <img src={assets.logo} alt="" className="navLogoSm" />
          </div>
          <div
            onClick={() => setHamburgerActive(!hamburgerActive)}
            className={`hamburger ${hamburgerActive ? "is-active" : ""}`}
            id="hamburger-6"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <AnimatePresence>
          {hamburgerActive && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="NavListSm"
            >
              {!showSmServiceNav ? (
                <div className="NavListSmNormal one flex-center">
                  <a onClick={() => setshowSmServiceNav(true)}>
                    <p>
                      SERVICES <span>&gt;</span>
                    </p>
                  </a>

                  <NavLink to="/about-us">
                    <p>ABOUT US </p>
                  </NavLink>

                  <NavLink to="/our-team">
                    <p>OUR TEAM</p>
                  </NavLink>

                  <NavLink to="/contact-us">
                    <p>CONTACT US</p>
                  </NavLink>
                </div>
              ) : (
                <div className="NavListSmNormal two flex-center">
                  <NavLink onClick={() => setshowSmServiceNav(false)}>
                    <p>
                      <span>&lt;</span> SERVICE
                    </p>
                  </NavLink>

                  <hr />

                  {ServicesData.map((service) => (
                    <NavLink
                      key={service.id}
                      to={`services/${service.url}`}
                      className="legalServiceNavSm flex-center"
                      onClick={() => setHamburgerActive(!hamburgerActive)}
                    >
                      <p>
                        <span>&gt;</span>
                        {service.name.includes("Wills & Probate")
                          ? "Wills & Probate"
                          : service.name}
                      </p>
                    </NavLink>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>{" "}
      </div>

      {/* Popup for Enquiry form */}
      {showEnquiryForm && (
        <div className="enquiry-modal" onClick={() => setshowEnquiryForm(false)}>
          <div className="enquiry-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setshowEnquiryForm(false)}>
              <img src={assets.close} alt="" />
            </button>
            <EnquiryForm />
          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
