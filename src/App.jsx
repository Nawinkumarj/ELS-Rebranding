import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home'
import Faq from './Pages/Faq'
import Service from "./Pages/Service"
import About from "./Pages/About";
import Cookies from "./Pages/Cookies";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SubServiceDetail from "./Pages/SubServiceDetail";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import EnquiryForm from "./Components/EnquiryForm";
import Careers from "./Pages/Careers";
import Ourteam from "./Pages/Ourteam";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/services/:serviceUrl" element={<Service />} />
        <Route
          path="/services/:serviceUrl/:subServiceUrl"
          element={<SubServiceDetail />}
        />

        <Route path="/about-us" element={<About />} />
        <Route path="/cookie-policy" element={<Cookies />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-team" element={<Ourteam />} />
      </Routes>
      {/* <EnquiryForm /> */}
      <Footer />
    </div>
  );
};

export default App;
