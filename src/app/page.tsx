import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/motion/Preloader";
import { Analytics } from "@/components/sections/Analytics";
import { AskKarva } from "@/components/sections/AskKarva";
import { Deals } from "@/components/sections/Deals";
import { DemoForm } from "@/components/sections/DemoForm";
import { Differentiation } from "@/components/sections/Differentiation";
import { DocumentAI } from "@/components/sections/DocumentAI";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { FAQ } from "@/components/sections/FAQ";
import { Financing } from "@/components/sections/Financing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ForManagers } from "@/components/sections/ForManagers";
import { ForSales } from "@/components/sections/ForSales";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Integrations } from "@/components/sections/Integrations";
import { Inventory } from "@/components/sections/Inventory";
import { KarvaAI } from "@/components/sections/KarvaAI";
import { Overview } from "@/components/sections/Overview";
import { ProductSystem } from "@/components/sections/ProductSystem";
import { ValueProps } from "@/components/sections/ValueProps";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />

        {/* Sin scroll-jacking entre secciones: cada una revela su propio
            contenido con `Reveal`/`Stagger` al entrar al viewport (one-shot),
            como workos.com/atlas. El "wow" vive en las interacciones de cada
            mockup (tabs en vivo, carrusel, pills), no en un pin de sección. */}
        <ValueProps />
        <KarvaAI />
        <Overview />
        <ForSales />
        <ForManagers />
        <Inventory />
        <Deals />
        <DocumentAI />
        <Financing />

        <AskKarva />

        <HowItWorks />
        <Integrations />
        <Analytics />
        <ProductSystem />
        <Differentiation />
        <EarlyAccess />
        {/* El formulario va justo después de Early Access, no al final: es el
            destino de todos los "Solicitar demo" de la página. */}
        <DemoForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
