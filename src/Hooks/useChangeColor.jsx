import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useChangeColor = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { color: "black" },
        {
          color: "#a3052d",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return elementsRef; 
};

export default useChangeColor;
