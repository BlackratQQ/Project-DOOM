// soubor: components/AboutContentCreation.tsx
import React from "react";
import Image from "next/image";
import FadeInHashtags from "../../components/animations/FadeInHashtags";
import SlideInHeader from "../../components/animations/SlideInHeader";
import StaggeredFadeInText from "../../components/animations/StaggeredFadeInText";

interface AboutContentCreationProps {
  className?: string;
}

const AboutContentCreation: React.FC<AboutContentCreationProps> = () => {
  return (
    <div className="gradient-background3 flex min-h-[80vh] items-center px-[7%] py-[0]">
      Levá část s obrázkem
      <div className="flex w-3/5 flex-col justify-center space-y-4 p-5">
        <SlideInHeader />
        <h1 className="section-heading slide-in-header mb-4 text-left text-6xl font-bold">
          Obsah
        </h1>
        <StaggeredFadeInText
          text="Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum"
          className="mb-4 text-left leading-loose"
        />

        <FadeInHashtags>
          <h4 className="mb-4 flex flex-wrap text-left">
            <span className="hashtag-glow fade-in-hashtag mr-2 rounded-lg bg-black p-1">
              #modern
            </span>
            <span className="hashtag-glow fade-in-hashtag mr-2 rounded-lg bg-black p-1">
              #professional
            </span>
            <span className="hashtag-glow fade-in-hashtag mr-2 rounded-lg bg-black p-1">
              #responsive
            </span>
            <span className="hashtag-glow fade-in-hashtag rounded-lg bg-black p-1">
              #dynamic
            </span>
          </h4>
        </FadeInHashtags>
      </div>
      <div className="flex w-2/5 items-center justify-center">
        <Image
          src="/Brain Cells.webp"
          alt="Webové služby"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default AboutContentCreation;
