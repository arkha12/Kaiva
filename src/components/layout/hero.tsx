"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--color-background)",
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <group>
        <torusKnotGeometry args={[2, 0.5]} />
        <meshStandardMaterial color="var(--color-primary)" />
      </group>
    </Canvas>
  );
}

function HeroFallback() {
  return (
    <svg className="w-full h-full text-[var(--color-primary)]" fill="none" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="80" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#f9f9f9" />
      <text x="90" y="105" fontSize="12" textAnchor="middle" fill="currentColor" letterSpacing="1">ERP / CRM</text>
      <rect x="40" y="180" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#f9f9f9" />
      <text x="90" y="205" fontSize="12" textAnchor="middle" fill="currentColor" letterSpacing="1">EMAIL</text>
      <rect x="40" y="280" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#f9f9f9" />
      <text x="90" y="305" fontSize="12" textAnchor="middle" fill="currentColor" letterSpacing="1">DOCS</text>
      <path d="M140 100 L240 200" stroke="currentColor" strokeDasharray="4 4" />
      <path d="M140 200 L240 200" stroke="currentColor" strokeDasharray="4 4" />
      <path d="M140 300 L240 200" stroke="currentColor" strokeDasharray="4 4" />
      <circle cx="300" cy="200" r="60" stroke="currentColor" strokeWidth="1" fill="#ffffff" />
      <circle cx="300" cy="200" r="50" stroke="currentColor" strokeDasharray="2 2" />
      <text x="300" y="195" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="2">KAIVA</text>
      <text x="300" y="215" fontSize="10" textAnchor="middle" fill="#5e5e5e" letterSpacing="1">WORKER</text>
      <path d="M360 200 L460 150" stroke="currentColor" strokeWidth="1" />
      <path d="M360 200 L460 250" stroke="currentColor" strokeWidth="1" />
      <rect x="460" y="130" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#1b1b1b" />
      <text x="510" y="155" fontSize="12" textAnchor="middle" fill="#ffffff" letterSpacing="1">EJECUTA</text>
      <rect x="460" y="230" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#1b1b1b" />
      <text x="510" y="255" fontSize="12" textAnchor="middle" fill="#ffffff" letterSpacing="1">REPORTA</text>
    </svg>
  );
}

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-margin-safe py-section-gap max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[80vh]">
      <div className="lg:col-span-6 space-y-content-gap">
        <div className="inline-block border border-[var(--color-border-subtle)] px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase text-[var(--color-on-surface)]">
          EJECUCIÓN AUTÓNOMA
        </div>
        <h1 className="text-[40px] md:text-[64px] leading-tight font-bold tracking-tight text-[var(--color-on-background)]">
          Trabajadores digitales para empresas.
        </h1>
        <p className="text-[18px] md:text-[20px] text-[var(--color-on-surface)] max-w-xl leading-relaxed">
          KAIVA automatiza y ejecuta procesos empresariales mediante trabajadores digitales que entienden información, utilizan los sistemas existentes y realizan trabajo real con control humano.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="#contacto" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all active:scale-95">
            Descubre qué podemos automatizar
          </Link>
          <Link href="#como-funciona" className="border border-[var(--color-border-subtle)] text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-surface)] transition-all">
            Conoce cómo funciona
          </Link>
        </div>
      </div>
      <div className="lg:col-span-6 relative flex justify-center items-center h-[500px] rounded-lg border border-[var(--color-border-subtle)] mt-12 lg:mt-0">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {isMobile ? <HeroFallback /> : <Hero3D />}
        </div>
      </div>
    </section>
  );
}
