"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BRAND = new THREE.Color("#2e5bff");
const AI = new THREE.Color("#6d5cff");

const PARTICLE_COUNT = 46;
const PULSE_COUNT = 5;
const PULSE_CYCLE = 3.2;

type Particle = {
  base: THREE.Vector3;
  speed: number;
  phase: number;
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const radius = 3.2 + Math.random() * 3.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    return {
      base: new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta) * 0.6,
        radius * Math.cos(phi) * 0.6 - 1,
      ),
      speed: 0.15 + Math.random() * 0.25,
      phase: i * 0.7,
    };
  });
}

function Core({ reduced }: { reduced: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const pulse = reduced ? 1 : 1 + Math.sin(t * 1.4) * 0.06;
    mesh.current.scale.setScalar(pulse);
    if (!reduced) {
      mesh.current.rotation.y = t * 0.12;
      mesh.current.rotation.x = t * 0.06;
    }
    if (material.current) {
      const mix = (Math.sin(t * 0.6) + 1) / 2;
      material.current.color.copy(BRAND).lerp(AI, mix);
    }
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshBasicMaterial ref={material} wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function Particles({ reduced }: { reduced: boolean }) {
  const particles = useMemo(() => makeParticles(PARTICLE_COUNT), []);
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current || reduced) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const p = particles[i];
      child.position.set(
        p.base.x + Math.sin(t * p.speed + p.phase) * 0.35,
        p.base.y + Math.cos(t * p.speed * 0.8 + p.phase) * 0.35,
        p.base.z + Math.sin(t * p.speed * 0.5 + p.phase) * 0.25,
      );
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.base}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? AI : BRAND} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Pulses({ reduced }: { reduced: boolean }) {
  const particles = useMemo(() => makeParticles(PULSE_COUNT), []);
  const dots = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!dots.current || reduced) return;
    const t = state.clock.elapsedTime;

    dots.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshBasicMaterial;
      const offset = (i / PULSE_COUNT) * PULSE_CYCLE;
      const local = (t + offset) % PULSE_CYCLE;
      const f = Math.min(local / (PULSE_CYCLE * 0.55), 1);

      const target = particles[i].base;
      mesh.position.lerpVectors(target, new THREE.Vector3(0, 0, 0), f);
      material.opacity = f < 1 ? Math.sin(f * Math.PI) * 0.9 : 0;
    });
  });

  return (
    <group ref={dots}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}

export default function KarvaHeroScene() {
  const reduced = Boolean(useReducedMotion());

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <Core reduced={reduced} />
      <Particles reduced={reduced} />
      <Pulses reduced={reduced} />
    </Canvas>
  );
}
