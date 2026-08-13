"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-12 md:p-24 max-w-5xl mx-auto rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something <span className="text-white/50">Extraordinary</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Partner with our engineering team to design, build, and scale your next enterprise product.
          </p>
          
          <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base h-14 px-10 rounded-full">
            Book a strategy session
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
