// soubor: components/InfoSection.tsx
import React from "react";
import SequentialFadeIn from "../../../components/animations/SequentialFadeIn";

const InfoSection: React.FC = () => {
  return (
    <div className="gradient-background4">
      <SequentialFadeIn className="container mx-auto px-4 pb-32">
        {/* První řádek */}
        <div className="sequential-fade-in-item w-full text-center">
          <h2 className="section-heading text-4xl font-black uppercase">
            Proč já
          </h2>
        </div>

        {/* Druhý řádek */}
        <div className="sequential-fade-in-item w-full text-center">
          <p>
            Here are some reasons why you should choose ASites for you Content
            Creation and Copywriting.
          </p>
        </div>

        {/* Třetí řádek */}
        <div className="sequential-fade-in-item flex justify-center">
          <div className="w-[500px] p-4 text-right">
            <div className="pb-8 text-center">
              <h2 className="text-3xl font-black uppercase text-white">
                Vytváření obsahu
              </h2>
            </div>
          </div>

          <div className="w-[500px] p-4 text-left">
            <div className="pb-8 text-center">
              <h2 className="text-3xl font-black uppercase text-white">
                Copywriting
              </h2>
            </div>
          </div>
        </div>

        {/* Čtvrtý řádek */}
        <div className="sequential-fade-in-item flex justify-center">
          <div className="w-[500px] p-4 text-right">
            <hr />
            <div className="fade-in-slide-down-item">
              <h3 className="section-heading text-2xl font-black uppercase">
                NAPIS 1
              </h3>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <hr />
            <div className="fade-in-slide-down-item">
              <h3 className="section-heading text-2xl font-black uppercase">
                NAPIS 2
              </h3>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <hr />
            <div className="fade-in-slide-down-item">
              <h3 className="section-heading text-2xl font-black uppercase">
                NAPIS 3
              </h3>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>
          </div>

          <hr className="h-24" />

          <div className="w-[500px] p-4 text-left">
            <hr />
            <div className="fade-in-slide-down-item">
              <h3 className="section-heading text-2xl font-black uppercase">
                NAPIS 4
              </h3>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <hr />
            <div className="fade-in-slide-down-item">
              <h3 className="section-heading text-2xl font-black uppercase">
                NAPIS 5
              </h3>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <hr />
            <div className="fade-in-slide-down-item">
              <h3 className="section-heading text-2xl font-black uppercase">
                NAPIS 6
              </h3>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </SequentialFadeIn>
    </div>
  );
};

export default InfoSection;
