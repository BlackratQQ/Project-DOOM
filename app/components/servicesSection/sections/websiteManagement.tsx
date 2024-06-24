import React from "react";
import ServiceCard from "../serviceCard"; // Importujeme ServiceCard

const Seo = () => {
  return (
    <ServiceCard
      imageSrc="/Icons/Seo.svg"
      altText="Správa webu"
      href="/sluzby/webove-sluzby"
      title="Správa webu"
      description="Zvyšujeme viditelnost vašeho webu na vyhledávačích, což zlepšuje vaše šance být nalezen novými zákazníky. Naše SEO strategie jsou zaměřeny na dosahování trvalých výsledků."
    />
  );
};

export default Seo;
