import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach((el) => {
      if (!el) return;

      const text = new SplitType(el, { types: "chars, words" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 0.1,
        stagger: 0.5,
      });
    });
  }, []);

  return elementsRef;
};

export default useScrollReveal;
