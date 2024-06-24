"use client";

import React, { useState, useEffect, useRef } from "react";
import ParallaxImages from "./ParallaxImages";
import TextProjektu from "./TextProjektu";
import { projektyData } from "./Data";

const MyProjects: React.FC = () => {
  const [aktualniProjektId, setAktualniProjektId] = useState<number>(
    projektyData[0].id
  );

  const projektRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this code runs only on the client side

    projektRefs.current = projektyData.map(() => null); // Reset refs array on mount

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(
              entry.target.getAttribute("data-id") || "0",
              10
            );
            setAktualniProjektId(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    projektRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projektRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const aktualniProjekt = projektyData.find(
    (projekt) => projekt.id === aktualniProjektId
  );

  return (
    <div className="flex md:mx-auto md:max-w-[2000px] md:flex-row">
      <div className="mb-8 w-1/2 md:mb-0 md:w-1/3">
        {aktualniProjekt && <TextProjektu projekt={aktualniProjekt} />}
      </div>
      <div className="color: blue w-2/3">
        {projektyData.map((projekt, index) => (
          <div
            key={projekt.id}
            ref={(el) => {
              projektRefs.current[index] = el;
            }}
            data-id={projekt.id}
            className="projekt-sekce"
          >
            <ParallaxImages projekty={[projekt]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
