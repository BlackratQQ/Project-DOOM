// soubor: components/animations/SequentialFadeIn.tsx
"use client";

import { useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SequentialFadeInProps {
  children: ReactNode;
  className?: string;
}

const SequentialFadeIn: React.FC<SequentialFadeInProps> = ({
  children,
  className,
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray(".sequential-fade-in-item");

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".sequential-fade-in-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className={`sequential-fade-in-container ${className}`}>
      {children}
    </div>
  );
};

export default SequentialFadeIn;
