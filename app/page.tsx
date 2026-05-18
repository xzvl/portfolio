import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Ecosystem />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
