import React from "react";
import Image from "next/image";
import Portrait from "../../public/Portrait.webp";

const PortraitImage = () => {
  return (
    <div className="absolute inset-0 z-[-1] fadeInElement">
      <Image
        src={Portrait}
        alt="Popis gradientového obrázku"
        priority={true}
        className="FadeInBlur absolute bottom-0 h-auto w-full object-fill md:right-0 md:w-[75%] lg:w-[50%]"
      />
    </div>
  );
};

export default PortraitImage;
