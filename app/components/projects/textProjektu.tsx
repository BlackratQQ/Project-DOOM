// TextProjektu.tsx
import React from "react";
import { ProjektData } from "./data"; // aktualizujte cestu podle umístění vašeho souboru
import FadeInText from "../animations/dynamicTextAnimation"; // aktualizujte cestu podle umístění vaší komponenty

interface TextProjektuProps {
  projekt: ProjektData;
}

const TextProjektu: React.FC<TextProjektuProps> = ({ projekt }) => {
  return (
    <div className="sticky top-16 ml-10 flex h-screen flex-col justify-between">
      <FadeInText
        text={`0${projekt.projectNumber}`}
        className="absolute top-10 text-4xl text-white"
      />
      <div className="ml-10 flex flex-1 flex-col justify-center p-2">
        <FadeInText
          text={projekt.title}
          className="mb-2 text-xl font-bold uppercase text-white md:text-6xl"
        />
        <FadeInText
          text={projekt.techStack}
          className="mb-2 text-xl font-bold text-white md:text-2xl"
        />
        <FadeInText text={projekt.whatIsIt} className="mb-2 text-white" />
      </div>
      <FadeInText
        text={projekt.text}
        className="absolute bottom-20 p-2 text-xl text-white md:text-4xl"
      />
    </div>
  );
};

export default TextProjektu;
