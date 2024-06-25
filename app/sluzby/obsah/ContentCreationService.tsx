// soubor: components/ContentCreationService.tsx
import React from "react";
import Image from "next/image";
import ServicesData from "./ContentCreationServiceData"; // Doplnění cesty k importu si proveďte dle struktury vašeho projektu
import FadeInCards from "../../..//components/animations/FadeInCards"; // Import FadeInCards

const ContentCreationService: React.FC = () => {
  return (
    <div className="fade-in-container container mx-auto flex flex-wrap">
      <FadeInCards />
      {ServicesData.map((service) => (
        <div
          className="fade-in-card w-full p-2 sm:w-1/2 lg:w-1/4"
          key={service.id}
        >
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-center text-lg font-bold">{service.title}</h3>
              <p className="text-center">{service.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentCreationService;
