import { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import AddOns from "@/components/AddOns";

export const metadata: Metadata = {
  title: "Services - Ramsbottom Online",
  description: "We provide a range of web development services to suit businesses of all sizes.",
};

export default function ServicesLanding() {
  return(
    <>
      <Header 
        heading="Our Services"
        subHeading="We offer a wide range of services to suit businesses of any size."
        bgClass="services"
      />
      <Services />
      <AddOns />
      <Footer />
    </>
  )
}