import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCta from "@/components/cta/ServiceCta";
import Image from "next/image";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "About our business - Ramsbottom Online",
  description: "Web development services by Jared Rigby - a Ramsbottom based web programmer.",
};

export default function About() {
  return (
    <div className="ro-app overflow-x-hidden">
      <Header 
        heading="Looking for MTD Digital?" 
        subHeading="You're in the right place!"
      />
      <div className="max-w-screen-lg m-auto px-8 py-16 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-2/3 font-sans prose">
          <h2>Welcome back</h2>
          <p>Ramsbottom Online is the new name for MTD Digital.</p>
          <p>After the best part of a decade away, Jared has returned to Ramsbottom and is ready to support your business needs.</p>
          <p>Take a look at our services below and reach out if there is anything we can support you with.</p>
        </div>
        <Image src="/jared.jpg" alt="Jared Rigby" width={910} height={906} className="w-full lg:w-1/3 h-auto rounded-lg object-cover mt-16"/>
      </div>
      <Services />
      <ServiceCta/>
      <Footer />
    </div>
  );
}
