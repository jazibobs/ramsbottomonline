import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Free consultations - Ramsbottom Online",
  description: "Arrange a free 30 minute consultation to discuss your business needs.",
};

export default function Consultation() {
	return (
    <>
      <Header 
        heading="Book a free consultation"
        subHeading="For a no obligation 30-minute chat about your website. Book an appointment using the form below."
        hideButton={true}
      />
      <ConsultationForm />
      <Footer />
    </>
  
  ) 
	  
	
};