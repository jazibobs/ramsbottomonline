import PricingTable from "@/components/cta/PricingTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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