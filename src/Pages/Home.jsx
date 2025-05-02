/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import ServiceCard from "../Components/ServiceCard";
import ChooseUs from "../Components/ChooseUs";
import EnquiryForm from "../Components/EnquiryForm";
import CookiesPopup from "../Components/CookiesPopup";
import { ServicesData } from "../__mocks__data/ServiceData.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useChangeColor from "../Hooks/useChangeColor.jsx";
import useScrollReveal from "../Hooks/UseScrollReveal.jsx";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const navigate = useNavigate();
  const revealRefs = useScrollReveal();
  const colorRefs = useChangeColor();

  const textRef = useRef(null);


  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 1, filter: "blur(0px)", y: 0 },
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 0,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 45%",
            end: "top 0%",
            scrub: 1,
          },
        }
      );

    });

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          filter: "blur(0px)",
        }
      );
    });

    return () => mm.revert();
  }, []);

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
    <div className="homeContainer">
      <div className="heroContainer">

        <h1 ref={textRef} className="heroTitle">
          Expert Legal Solutions
        </h1>

        <div className="heroBgContainer">
          <img src={assets.HeroBG} alt="" className="heroBg" />
        </div>
      </div>

      <h1 ref={(el) => (colorRefs.current[0] = el)} className="sectionTitle">
        Services 
      </h1>

      <div className="homeServiceCard">
        {ServicesData.map((service) => (
          <ServiceCard key={service.id} serviceName={service.name} servicebg={service.serviceBg} serviceUrl={service.url} />
        ))}
      </div>

      <ChooseUs />

      <div className="aboutUsContainer">
        <div className="aboutUsTitle flex-center">
          <div className="aboutLine"></div>
          <div className="title">
            <h1 ref={(el) => (colorRefs.current[2] = el)}>ABOUT US</h1>
          </div>
        </div>

        <div className="aboutUsSection flex-center">
        <div className="rightSide flex-center">
            <img src={assets.about_Img} alt="" className="aboutUsImg" />
          </div>
          <div className="leftSide ">
            <h1 ref={(el) => (revealRefs.current[0] = el)}>COLLABORATION IS OUR STRENGTH.</h1>
            <button onClick={() => navigate("/our-team")} ref={(el) => (revealRefs.current[1] = el)}>Meet the Team</button>
            <p ref={(el) => (revealRefs.current[2] = el)}>
              Exchange Legal Services started its operation in late 2022. The
              firm was founded by Mr. Ben Veerapen, a qualified Solicitor of the
              Supreme Court of England and Wales, and co-partner Mr. Hrushi
              Punjani.
            </p>
          </div>
        </div>
      </div>

      <h1 ref={(el) => (colorRefs.current[3] = el)} className="sectionTitle">OUR CLIENTS SPEAK FOR US!</h1>

      <div className='googleReview flex-center'>
      <iframe src="https://widget.tagembed.com/2161805"></iframe>
      </div>


      <h1 ref={(el) => (colorRefs.current[4] = el)} className="sectionTitle">ENQUIRY FORM</h1>

      <EnquiryForm />

      <CookiesPopup />
    </div>
  );
};

export default Home;
