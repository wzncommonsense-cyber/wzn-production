import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyWzn from "./components/WhyWzn";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <WhyWzn />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
