// Předpokládá se, že je to soubor pages/home.tsx nebo podobně
import React from "react";
import Header from "./components/header/Header";
import Services from "./components/servicesSection/Services";
// import MyProjects from "./components/projects/MyProjects";

export default function Home() {
  return (
    <div>
      {/* <FadeInBlur />
      <FadeInSlideDown /> */}

      <Header />
      <Services />
      {/* <MyProjects /> */}
    </div>
  );
}
