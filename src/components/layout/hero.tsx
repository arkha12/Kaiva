"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Three.js 3D hero component
export function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <HeroFallback />;
  }

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
    <div
      className="min-h-[60vh] flex items-center justify-center text-center px-6"
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-on-background)" }}
    >
      <h1 className="text-[48px] md:text-[72px] font-bold tracking-tight" style={{ color: "var(--color-primary)" }}>
        Kaiva
      </h1>
      <p className="mt-6 text-[18px] max-w-2xl mx-auto">
        Agencia de diseño y desarrollo premium
      </p>
    </div>
  );
}