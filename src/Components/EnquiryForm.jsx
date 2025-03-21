import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import countries from "world-countries";
import { ServicesData } from "../__mocks__data/ServiceData";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.firstName.trim() < 3)
      newErrors.firstName = "Enter a valid First Name";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{7,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid phone number (7-15 digits)";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    if (!formData.agree) newErrors.agree = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
        agree: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="enquiryFromContainer">
      <form
        onSubmit={handleSubmit}
        action="#"
        className="enquiryForm"
        autoComplete="off"
      >
        <div className="threeGridForm">
          <div className="fromDiv">
            <label htmlFor="title">
              Title <span className="FormMandatory">*</span>
            </label>
            <select
              name="title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
            >
              <option value="">Select Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Miss.">Miss.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
            </select>
          </div>
          <div className="fromDiv">
            <label htmlFor="firstName">
              First Name <span className="FormMandatory">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="fromDiv">
            <label htmlFor="lastName">
              Last Name <span className="FormMandatory">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
        </div>

        <div className="twoGridForm">
          <div className="fromDiv">
            <label htmlFor="email">
              Email Address <span className="FormMandatory">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="fromDiv groupDiv">
            <label htmlFor="mobile">
              Phone Number <span className="FormMandatory">*</span>
            </label>
            <div className="selectCountry">
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Phone Number"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>
        </div>

        <div className="oneGridForm">
          <div className="fromDiv">
            <label htmlFor="service">
              Select Service <span className="FormMandatory">*</span>
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleInputChange}
            >
              <option value="">Choose a Service</option>
              {ServicesData.map((service) => (
                <option key={service.is} value={`${service.name}`}>
                  {service.name}
                </option>
              ))}
            </select>
            {errors.service && <p className="error">{errors.service}</p>}
          </div>
        </div>

        <div className="oneGridForm">
          <div className="fromDiv">
            <label htmlFor="message">
              Message <span className="FormMandatory">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Please provide as much detail of your legal issue as possible"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
        </div>

        <div className="confirmCheckBox">
          <div className="content">
            <label className="checkBox">
              <input
                type="checkbox"
                id="ch1"
                name="agree"
                checked={formData.agree}
                onChange={handleInputChange}
              />
              <div className="transition"></div>
            </label>
          </div>
          <p>
            I am bound by the terms of the service and I accept the privacy
            policy. <span className="FormMandatory">*</span>
          </p>
        </div>
        {errors.agree && <p className="error">{errors.agree}</p>}

        <button value="submit" className="sendbtn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;