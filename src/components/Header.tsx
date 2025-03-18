import { FC } from "react";
import Link from "next/link";
import SiteTitle from "./SiteTitle";
import ButtonLink from "./ui/ButtonLink";

interface HeaderProps {
  heading: string;
  subHeading: string;
  bgClass?: string;
  hideButton?: boolean;
}

const Header: FC<HeaderProps> = ({ heading, subHeading, bgClass, hideButton }) => {

  const headingClasses = "site-header " + (bgClass || "")

  return (
    <header className={headingClasses}>
      <div className="bg-gradient-to-r from-gray-100/95  via-slate-200/95 to-slate-200/50">
        <div className="max-w-screen-xl m-auto p-8 flex gap-8 items-center justify-between">
          <SiteTitle />
          <nav>
            <ul className="flex gap-8 font-sans font-semibold items-center bg-white/80 rounded-full py-2 pr-2 pl-12">
              <li>
                <Link className="inline-block hover:scale-110 transition-transform" href="/">Home</Link>
              </li>
              <li>
                <Link className="inline-block hover:scale-110 transition-transform" href="/about">About</Link>
              </li>
              <li>
                <Link className="inline-block hover:scale-110 transition-transform" href="/services">Services</Link>
              </li>
              <li>
                <Link className="inline-block hover:scale-110 transition-transform" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="inline-block hover:scale-110 transition-transform" href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <ButtonLink href="/free-consultation" text="Get started" />
              </li>
            </ul>
          </nav>
        </div>
        <div className={`header-content max-w-screen-xl m-auto p-8 pb-16 flex gap-8 items-center min-h-[400px]`}>
          <div className="w-full lg:w-5/12">
            <h1 className="text-5xl mb-4">{heading}</h1>
            <p className="font-sans text-slate-800 mb-12">{subHeading}</p>
            {!hideButton && (
              <ButtonLink href="/free-consultation" text="Arrange a free consultation" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;