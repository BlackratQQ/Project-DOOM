"use client";

import { useEffect, useState, useRef } from "react";
import WebServices from "./components/webServices";
import ContentCreation from "./components/contentCreation";
import BrandIdentityDesign from "./components/brandIdentityDesign";
import AboutServices from "./components/aboutServices";

import useScrollPosition from "../hooks/useScrollPosition";
import useLenis from "../hooks/useLenis";
// import SEO from "./SEO";

const ScrollPanel = () => {
  useLenis();
  useScrollPosition();

  const webServicesRef = useRef<HTMLDivElement>(null);
  const contentCreationRef = useRef<HTMLDivElement>(null);
  const brandIdentityDesignRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const [lastActivePanel, setLastActivePanel] = useState<number>(-1);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let maxFoundIndex = -1; // Počáteční hodnota nastavena na -1

      const panels = [
        webServicesRef,
        contentCreationRef,
        brandIdentityDesignRef,
        seoRef,
      ];
      panels.forEach((ref, index) => {
        if (ref.current) {
          const panelTop = ref.current.offsetTop;
          // Změna podmínky na 'y > panelTop', aby se 'maxFoundIndex' aktualizoval pouze pokud je uživatel pod začátkem panelu
          if (y > panelTop) {
            maxFoundIndex = index;
          }
        }
      });

      if (maxFoundIndex !== lastActivePanel) {
        setLastActivePanel(maxFoundIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastActivePanel]);

  return (
    <div>
      <AboutServices />
      <div
        ref={webServicesRef}
        className={`panel-webservices ${
          lastActivePanel >= 0 ? "panel-fixed" : ""
        }`}
      >
        <WebServices
          className={`panel-inner ${lastActivePanel >= 0 ? "panel-fixed" : ""}`}
        />
      </div>
      <div
        ref={contentCreationRef}
        className={`panel-webservices ${
          lastActivePanel >= 1 ? "panel-fixed" : ""
        }`}
      >
        <ContentCreation
          className={`panel-inner ${lastActivePanel >= 1 ? "panel-fixed" : ""}`}
        />
      </div>
      <div
        ref={brandIdentityDesignRef}
        className={`panel-webservices ${
          lastActivePanel >= 2 ? "panel-fixed" : ""
        }`}
      >
        <BrandIdentityDesign
          className={`panel-inner ${lastActivePanel >= 2 ? "panel-fixed" : ""}`}
        />
      </div>

      {/*<div
        ref={seoRef}
        className={`panel-webservices panel-green ${lastActivePanel >= 3 ? "panel-fixed" : ""}`}
      >
        <SEO
          className={`panel-inner ${lastActivePanel >= 3 ? "panel-fixed" : ""}`}
        />
      </div> */}
    </div>
  );
};

export default ScrollPanel;
