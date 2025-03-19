import Link from "next/link";
import { FC } from "react";

interface ButtonLinkProps {
  href: string;
  text: string;
  colour?: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ href, text, colour }) => {
  let buttonClasses = "inline-block text-white rounded-full py-4 px-8 font-normal font-sans hover:scale-110 hover:bg-slate-900 transition-all";

  switch(colour) {
    case "secondary":
      buttonClasses += " bg-slate-700"
      break
    default:
      buttonClasses += " bg-teal-700"
      break
  }

  return (
    <Link className={buttonClasses} href={href}>{text}</Link>
  );
};

export default ButtonLink;