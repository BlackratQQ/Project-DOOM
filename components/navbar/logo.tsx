"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import smallLogo from "/public/VK-Logo-Small.webp";

const Logo: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <div className="absolute left-0 top-0 z-50">
      <nav className="p-2 text-white">
        <div className="flex items-center justify-start pr-8 md:mx-auto md:max-w-[2000px]">
          <a
            href="/"
            onClick={handleClick}
            className="logo-container flex cursor-pointer items-center"
          >
            <Image
              src={smallLogo}
              alt="Logo"
              width={isScrolled ? 50 : 100} // Změna velikosti loga při scrollování
              height={isScrolled ? 50 * 0.5 : 100 * 0.5} // Zachování poměru stran
              sizes="(max-width: 768px) 50px, 100px"
              className="transition-all duration-300 ease-in-out"
              style={{
                width: isScrolled ? "50px" : "100px",
                height: "auto", // Zachování poměru stran
              }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Logo;
