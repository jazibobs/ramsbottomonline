import Link from "next/link";
import { FC } from "react";

interface ButtonLinkProps {
  href: string;
  text: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ href, text }) => {
  return (
    <Link className="inline-block text-white bg-teal-700 rounded-full py-4 px-8 font-normal font-sans hover:scale-110 hover:bg-slate-900 transition-all" href={href}>{text}</Link>
  );
};

export default ButtonLink;