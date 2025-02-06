import Image from "next/image";
import { FC } from "react";

interface SingleBenefitProps {
  text: string;
}

const SingleBenefit: FC<SingleBenefitProps> = ({ text }) => {
  return (
    <div className="w-full md:w-1/2 flex gap-4 items-top mb-8 pr-8">
      <Image src="/icons/tick.svg" alt="" width={48} height={48} />
      <div className="font-sans">{text}</div>
    </div>
  );
};

export default SingleBenefit;