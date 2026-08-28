import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { Hero } from "@/components/sections/Hero";
import { ModuleMarquee } from "@/components/sections/ModuleMarquee";
import { PainPoints } from "@/components/sections/PainPoints";
import { LeadCalculator } from "@/components/sections/LeadCalculator";
import { ResponseSpeedShowcase } from "@/components/sections/ResponseSpeedShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { AIPrinciples } from "@/components/sections/AIPrinciples";
import { Roadmap } from "@/components/sections/Roadmap";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <FloatingCTA />
      <main>
        <Hero />
        <ModuleMarquee />
        <PainPoints />
        <LeadCalculator />
        <ResponseSpeedShowcase />
        <HowItWorks />
        <ProductGrid />
        <AIPrinciples />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
