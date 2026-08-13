"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="hero-glow absolute inset-0 opacity-50 mix-blend-screen" />
        {/* Abstract SVG Background */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none min-w-[800px]"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="200"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="1"
            strokeDasharray="2 6"
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
        >
          <Terminal className="w-4 h-4 text-white/70" />
          <span className="text-sm font-medium text-white/80">Systems engineering for scale</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
        >
          Engineering <span className="text-gradient">Intelligent Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
        >
          We architect and build enterprise-grade software solutions, specializing in bespoke CRM systems, advanced analytics, and intelligent automations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Button size="lg" className="bg-white text-black hover:bg-white/90 w-full sm:w-auto text-base h-12 px-8">
            Start a project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-white/20 hover:bg-white/10">
            View architecture
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
