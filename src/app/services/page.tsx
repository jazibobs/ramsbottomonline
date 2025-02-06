import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import AddOns from "@/components/AddOns";

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