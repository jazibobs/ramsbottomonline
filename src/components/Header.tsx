"use client"

import { FC, useState } from "react";
import Link from "next/link";
import Head from 'next/head';
import SiteTitle from "./SiteTitle";
import ButtonLink from "./ui/ButtonLink";

interface HeaderProps {
  heading: string;
  subHeading: string;
  bgClass?: string;
  hideButton?: boolean;
}

const Header: FC<HeaderProps> = ({ heading, subHeading, bgClass, hideButton }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const headingClasses = "site-header " + (bgClass || "");
  const navClasses = `absolute top-0 left-0 w-full h-full z-40 transition-transform duration-500 lg:relative lg:translate-x-0 lg:w-auto ${
    navOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <header className={headingClasses}>
      <Head>
        <link rel="preload" as="image" href="peel-monument-styled.webp" />
      </Head>
      <div className="bg-gradient-to-r from-gray-100/95 via-slate-200/95 to-slate-200/50">
        <div className="max-w-screen-xl m-auto p-8 flex gap-8 items-center justify-between">
          <SiteTitle />
          <button
            className="lg:hidden relative z-50 text-white bg-slate-700 rounded-full w-12 h-12 shadow-md flex items-center justify-center hover:bg-slate-900 hover:scale-105 transition-all"
            onClick={toggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <nav className={navClasses}>
            <ul className="flex flex-col lg:flex-row text-xl lg:text-base w-full lg:w-auto h-full lg:h-auto gap-8 font-sans font-semibold items-center justify-center bg-white lg:bg-white/80 lg:rounded-full py-4 lg:py-2 px-4 lg:pr-2 lg:pl-12">
              <li>
                <Link
                  className="inline-block hover:scale-110 transition-transform"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:scale-110 transition-transform"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:scale-110 transition-transform"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:scale-110 transition-transform"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:scale-110 transition-transform"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <ButtonLink href="/free-consultation" text="Get started" />
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`header-content max-w-screen-xl m-auto p-8 pb-16 flex gap-8 items-center min-h-[400px]`}
        >
          <div className="w-full lg:w-5/12">
            <h1 className="text-5xl mb-4">{heading}</h1>
            <p className="font-sans text-slate-800 mb-12">{subHeading}</p>
            {!hideButton && (
              <ButtonLink
                href="/free-consultation"
                text="Arrange a free consultation"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;