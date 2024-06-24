import React from "react";
import WebService from "./sections/WebCreation";
import Seo from "./sections/WebsiteManagement";
import Content from "./sections/ContentCreation";
import MainServices from "./sections/MainServices";
// import FadeInBox from "../animations/FadeInBox";

const Services: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center md:w-[37%] md:flex-row">
        <div className="flex flex-col items-center justify-center">
          {/* <FadeInBox startDelay={0.2}> */}
          <MainServices
            titlePart1="Naše"
            titlePart2="Služby"
            titleColor1="var(--primary-heading-color)"
            text="Toto jsou naše klíčové služby, které nabízíme s mnohaletými zkušenostmi."
            buttonText="Objevit vše"
            buttonHref="/sluzby" // Zde nastavíte cíl odkazu
          />
          {/* </FadeInBox> */}

          {/* <FadeInBox startDelay={0.1}> */}
          <WebService />
          {/* </FadeInBox> */}
        </div>
        <div className="mb-5 flex flex-col justify-around gap-12">
          {/* <FadeInBox startDelay={0.4}> */}
          <Seo />
          {/* </FadeInBox> */}
          {/* <FadeInBox startDelay={0.3}> */}
          <Content />
          {/* </FadeInBox> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
