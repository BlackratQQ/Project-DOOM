"use client";

import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    // Nezapomeňte zaregistrovat ScrollTrigger, pokud jste tak již neučinili
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".navbar", // Třída vaší navigační lišty
      {
        backgroundColor: "rgba(0, 0, 0, 0)", // Počáteční barva pozadí (transparentní)
        backdropFilter: "blur(0px)", // Počáteční stav bez rozostření
      },
      {
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Konečná barva pozadí (černá s průhledností 30%)
        backdropFilter: "blur(10px)", // Konečný stav mléčného skla
        duration: 0.5, // Délka trvání animace v sekundách
        ease: "none", // Typ easingu
        scrollTrigger: {
          trigger: ".navbar", // Element, který spouští animaci
          start: "top+=100", // Startovací bod 100px pod horním okrajem viewportu
          end: "bottom top", // Koncový bod animace
          toggleActions: "play none none reset", // Chování animace při scrollu
        },
      },
    );
  }, []);

  return null; // Tato komponenta nevrací žádný vizuální výstup
};

export default Navbar;
