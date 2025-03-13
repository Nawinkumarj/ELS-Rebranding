import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import ServiceCard from '../Components/ServiceCard'
import ChooseUs from '../Components/ChooseUs'
import EnquiryForm from "../Components/EnquiryForm";
import { ServicesData } from '../__mocks__data/ServiceData'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const textRef = useRef(null);

  const textRevealRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      textRef.current,
      { opacity: 1, filter: "blur(0px)", y: 0 },
      {
        opacity: 0,
        filter: "blur(10px)",
        y: -30,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 30%",
          end: "top 0%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".heroVideoContainer",
      { width: "800px", height: "450px" },
      {
        width: "1000px",
        height: "800px",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 30%",
          end: "top 0%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo (
      textRevealRef.current,
      {
        color: 'black'
      },
      {
        color: 'red',
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRevealRef.current,
          start: "top center",
          end: "top 20%",
          scrub: 1,
        }
      }
    )

  }, []);

  return (
    <div className="homeContainer">
      <div className="heroContainer">
        <div className="heroVideoContainer">
          <video autoPlay loop muted width="100%" height="100%">
            <source src={assets.Hero_Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h1 ref={textRef} className="heroTitle">Legal Solutions For <br /> The Real World</h1>

        <div className="heroBgContainer">
          <img src={assets.HeroBG} alt="" className="heroBg" />
        </div>
      </div>

      <h1 ref={textRevealRef} className="sectionTitle">OUR LEGAL PRACTICE AREAS</h1>

      <div className="homeServiceCard">
      {ServicesData.map((service) => (
        <ServiceCard key={service.id} serviceName={service.name} />
      ))}
    </div>

    <ChooseUs />

    <div className="aboutUsContainer">
      <div className="aboutUsTitle flex-center">
        <div className="aboutLine"></div>
        <div className="title">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="aboutUsSection flex-center">
        <div className="leftSide ">
          <h1>COLLABORATION IS OUR STRENGTH.</h1>
          <button>Meet the Team</button>
          <p>Exchange Legal Services started its operation in late 2022. The firm was founded by Mr. Ben Veerapen, a qualified Solicitor of the Supreme Court of England and Wales, and co-partner Mr. Hrushi Punjani.</p>
        </div>
        <div className="rightSide">
          <img src={assets.about_Img} alt="" className="aboutUsImg" />
        </div>
      </div>

    </div>

    <h1 className="sectionTitle">ENQUIRY FORM</h1>

    <EnquiryForm />

    </div>
  );
};

export default Home;
