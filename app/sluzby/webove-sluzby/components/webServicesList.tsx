import React from "react";
import Image from "next/image";
import ServicesData from "./webServicesData";
import FadeInCards from "../../../../components/animations/FadeInCards";

interface WebServicesProps {
  className?: string;
}

const WebServicesList: React.FC<WebServicesProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex min-h-screen w-full items-center justify-center backdrop-blur-[20px]`}
    >
      <FadeInCards />
      <div className="flex flex-wrap justify-center px-[7%] py-[0]">
        {ServicesData.map((service) => (
          <div key={service.id} className="fade-in-card w-1/5 p-2">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="mb-2 w-full object-cover"
            />
            <h3 className="mb-1 text-center text-xl font-bold">
              {service.title}
            </h3>
            <p className="text-center">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebServicesList;
