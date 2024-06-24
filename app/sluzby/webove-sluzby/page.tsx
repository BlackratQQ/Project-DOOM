"use client";

import { useEffect, useState, useRef } from "react";
import WebServicesList from "./components/webServicesList";
import BusinessWebsites from "./components/businessWebsites";
import ECommerceWebsites from "./components/eCommerceWebsites";
import BlogContentWebsites from "./components/blogContentWebsites";
import EducationLearningWebsites from "./components/educationLearningWebsites";
import MainContent from "./components/mainContent";
import useLenis from "../../hooks/useLenis";

const ScrollPanel = () => {
  useLenis(); // Použití Lenis hooku

  const businessWebsitesRef = useRef<HTMLDivElement>(null);
  const eCommerceWebsitesRef = useRef<HTMLDivElement>(null);
  const blogContentWebsitesRef = useRef<HTMLDivElement>(null);
  const educationLearningWebsitesRef = useRef<HTMLDivElement>(null);
  const [lastActivePanel, setLastActivePanel] = useState<number>(-1);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let maxFoundIndex = -1;

      const panels = [
        businessWebsitesRef,
        eCommerceWebsitesRef,
        blogContentWebsitesRef,
        educationLearningWebsitesRef,
      ];
      panels.forEach((ref, index) => {
        if (ref.current && y > ref.current.offsetTop) {
          maxFoundIndex = index;
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
      <MainContent />
      <WebServicesList />
      <div
        ref={businessWebsitesRef}
        className={`panel-webservices panel-red ${
          lastActivePanel >= 0 ? "panel-fixed" : ""
        }`}
      >
        <BusinessWebsites
          className={`panel-inner ${lastActivePanel >= 0 ? "panel-fixed" : ""}`}
        />
      </div>
      <div
        ref={eCommerceWebsitesRef}
        className={`panel-webservices panel-orange ${
          lastActivePanel >= 1 ? "panel-fixed" : ""
        }`}
      >
        <ECommerceWebsites
          className={`panel-inner ${lastActivePanel >= 1 ? "panel-fixed" : ""}`}
        />
      </div>
      <div
        ref={blogContentWebsitesRef}
        className={`panel-webservices panel-orange ${
          lastActivePanel >= 2 ? "panel-fixed" : ""
        }`}
      >
        <BlogContentWebsites
          className={`panel-inner ${lastActivePanel >= 2 ? "panel-fixed" : ""}`}
        />
      </div>
      <div
        ref={educationLearningWebsitesRef}
        className={`panel-webservices panel-orange ${
          lastActivePanel >= 3 ? "panel-fixed" : ""
        }`}
      >
        <EducationLearningWebsites
          className={`panel-inner ${lastActivePanel >= 3 ? "panel-fixed" : ""}`}
        />
      </div>
    </div>
  );
};

export default ScrollPanel;
