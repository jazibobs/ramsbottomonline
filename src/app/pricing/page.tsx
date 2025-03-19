import type { Metadata } from "next";
import PricingTable from "@/components/cta/PricingTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pricing - Ramsbottom Online",
  description: "We offer a wide range of price points to suit businesses of all sizes.",
};

export default function Pricing() {
  return (
    <div className="ro-app overflow-x-hidden">
      <Header 
        heading="Pricing" 
        subHeading="We offer a range of services to suit every budget."
      />
      <PricingTable />
      <Footer />
    </div>
  )
}