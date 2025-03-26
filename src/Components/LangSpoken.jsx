import React, { useEffect, useRef } from "react";
// import { assets } from '../assets/assets'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const LangSpoken = () => {
  const langRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      langRef.current,
      { rotateX: "5deg", rotateZ: "-10deg", rotateY: "20deg", width: "80%" },
      {
        rotateX: "0",
        rotateZ: "0",
        rotateY: "0",
        width: "85%",
        duration: 1,
        scrollTrigger: {
          trigger: langRef.current,
          start: "top 50%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="langContainer flex-center">
      <div ref={langRef} className="langInsideContainer">
        <div className="langTop flex-center">Languages Spoken</div>
        <div className="langBottom">
          <h2>
            At Exchange Legal Services, we recognise that clients often value
            the opportunity to communicate in their native language where
            possible. Our team is proud to speak 11 different languages, as
            detailed below.
          </h2>
        </div>
        <div className="langItem">
          <ul>
            <li>English</li>
            <li>French</li>
            <li>Gujarati</li>
            <li>Hindi</li>
            <li>Arabic</li>
            <li>Tamil</li>
            <li>Punjabi</li>
            <li>Urdu</li>
            <li>Malayam</li>
            <li>Sinhalese</li>
            <li>Mauritian Creole</li>
          </ul>
          <p>
            Based on your needs, we can provide interpreters and translators if
            necessary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LangSpoken;
