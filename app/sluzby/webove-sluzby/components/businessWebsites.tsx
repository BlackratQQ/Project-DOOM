// soubor: components/WebServices.tsx
import Image from "next/image";
import Link from "next/link";

interface BusinessWebsitesProps {
  className?: string;
}

const BusinessWebsites: React.FC<BusinessWebsitesProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex w-full items-center justify-center backdrop-blur-[20px]`}
    >
      <div className="flex space-x-8 px-[7%] py-[5%]">
        {/* Levá část s obrázkem */}

        <div className="flex w-3/5 flex-col">
          <h2 className="section-heading text-left text-6xl font-bold">
            Business Websites
          </h2>
          <p className="mb-8 text-left leading-loose">
            Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem
            Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum
            Lorem Ipsum
          </p>
          <h4 className="mb-4 flex flex-wrap text-left">
            <span className="hashtag-glow mr-2 rounded-lg bg-black p-1">
              #modern
            </span>
            <span className="hashtag-glow mr-2 rounded-lg bg-black p-1">
              #professional
            </span>
            <span className="hashtag-glow mr-2 rounded-lg bg-black p-1">
              #responsive
            </span>
            <span className="hashtag-glow rounded-lg bg-black p-1">
              #dynamic
            </span>
          </h4>
        </div>
        <div className="w-2/5">
          <Image
            src="/Brain Cells.webp"
            alt="Webové služby"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessWebsites;
