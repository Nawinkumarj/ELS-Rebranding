import React from "react";
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
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
          <Link to='/'>
            <img src={assets.logo} alt="" className='navLogo' />
          </Link>
        </div>

        <div className="navLinkContainer flex-center">
          <NavLink to='/services/family-law'>
            <p>Legal Service</p>
          </NavLink>
          <NavLink to='/about-us'>
            <p>About Us</p>
          </NavLink>
          <NavLink to='/our-team'>
            <p>Our Team</p>
          </NavLink>
          <NavLink to='/contact-us'>
            <p>Contact Us</p>
          </NavLink>
          <NavLink to='/careers'>
            <p>Careers</p>
          </NavLink>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
