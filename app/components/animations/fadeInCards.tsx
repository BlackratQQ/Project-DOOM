"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FadeinCards: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this code runs only on the client side

    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".fade-in-card") as HTMLElement[];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.4,
        },
      );
    });
  }, []);

  return null; // This component does not render any visual output
};

export default FadeinCards;
