import React from "react";
import Image from "next/image";

const Info: React.FC = ({}) => {
  return (
    <div className="min-h-screen p-4">
      {/* Paragraph above the split content */}
      <div className="mb-8">
        <p>
          Toto je odstavec nad rozdělením obsahu. Můžete sem vložit jakýkoliv
          úvodní text, který bude umístěn nad dvěma částmi rozděleného obsahu.
        </p>
      </div>

      {/* Split content */}
      <div className="flex">
        <div className="flex w-1/3 flex-col items-center justify-center p-4 text-white">
          {/* Left Content */}
          <h1>Nadpis</h1>
          <p>
            Toto je levý obsah. Můžete sem vložit text, obrázky nebo cokoliv
            jiného, co potřebujete.
          </p>
          <Image
            src="/Brain Cells.webp"
            alt="Popis obrázku"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="flex w-2/3 flex-col items-center p-4 text-right text-white">
          {/* Right Content */}
          <h1 className="w-full text-center">Nadpis</h1>
          <p>
            Toto je pravý obsah. Můžete sem vložit text, obrázky nebo cokoliv
            jiného, co potřebujete.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
