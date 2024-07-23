"use client";

import { useEffect, ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FadeInBoxProps {
  children: ReactNode;
  startDelay?: number;
  className?: string;
}

const FadeInBox: React.FC<FadeInBoxProps> = ({
  children,
  startDelay = 0,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this code runs only on the client side

    gsap.registerPlugin(ScrollTrigger);

    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: startDelay, // Apply the startDelay here
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, [startDelay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default FadeInBox;
