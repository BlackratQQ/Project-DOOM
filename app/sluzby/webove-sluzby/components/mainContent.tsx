// soubor: components/WebServices.tsx
import Image from "next/image";
import SlideFadeIn from "../../../../components/animations/SlideFadeInBox";
import FadeInBox from "../../../../components/animations/FadeInBox";
import FadeInHashTags from "../../../../components/animations/FadeInHashtags";

interface MainContentProps {
  className?: string;
}

const MainContent: React.FC<MainContentProps> = ({ className }) => {
  return (
    <div className="flex min-h-screen items-center space-x-8 px-[7%] py-[0]">
      <div className="flex w-1/2 flex-col">
        <Image
          src="/Brain Cells.webp"
          alt="Webové služby"
          width={200}
          height={150}
          layout="responsive"
        />
        <SlideFadeIn initialY={50} className="heading-second">
          <h2 className="mt-4 text-6xl font-bold">SECOND HEADING</h2>
        </SlideFadeIn>
      </div>
      <div className="w-1/2">
        <div className="flex h-full flex-col justify-center">
          <SlideFadeIn initialX={400} className="heading-main">
            <h1 className="section-heading text-8xl font-bold">Main Content</h1>
          </SlideFadeIn>
          <FadeInBox startDelay={1}>
            <p className="mb-8 mt-4 text-left leading-loose">
              Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem
              Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum
              Lorem Ipsum
            </p>
          </FadeInBox>
          <FadeInHashTags startDelay={1} delayIncrement={0.3}>
            <h4 className="mb-4 flex flex-wrap text-left">
              <span className="fade-in-hashtag hashtag-glow mr-2 rounded-lg bg-black p-1">
                #modern
              </span>
              <span className="fade-in-hashtag hashtag-glow mr-2 rounded-lg bg-black p-1">
                #professional
              </span>
              <span className="fade-in-hashtag hashtag-glow mr-2 rounded-lg bg-black p-1">
                #responsive
              </span>
              <span className="fade-in-hashtag hashtag-glow rounded-lg bg-black p-1">
                #dynamic
              </span>
            </h4>
          </FadeInHashTags>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
