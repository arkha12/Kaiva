"use client";

import Link from "next/link";
import { Code, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-4 inline-flex">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-semibold text-lg tracking-tight">Homi Systems</span>
            </Link>
            <p className="text-sm text-white/50 max-w-xs">
              Engineering Intelligent Software. We build the primitives that power modern enterprise operations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors">Enterprise CRM</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Advanced Analytics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Intelligent Automations</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Systems Architecture</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Social</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Code className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Homi Systems. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
