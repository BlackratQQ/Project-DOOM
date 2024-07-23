"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StaggeredFadeInTextProps {
  text: string;
  className?: string;
}

const StaggeredFadeInText: React.FC<StaggeredFadeInTextProps> = ({
  text,
  className,
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this code runs only on the client side

    gsap.registerPlugin(ScrollTrigger);

    const words = gsap.utils.toArray(".fade-in-word");

    gsap.fromTo(
      words,
      {
        opacity: 0,
        x: 0, // Začíná s posunem -50px na ose X
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.01, // Postupné zpoždění mezi slovy
        scrollTrigger: {
          trigger: ".staggered-fade-in-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <p className={`staggered-fade-in-container ${className}`}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="fade-in-word inline-block mr-1">
          {word}
        </span>
      ))}
    </p>
  );
};

export default StaggeredFadeInText;
