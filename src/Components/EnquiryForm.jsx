import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import countries from "world-countries";



const EnquiryForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countryList = countries.map((country) => ({
    code: country.cca2,
    // name: country.name.common,
    phone: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
  }));


  return (
    <div className="enquiryFromContainer">
      <div className="enquiryBgContainer">
        <img src={assets.ContactBG} alt="" className="enquiryBg" />
      </div>
      <form action="#" className="enquiryForm">
        <div className="threeGridForm">
          <div className="fromDiv">
            <label htmlFor="title">Title</label>
            <select name="title" id="title">
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Miss.">Miss.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
            </select>
          </div>
          <div className="fromDiv">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="fromDiv">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="twoGridForm">
          <div className="fromDiv">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="fromDiv groupDiv">
            <label htmlFor="mobile">Mobile Number</label>
            <div className="selectCountry">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Select a country</option>
                {countryList.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} {country.code} ({country.phone})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Number goes here"
              />
            </div>
          </div>
        </div>

        <div className="oneGridForm">
          <div className="fromDiv">
            <label htmlFor="service">Select Service</label>
            <select name="service" id="service">
              <option value="Service 1">Service 1</option>
              <option value="Service 1">Service 2</option>
              <option value="Service 1">Service 3</option>
              <option value="Service 1">Service 4</option>
              <option value="Service 1">Service 5</option>
            </select>
          </div>
        </div>

        <div className="oneGridForm">
          <div className="fromDiv">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Please provide as much detail of your legal issue as possible"
            ></textarea>
          </div>
        </div>

        <div className="confirmCheckBox">
          <div class="content">
            <label class="checkBox">
              <input type="checkbox" id="ch1" />
              <div class="transition"></div>
            </label>
          </div>
          <p>
            I am bound by the terms of the service and I accept the privacy
            policy.
          </p>
        </div>

        <button value="submit" className="sendbtn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
