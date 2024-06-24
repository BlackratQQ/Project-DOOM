// components/Header/GradientImage.tsx
import React from "react";
import Image from "next/image";
import gradientImageSrc from "../../../public/Gradient.webp";

const GradientImage = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Image
        src={gradientImageSrc}
        alt="Popis gradientového obrázku"
        priority={true}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default GradientImage;
