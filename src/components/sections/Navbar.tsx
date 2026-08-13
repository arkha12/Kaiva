"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 glass-panel border-b-0 m-4 rounded-full"
    >
      <Link href="/" className="flex items-center space-x-2 group">
        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-sm group-hover:scale-110 transition-transform" />
        </div>
        <span className="font-semibold text-lg tracking-tight">Homi Systems</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
        <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
        <Link href="#process" className="hover:text-white transition-colors">Process</Link>
        <Link href="#company" className="hover:text-white transition-colors">Company</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="hidden md:inline-flex text-white/70 hover:text-white hover:bg-white/10">
          Sign In
        </Button>
        <Button className="bg-white text-black hover:bg-white/90">
          Book Strategy Session
        </Button>
      </div>
    </motion.header>
  );
}
