import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/ServicesCards";
import Arbeitsweise from "@/components/Arbeitsweise";
import ReferenzenCarousel from "@/components/ReferenzenCarousel";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesCards />
      <Arbeitsweise />
      <ReferenzenCarousel />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
