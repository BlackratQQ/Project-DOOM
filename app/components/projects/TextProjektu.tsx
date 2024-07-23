import React from "react";
import { ProjektData } from "./Data";
import FadeInText from "../animations/DynamicTextAnimation";

interface TextProjektuProps {
  projekt: ProjektData;
}

const TextProjektu: React.FC<TextProjektuProps> = ({ projekt }) => {
  return (
    <div className="sticky top-16 ml-10 h-screen flex flex-col justify-between">
      <FadeInText
        text={`0${projekt.projectNumber}`}
        className="absolute top-10 text-white text-4xl"
      />
      <div className="flex-1 flex flex-col justify-center p-2 ml-10">
        <FadeInText
          text={projekt.title}
          className="text-6xl font-bold text-white mb-2 uppercase"
        />
        <FadeInText
          text={projekt.techStack}
          className="text-white mb-2 text-2xl font-bold"
        />
        <FadeInText text={projekt.whatIsIt} className="text-white mb-2" />
      </div>
      <FadeInText
        text={projekt.text}
        className="absolute bottom-10 p-2 text-white text-4xl"
      />
    </div>
  );
};

export default TextProjektu;
