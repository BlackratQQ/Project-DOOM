import React from "react";
import Link from "next/link";
import Image from "next/image";

// Definice rozhraní pro props
interface ServiceCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  href: string; // Přidáme href prop
}

// Definice komponenty s typem props
const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  href, // Přidáme href prop
}) => {
  return (
    <Link href={href} passHref>
      <div className="card-container m-1 flex w-[340px] flex-col items-center justify-center gap-2.5 self-end rounded-2xl bg-backgroundColor p-5 text-center transition-shadow duration-300 hover:shadow-lg">
        <Image
          src={imageSrc}
          alt={altText}
          width={100}
          height={100}
          className="object-contain"
        />
        <h2 className="text-2xl font-bold text-primaryColor">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
