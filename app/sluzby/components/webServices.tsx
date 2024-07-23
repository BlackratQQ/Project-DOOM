// soubor: components/WebServices.tsx
import Image from "next/image";
import Link from "next/link";

interface WebServicesProps {
  className?: string;
}

const WebServices: React.FC<WebServicesProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex min-h-screen w-full items-center justify-center backdrop-blur-[20px]`}
    >
      <div className="flex px-[7%] py-[0]">
        {/* Levá část s obrázkem */}

        <div className="flex w-3/5 flex-col justify-around space-y-4 p-5">
          <h1 className="section-heading mb-4 text-left text-6xl font-bold">
            Web Services
          </h1>
          <p className="mb-4 text-left leading-loose">
            Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem
            Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum
            Lorem Ipsum
          </p>
          <span className="flex items-center gap-2">
            <h3 className="section-heading text-left text-2xl font-bold">
              Zkušenosti:
            </h3>
            <h4 className="text-2xl font-bold">4+ let</h4>
          </span>
          <div className="mb-4 flex justify-start">
            <Link href="/sluzby/webove-sluzby">
              <button className="hover-shadow bg-white px-4 py-2 pb-3 pt-3 font-bold uppercase text-black">
                Zjistit více
              </button>
            </Link>
          </div>
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
            src="/path-to-your-image.jpg"
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

export default WebServices;
