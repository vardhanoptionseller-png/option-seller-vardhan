import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advisory from "@/components/Advisory";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import IIFLPartnership from "@/components/IIFLPartnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Advisory />
      <SubscriptionPlans />
      <IIFLPartnership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
