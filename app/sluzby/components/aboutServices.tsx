// components/AboutServices.tsx
import React from "react";
import SlideFadeInBox from "@/app/components/animations/slideFadeInBox";

const AboutServices: React.FC = () => {
  return (
    <div className="gradient-background2 relative z-40 flex items-center justify-center pt-36">
      {/* <SlideFadeInBox initialY={400} bounceY={-100}> */}
      <div className="px-[7%] py-[0] text-center">
        <h1 className="mb-4 text-8xl font-bold uppercase text-white">
          <span className="section-heading">Praktická řešení</span> pro vaše
          <span className="section-heading"> online projekty</span>
        </h1>

        <p className="text-4xl">
          Zde se dozvíte více informací o širokém spektru našich služeb, které
          nabízíme. Naše služby zahrnují vše od web designu, přes marketing až
          po podporu a údržbu.
        </p>
      </div>
      {/* </SlideFadeInBox> */}
    </div>
  );
};

export default AboutServices;
