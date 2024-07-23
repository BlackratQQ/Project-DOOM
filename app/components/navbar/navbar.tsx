// components/Navbar.tsx

"use client";

import React, { useState, useEffect } from "react";
import MenuItems from "./menuItems";
import Logo from "./logo";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full h-16 transition-all duration-700 ${
        scrolled
          ? "bg-black/50 bg-opacity-50 backdrop-blur-md backdrop-filter"
          : "bg-transparent"
      }`}
    >
      <div className="relative container mx-auto flex justify-between items-center h-full">
        <Logo />
        <MenuItems />
      </div>
    </div>
  );
};

export default Navbar;
