import React, { useRef } from "react";
import Banner from "../Components/Banner";
import { assets } from "../assets/assets";
import sections from "../__mocks__data/PrivacyPolicyData"; // Importing sections correctly

const PrivacyPolicy = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const headerOffset = 150;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Banner
        bannerImg={assets.aboutbg}
        heading="Privacy Policy"
        content="Learn about our data policies and confidentiality practices."
      />
      <div className="cookies-container">
        {/* Sidebar Navigation */}
        <nav className="cookies-sidebar">
          {sections.map((section) => (
            <button
              key={section.id}
              className="cookies-nav-btn"
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="cookies-content">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="cookies-section"
            >
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
