import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Cookies from "./Pages/Cookies";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SubServiceDetail from "./Pages/SubServiceDetail";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Careers from "./Pages/Careers";
import Ourteam from "./Pages/Ourteam";
import Error404 from "./Pages/Error404";
import ScrollToTop from "./Components/ScrollToTop";
import ConstructionPage from "./Pages/ConstructionPage";
import ServiceLandingPage from "./Pages/ServiceLandingPage";

const isUnderConstruction = false;

const App = () => {
  if (isUnderConstruction) {
    return <ConstructionPage />;
  }

  return (
    <div>
      <Navbar />
      <div className='pageTop'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/" element={<ServiceLandingPage />} />
          <Route path="/services/:serviceUrl" element={<Service />} />
          <Route
            path="/services/:serviceUrl/:subServiceUrl"
            element={<SubServiceDetail />}
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-team" element={<Ourteam />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
