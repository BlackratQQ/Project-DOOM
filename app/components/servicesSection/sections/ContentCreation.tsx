import React from "react";
import ServiceCard from "../ServiceCard"; // Importujeme ServiceCard

const Content = () => {
  return (
    <ServiceCard
      imageSrc="/Icons/Content Services.svg"
      altText="Vytváření Kontentu"
      href="/sluzby/obsah"
      title="Vytváření Kontentu"
      description="Poskytujeme profesionální tvorbu obsahu, která rezonuje s vaším cílovým publikem. Od blogových příspěvků po video obsah, pomáháme vám vyprávět váš příběh."
    />
  );
};

export default Content;
