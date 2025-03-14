import {useState} from "react";
import { assets } from "../assets/assets";
import Banner from "../Components/Banner";
const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  const validateName = (name) => {
    return /^[A-Za-z]+$/.test(name);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.firstName.trim() || !validateName(formData.firstName)) {
      newErrors.firstName = "Valid first name is required";
    }

    if (!formData.lastName.trim() || !validateName(formData.lastName)) {
      newErrors.lastName = "Valid last name is required";
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submission logic
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });

  };
  return (
    <>
      <Banner bannerImg={assets.Bannerbg} />
      <div className="wrapper">
        <div className="info-section">
          <div className="info-item">
            <img src={assets.CallIcon} alt="Phone" className="info-icon" />
            <span className="info-text">+91 8765432187</span>
          </div>
          <div className="info-item">
            <img
              src={assets.LocationIcon}
              alt="Location"
              className="info-icon"
            />
            <span className="info-text">elslegal@gmail.com</span>
          </div>
          <div className="info-item">
            <img src={assets.EmailIcon} alt="Email" className="info-icon" />
            <span className="info-text">elslegal@gmail.com</span>
          </div>
        </div>
        <div className="social-section">
          <div className="social-box">
            <img
              src={assets.InstagramIcon}
              alt="Instagram"
              className="social-logo"
            />
            <div className="social-content">
              <span className="social-title">Instagram</span>
              <p className="social-desc">Lorem ipsum text</p>
            </div>
          </div>
          <div className="social-box right-icon">
            <img src={assets.FaceBook} alt="Facebook" className="social-logo" />
            <div className="social-content">
              <span className="social-title">Facebook</span>
              <p className="social-desc">Lorem ipsum text</p>
            </div>
          </div>
          <div className="social-box">
            <img
              src={assets.LinkedinIcon}
              alt="LinkedIn"
              className="social-logo"
            />
            <div className="social-content">
              <span className="social-title">Linkedin</span>
              <p className="social-desc">Lorem ipsum text</p>
            </div>
          </div>
        </div>
      </div>
      {/* Form Section */}
      <div className="legal-form-wrapper">
        <div className="header-section">
          <h1>
            LET’S TALK <br />
            <span>WITH US</span>
          </h1>
          <div className="email-box">
            <span className="email-icon">
              <img src={assets.EmailArrow} alt="" />
            </span>
            <p>info@exchangelegalservices.com</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="content-section">
          <img src={assets.HammerImg} alt="Gavel" className="gavel-image" />

          <div className="form-container">
            <img
              src={assets.ImgPaper}
              alt="Paper Effect"
              className="paper-bg"
            />
            <form className="legal-form" onSubmit={handleSubmit}>
              <div className="double-input">
                <div className="input-box">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input-box">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1221.769086496135!2d-0.2560996970060974!3d51.657898820870805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617243bc26fc3%3A0x63573796ad554ad9!2sExchange%20Legal%20Services!5e0!3m2!1sen!2sin!4v1741865818881!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
