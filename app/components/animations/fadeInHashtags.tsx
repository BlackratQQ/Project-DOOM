"use client";

import { useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FadeInHashtagsProps {
  children: ReactNode;
  initialY?: number;
  duration?: number;
  start?: string;
  delayIncrement?: number;
  startDelay?: number;
}

const FadeInHashtags: React.FC<FadeInHashtagsProps> = ({
  children,
  initialY = -20,
  duration = 1,
  start = "top 80%",
  delayIncrement = 0.2,
  startDelay = 0,
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this code runs only on the client side

    gsap.registerPlugin(ScrollTrigger);

    const hashtags = gsap.utils.toArray(".fade-in-hashtag") as HTMLElement[];

    hashtags.forEach((hashtag, index) => {
      gsap.fromTo(
        hashtag,
        {
          opacity: 0,
          y: initialY,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: hashtag,
            start: start,
            toggleActions: "play none none reverse",
          },
          delay: startDelay + index * delayIncrement,
        },
      );
    });
  }, [initialY, duration, start, delayIncrement, startDelay]);

  return <div>{children}</div>;
};

export default FadeInHashtags;
