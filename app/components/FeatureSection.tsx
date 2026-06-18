"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function RotatingOrb() {
  const orbRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <Sphere ref={orbRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#C3D809"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.15}
          emissive="#C3D809"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function OrbitIcons() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  const icons = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      position: new THREE.Vector3(
        Math.cos((i / 8) * Math.PI * 2) * 2.5,
        Math.sin(i * 0.5) * 0.5,
        Math.sin((i / 8) * Math.PI * 2) * 2.5
      ),
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <mesh key={i} position={icon.position}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial
            color="#C3D809"
            emissive="#C3D809"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FeatureSection() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => [
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
    ] as [number, number, number]);
  }, []);

  return (
    <section className="relative h-[520px] md:h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6">
        <span className="text-accent text-xs font-bold uppercase tracking-[0.35em] mb-4">
          Interactive
        </span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white text-center tracking-tight leading-tight max-w-3xl">
          Futuristic{" "}
          <span className="text-gradient">tech stack</span>
        </h2>
        <p className="text-muted mt-4 text-center max-w-md text-sm md:text-base leading-relaxed">
          3D environments, smooth motion, and high-performance code — built for the next generation of the web.
        </p>
      </div>

      <Canvas className="w-full h-full opacity-80">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#C3D809" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#16161d" />

        <RotatingOrb />
        <OrbitIcons />

        {particles.map((pos, i) => (
          <mesh
            key={i}
            position={pos}
          >
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial color="#C3D809" transparent opacity={0.25} />
          </mesh>
        ))}
      </Canvas>
    </section>
  );
}
