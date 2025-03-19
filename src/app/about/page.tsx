import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCta from "@/components/cta/ServiceCta";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About our business - Ramsbottom Online",
  description: "Web development services by Jared Rigby - a Ramsbottom based web programmer.",
};

export default function About() {
  return (
    <div className="ro-app overflow-x-hidden">
      <Header 
        heading="About Us" 
        subHeading="Expert web development services based in Holcombe Brook."
      />
      <div className="max-w-screen-lg m-auto px-8 py-16">
        <div className="font-sans prose">
          <h2>Welcome</h2>
          <p>Welcome to ramsbottom.online - your local partner to help get your business online.</p> 
          <p>Based in Ramsbottom, we are a passionate web development company founded and run by Jared Rigby.</p>
          <p>We specialize in creating bespoke, user-friendly websites that help businesses and individuals thrive online. Whether you&apos;re a small business looking to establish your digital presence or an organization seeking to enhance your online capabilities, we&apos;re here to bring your vision to life with creativity, precision, and a personal touch.</p>
          <p><Link href="/contact-us">Get in touch today</Link>, and let&apos;s create something amazing together!</p>
        </div>
      </div>

      <ServiceCta/>
      <Footer />
    </div>
  );
}
