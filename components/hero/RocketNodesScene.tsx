"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RocketModel({ autoRotate = true }: { autoRotate?: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.6;
    }
  });

  const silver = "#C0C0C0";
  const white = "#FFFFFF";
  const darkGray = "#333333";

  return (
    <group ref={group} rotation={[0.2, 0.5, 0]}>
      {/* Rocket Body */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.35, 2.2, 64]} />
        <meshStandardMaterial color={silver} metalness={1} roughness={0.2} />
      </mesh>

      {/* Nose Cone */}
      <mesh position={[0, 1.4, 0]}>
        <coneGeometry args={[0.3, 0.6, 64]} />
        <meshStandardMaterial color={white} metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Engine Nozzle */}
      <mesh position={[0, -1.3, 0]}>
        <cylinderGeometry args={[0.15, 0.25, 0.4, 32]} />
        <meshStandardMaterial
          color={darkGray}
          metalness={0.9}
          roughness={0.4}
        />
      </mesh>

      {/* Fins */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
        <mesh
          key={i}
          rotation={[0, angle, 0]}
          position={[
            Math.cos(angle) * 0.25,
            -0.9,
            Math.sin(angle) * 0.25,
          ]}
        >
          <boxGeometry args={[0.05, 0.4, 0.2]} />
          <meshStandardMaterial color={white} metalness={0.9} roughness={0.3} />
        </mesh>
      ))}

      {/* Engine Glow */}
      <pointLight
        position={[0, -1.5, 0]}
        intensity={3}
        color="#ffffff"
        distance={3}
      />
      <mesh position={[0, -1.5, 0]}>
        <coneGeometry args={[0.2, 0.6, 32]} />
        <meshStandardMaterial
          emissive="#ffffff"
          emissiveIntensity={3.5}
          color={white}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

export default function RocketScene({
  width = "100%",
  height = 360,
  autoRotate = true,
}: {
  width?: string | number;
  height?: string | number;
  autoRotate?: boolean;
}) {
  return (
    <div style={{ width, height }}>
      <Canvas
        camera={{ position: [3, 1.5, 3], fov: 40 }}
        style={{ background: "#000" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 8]} intensity={1.5} />
        <spotLight position={[0, 3, 0]} intensity={1.2} angle={0.4} />

        <React.Suspense fallback={null}>
          <RocketModel autoRotate={autoRotate} />
        </React.Suspense>

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
