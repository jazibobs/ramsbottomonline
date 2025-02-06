import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Support from "@/components/Support";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <div className="ro-app overflow-x-hidden">
      <Header 
        heading="Getting Rammy Online" 
        subHeading="Ramsbottom online provides web development services to help local Rammy businesses build their online presence."
        bgClass="home"
      />
      <Support />
      <Services />
      <Benefits />
      <Footer />
    </div>
  );
}
