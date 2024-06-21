// components/Header/InfoSection.tsx
import React, { Fragment } from "react";
//import CallToActionButton from "./CallToActionButton"; // Předpokládám správnou cestu k importu

const InfoSection = () => {
  return (
    <Fragment>
      <div className="z-10 max-w-2xl pb-40 pt-0 text-center text-white md:ml-10 md:pt-20 md:text-left">
        <p className="info-section-animated text-3xl font-bold lg:text-5xl">
          Zdravím,
        </p>
        <h1 className="info-section-animated-2 pt-5 text-4xl font-bold text-red-600 md:text-6xl">
          [VOJTĚCH KOCHTA]
        </h1>
        <p className="info-section-animated-3 mt-4 text-2xl lg:text-3xl">
          a jsem <span className="text-blue-500">IT Developer 123</span>.
        </p>
        <p className="info-section-animated-4 text-base drop-shadow lg:text-lg">
          Specializuji se na webový vývoj a umělou inteligenci. Specializuji se
          na vytváření intuitivních webů a aplikací, které jsou šité na míru
          potřebám klientů. Rád pracuji jak na individuálních projektech, tak v
          malých týmech, kde mohu uplatnit svou kreativitu a technickou znalost.
        </p>

        <div className="info-section-animated-5 flex justify-center">
          {/* <CallToActionButton /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default InfoSection;
