/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Components/Banner";
import { assets } from "../assets/assets";
import useChangeColor from "../Hooks/useChangeColor.jsx";
import useScrollReveal from "../Hooks/UseScrollReveal.jsx";
import JourneyPath from "../Components/JourneyPath.jsx";

const About = () => {
  const revealRefs = useScrollReveal();
  const colorRefs = useChangeColor();

  const values = [
    { image: assets.sample, title: "Teamwork and Collaboration" },
    { image: assets.sample, title: "Open Communication", cardsClass: "card2" },
    {
      image: assets.sample,
      title: "Integrity and Professionalism",
      cardsClass: "card3",
    },
    {
      image: assets.sample,
      title: "Innovation and Creativity",
      cardsClass: "card4",
    },
  ];

  return (
    <div className="about-container">
      <Banner
        bannerImg={assets.aboutbg}
        heading="About us"
      />
      <h1
        ref={(el) => (colorRefs.current[0] = el)}
        className="about-title title"
      >
        About Us
      </h1>
      <div className="about-section">
        <div className="about-row">
          <div className="aboutus-left">
            <div className="about-left-content">
              <h1 ref={(el) => (revealRefs.current[0] = el)}>
                Together, We Innovate Law
              </h1>
              <p ref={(el) => (revealRefs.current[1] = el)}>
                Exchange Legal Services started its operation in late 2022. The
                firm was founded by Mr. Ben Veerapen, a qualified Solicitor of
                the Supreme Court of England and Wales, and co-partner Hrushi
                Punjani.
              </p>
            </div>
          </div>
          <div className="about-left-bottom">
            <div className="about-bottom-img">
              <img src={assets.abt} alt="" />
            </div>
            <span className="span1"></span>
            <span className="span2"></span>
          </div>
        </div>
        <div className="aboutus-right">
          <div className="about-rightimg flex-center">
            <img src={assets.elsteam} alt="" />
          </div>
        </div>
      </div>
      <div className="process-container">
        <h1 ref={(el) => (colorRefs.current[1] = el)}>Process</h1>
        <div className="process-section">
          <div className="process-left">
            <div className="process-left-content">
              <p ref={(el) => (revealRefs.current[2] = el)}>
                At our firm, teamwork and collaboration are at the heart of what
                we do. We unite a diverse team of legal experts, each bringing
                unique skills and perspectives to the table. This dynamic
                synergy enables us to craft bespoke legal solutions that meet
                your needs perfectly. By harnessing the collective expertise of
                our team, we provide holistic advice and develop comprehensive
                strategies, ensuring we can tackle even the most complex cases
                with confidence and creativity.
              </p>
            </div>
          </div>
          <div className="process-right">
            <div className="process-right-content">
              <div className="process-steps">
                <p>1</p>
                <p>Understanding Your Unique Needs</p>
              </div>
              <div className="process-steps">
                <p>2</p>
                <p>Using Comprehensive Expertise</p>
              </div>
              <div className="process-steps">
                <p>3</p>
                <p>Unified Strategy for Customised Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-journey">
        <div className="journey-title">
          <h1 ref={(el) => (revealRefs.current[3] = el)}>Our Journey</h1>
          <p></p>
        </div>
        <div className="journey-section">
          <div className="our-journey-path">
            <div className="journey-path-img">
              <JourneyPath />
            </div>
          </div>
        </div>
        <div className="ourJourneyPathSm flex-center">
          <p ref={(el) => (revealRefs.current[4] = el)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            numquam sunt doloremque asperiores voluptas ipsa maxime facilis,
            consequatur consectetur alias dolores vero sapiente explicabo? Sequi
            officia dolorem illum accusamus aliquam.
          </p>
          <div className="journeyPathImgContainer">
            <img src={assets.journeyPathSm} alt="" className="journeyPathImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
