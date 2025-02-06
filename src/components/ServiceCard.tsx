import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface ServiceCardProps {
  href: string;
  text: string;
  blurb: string;
  icon: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ href, text, blurb, icon }) => {
  return (
    <Link href={href} className="bg-white rounded-lg p-4 shadow-lg w-96 h-80 flex flex-col justify-between flex-shrink-0 hover:scale-110 transition-all">
      <div>
        <Image src={icon} alt="" width={64} height={64} />
      </div>
      <div>
        <h3 className="text-2xl text-slate-800 mb-4">{text}</h3>
        <p className="font-sans text-slate-600 mb-6 min-h-24">{blurb}</p>
        <p className="font-sans text-sm uppercase text-teal-700 font-semibold">Learn more</p>
      </div>
    </Link>
  )
}

export default ServiceCard;