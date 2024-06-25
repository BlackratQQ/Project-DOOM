"use client";

import React, { useState, useEffect, useRef } from "react";
import ParallaxImages from "./ParallaxImages";
import TextProjektu from "./TextProjektu";
import { projektyData } from "./Data";

const MyProjects: React.FC = () => {
  const [aktualniProjektId, setAktualniProjektId] = useState<number>(
    projektyData[0].id
  );

  // Toto je správný způsob, jak inicializovat refs pro použití s DOM elementy
  const projektRefs = projektyData.map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
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

    projektRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      projektRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const aktualniProjekt = projektyData.find(
    (projekt) => projekt.id === aktualniProjektId
  );

  return (
    <div className="flex flex-wrap md:mx-auto md:max-w-[2000px]">
      <div className="w-full md:w-1/2">
        {aktualniProjekt && <TextProjektu projekt={aktualniProjekt} />}
      </div>
      <div className="w-full md:w-1/2 ">
        {projektyData.map((projekt, index) => (
          <div
            key={projekt.id}
            ref={projektRefs[index]}
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
