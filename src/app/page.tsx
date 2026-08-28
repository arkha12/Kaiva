import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { AIPrinciples } from "@/components/sections/AIPrinciples";
import { Roadmap } from "@/components/sections/Roadmap";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <ProductGrid />
        <AIPrinciples />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
