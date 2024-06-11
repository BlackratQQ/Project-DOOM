// soubor: components/NumberInfo.tsx
import React from "react";

interface NumberInfoProps {}

const NumberInfo: React.FC<NumberInfoProps> = () => {
  return (
    <div className="flex max-w-xl justify-around py-12">
      <div className="relative w-1/3 text-center">
        <div className="text-4xl font-bold">65</div>
        <div className="mt-2 text-xl">Klienti</div>
      </div>
      <div className="relative w-1/3 text-center before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        <div className="text-4xl font-bold">65</div>
        <div className="mt-2 text-xl">Projekty</div>
      </div>
      <div className="relative w-1/3 text-center before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        <div className="text-4xl font-bold">65</div>
        <div className="mt-2 text-xl">Roky</div>
      </div>
    </div>
  );
};

export default NumberInfo;
