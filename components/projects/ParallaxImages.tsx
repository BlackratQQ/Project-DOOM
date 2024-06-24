"use client";

import React, { useEffect, useRef } from "react";
import { ProjektData } from "./Data";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ParallaxImagesProps {
  projekty: ProjektData[];
}

gsap.registerPlugin(ScrollTrigger);

const ParallaxImages: React.FC<ParallaxImagesProps> = ({ projekty }) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      refs.current.forEach((ref) => {
        if (!ref) return;
        const speed = parseFloat(ref.getAttribute("data-speed")!);

        gsap.to(ref, {
          scrollTrigger: {
            trigger: ref,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
          y: `${speed * -100}%`,
        });
      });

      // Cleanup ScrollTrigger instances on unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const getResponsiveValue = (values: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }) => {
    if (window.innerWidth >= 1280) return values.xl;
    if (window.innerWidth >= 1024) return values.lg;
    if (window.innerWidth >= 768) return values.md;
    return values.sm;
  };

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div>
      {projekty.map((projekt) => (
        <div key={projekt.id} className="mb-8">
          <div className="-mx-2 flex flex-wrap">
            {projekt.obrazky.map((obrazek, obrazekIndex) => (
              <div
                key={obrazekIndex}
                className={`w-1/2 px-2 py-2 ${
                  window.innerWidth >= 1280
                    ? ""
                    : window.innerWidth >= 1024
                    ? "bg-blue-500"
                    : window.innerWidth >= 768
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
                ref={addToRefs}
                data-speed={getResponsiveValue(obrazek.speed).toString()}
                style={{
                  position: "relative",
                  left: `${getResponsiveValue(obrazek.left)}rem`,
                  top: `${getResponsiveValue(obrazek.top)}rem`,
                  transform: `scale(${getResponsiveValue(obrazek.scale)})`,
                  zIndex: obrazek.index,
                }}
              >
                <Image
                  src={obrazek.src}
                  alt={`Obrázek ${obrazekIndex + 1} pro projekt ${
                    projekt.title
                  }`}
                  layout="intrinsic" // Zachovat originální velikost obrázku
                  sizes="100vw"
                  width={100}
                  height={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxImages;
