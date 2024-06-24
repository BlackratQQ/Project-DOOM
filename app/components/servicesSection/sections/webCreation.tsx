import React from "react";
import ServiceCard from "../serviceCard"; // Importujeme ServiceCard

const Content = () => {
  return (
    <ServiceCard
      imageSrc="/Icons/Content Services.svg"
      altText="Vytváření Kontentu"
      title="Tvorba webu"
      description="Poskytujeme profesionální tvorbu obsahu, která rezonuje s vaším cílovým publikem. Od blogových příspěvků po video obsah, pomáháme vám vyprávět váš příběh."
      href="/sluzby/webove-sluzby" // Přidáme href prop
    />
  );
};

export default Content;
