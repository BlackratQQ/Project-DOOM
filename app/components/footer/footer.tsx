import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className="relative z-50 mt-auto w-full text-white">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-wrap justify-between">
          {/* Základní informace o společnosti */}
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold">VašeSpolečnost</h2>
            <p className="mt-2">Krátký popis nebo slogan vaší společnosti.</p>
            <p className="mt-2">Email: info@vasemail.cz</p>
            <p className="mt-2">Telefon: +420 123 456 789</p>
            <p className="mt-2">Adresa: Ulice, Město, PSČ</p>
          </div>

          {/* Navigační odkazy */}
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h3 className="mb-2 text-xl font-bold">Navigace</h3>
            <ul>
              <li className="mt-2">
                <Link href="/" className="hover:underline">
                  Domů
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/about" className="hover:underline">
                  O nás
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/services" className="hover:underline">
                  Služby
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact" className="hover:underline">
                  Kontakt
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/privacy-policy" className="hover:underline">
                  Ochrana osobních údajů
                </Link>
              </li>
            </ul>
          </div>

          {/* Sociální média */}
          <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-1/3">
            <h3 className="mb-2 text-xl font-bold">Sociální média</h3>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/Facebook_icon.svg"
                    alt="Facebook"
                    width={42}
                    height={42}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/LinkedIn_icon.svg"
                    alt="LinkedIn"
                    width={42}
                    height={42}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/Instagram_logo.svg"
                    alt="Instagram"
                    width={42}
                    height={42}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>© 2024 VašeSpolečnost. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
