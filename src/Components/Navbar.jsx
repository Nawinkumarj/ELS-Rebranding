import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ServicesData } from "../__mocks__data/ServiceData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbarContainer">
      <div className="topBar flex-center">
        <button>Book Your Free Consultation</button>
        <button>
          <a href="tel:+44 (0) 203 149 8488">Call Us</a>
        </button>
      </div>

      <div className="navbarSection">
        <div className="logoContainer">
          <Link to="/">
            <img src={assets.logo} alt="" className="navLogo" />
          </Link>
        </div>

        <div className="navLinkContainer flex-center">
          <NavLink>
            <p onClick={toggleDropdown}>Legal Service</p>
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
          <NavLink to="/careers">
            <p>Careers</p>
          </NavLink>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40, x: "5%" }}
              animate={{ opacity: 1, y: 0, x: "5%" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="serviceDropDownContainer"
            >
              <div className="dropdownBG">
                <img src={assets.dropdownBG} alt="" />
              </div>

              <div className="dropdownTitle flex-center">
                <p className="dropdownHead">Legal Services</p>
                <p onClick={toggleDropdown} className="dropdownClose">
                  X
                </p>
              </div>

              <div className="dropdownNavList">
                <div className="leftSide">
                  <div className="navInsideBG">
                    <img
                      src="https://cdn.pixabay.com/photo/2024/04/06/17/58/ai-generated-8679746_1280.jpg"
                      alt=""
                    />
                  </div>
                  <div className="insideNavList">
                    {ServicesData.map((service) => (
                      <NavLink key={service.id} to={`services/${service.url}`}>
                        <p>{service.name}</p>
                        <span>&#10148;</span>
                      </NavLink>
                    ))}
                  </div>

                  {/* {ServicesData.map((service) => (
                    <div
                      key={service.id}
                      className={`insideNavList ${
                        activeService === service.id ? "active" : ""
                      }`}
                      onClick={() => setActiveService(service.id)}
                    >
                      <p>{service.name}</p>
                      <span>&#10148;</span>
                    </div>
                  ))} */}
                </div>
                <div className="rightSide">
                  <div className="navInsideBG">
                    <img
                      src="https://cdn.pixabay.com/photo/2024/04/06/17/58/ai-generated-8679746_1280.jpg"
                      alt=""
                    />
                  </div>
                  <div className="insideNavList">
                    <NavLink to="/">
                      <span>&#10140;</span>
                      <p>Family Law</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
