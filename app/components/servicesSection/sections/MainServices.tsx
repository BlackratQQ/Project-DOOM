import React from "react";
import Link from "next/link";

interface MainServicesProps {
  titlePart1: string; // První část nadpisu
  titlePart2: string; // Druhá část nadpisu
  titleColor1: string; // Barva první části nadpisu
  text: string; // Text pod nadpisem
  buttonText: string; // Text na tlačítku
  buttonHref: string; // URL odkaz pro tlačítko
}

const MainServices: React.FC<MainServicesProps> = ({
  titlePart1,
  titlePart2,
  titleColor1,
  text,
  buttonText,
  buttonHref,
}) => {
  return (
    <div className="rounded-lg p-6 shadow-md">
      <h2 className="mb-4 text-5xl font-bold">
        <span style={{ color: titleColor1 }}>{titlePart1}</span>
        <br />
        <span className="section-heading">{titlePart2}</span>
      </h2>
      <p className="mb-4">{text}</p>

      <Link href={buttonHref} passHref>
        <button className="hover-shadow bg-white px-4 py-2 pb-3 pt-3 font-bold uppercase text-black">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default MainServices;
