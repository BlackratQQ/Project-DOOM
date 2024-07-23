import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const MenuItems: React.FC = () => {
  return (
    <div className="absolute right-0 top-0 z-50 flex h-full items-center">
      <nav className="navbar text-white">
        <div className="mx-auto flex h-full items-center justify-end pr-8 md:mx-auto md:max-w-[2000px]">
          <div className="flex gap-4">
            <Link href="/about">
              <div className="cursor-pointer text-white transition duration-300 hover:text-[#237c78]">
                O nás
              </div>
            </Link>
            <Link href="/sluzby">
              <div className="cursor-pointer text-white transition duration-300 hover:text-[#237c78]">
                Služby
              </div>
            </Link>
            <ScrollLink
              to="kontakt"
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer text-white transition duration-300 hover:text-[#237c78]"
            >
              Kontakt
            </ScrollLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuItems;
