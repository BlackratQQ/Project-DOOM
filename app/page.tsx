// Předpokládá se, že je to soubor pages/home.tsx nebo podobně
import React from "react";
import Header from "./components/header/header";
import Services from "./components/servicesSection/services";
import MyProjects from "./components/projects/myProjects";

export default function Home() {
  return (
    <div>
      {/* <FadeInBlur />
      <FadeInSlideDown /> */}

      <Header />
      <Services />
      <MyProjects />
    </div>
  );
}
