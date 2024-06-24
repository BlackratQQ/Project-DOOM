"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SlideInHeader: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this code runs only on the client side

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".slide-in-header",
      {
        opacity: 0,
        x: 500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".slide-in-header",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return null; // This component does not render any visual output
};

export default SlideInHeader;
