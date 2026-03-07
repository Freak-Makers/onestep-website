import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Capabilities from "@/components/home/Capabilities";
import HomePortfolio from "@/components/home/HomePortfolio";
import Process from "@/components/home/Process";
import Performance from "@/components/home/Performance";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Capabilities />
        <HomePortfolio />
        <Process />
        <Performance />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
