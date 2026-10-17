import { Contact } from "@/components/landing/Contact";
import { DigitalWorkers } from "@/components/landing/DigitalWorkers";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Industries } from "@/components/landing/Industries";
import { Navbar } from "@/components/landing/Navbar";
import { Problem } from "@/components/landing/Problem";
import { Process } from "@/components/landing/Process";
import { Results } from "@/components/landing/Results";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { Security } from "@/components/landing/Security";
import { Services } from "@/components/landing/Services";
import { Solutions } from "@/components/landing/Solutions";

// Server Component: sólo ensambla secciones. Lo interactivo (navbar, diagramas
// animados, formulario) vive en sus propios componentes "use client".
export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DigitalWorkers />
        <Problem />
        <HowItWorks />
        <Solutions />
        <Industries />
        <Results />
        <Security />
        <Ecosystem />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
