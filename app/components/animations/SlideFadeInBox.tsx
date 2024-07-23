"use client";

import { useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SlideFadeInBoxProps {
  children: ReactNode;
  initialY?: number;
  initialX?: number;
  bounceY?: number;
  className?: string;
}

const SlideFadeInBox: React.FC<SlideFadeInBoxProps> = ({
  children,
  initialY = 0,
  initialX = 0,
  bounceY = 0,
  className = "",
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this code runs only on the client side

    gsap.registerPlugin(ScrollTrigger);

    const classSelector = className ? `.${className}` : ".slide-up-fade-in-box";

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: classSelector,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    timeline
      .fromTo(
        classSelector,
        { opacity: 0, y: initialY, x: initialX },
        { opacity: 1, y: bounceY, x: 0, duration: 1, ease: "power1.inOut" },
      )
      .to(classSelector, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
  }, [initialY, initialX, bounceY, className]);

  return <div className={`slide-up-fade-in-box ${className}`}>{children}</div>;
};

export default SlideFadeInBox;
