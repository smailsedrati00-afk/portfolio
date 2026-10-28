import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars, Line } from "@react-three/drei";
import { useRef } from "react";
// import * as THREE from "three";

function Orbit({ radius, rotation, speed }) {
  const orbitRef = useRef(null);

  useFrame((_, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * speed;
    }
  });

  const points = Array.from({ length: 181 }, (_, i) => {
    const angle = (i / 180) * Math.PI * 2;
    return [
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.42,
      0,
    ];
  });

  return (
    <group ref={orbitRef} rotation={rotation}>
      <Line
        points={points}
        color="#ff7138"
        transparent
        opacity={0.55}
        lineWidth={1}
      />
    </group>
  );
}

function Core() {
  const coreRef = useRef(null);
  const wireRef = useRef(null);
  const haloRef = useRef(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.12;
      coreRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }

    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.08;
      wireRef.current.rotation.z += delta * 0.04;
    }

    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 0.06;
    }
  });

  return (
    <group position={[1.8, 0.15, -1.5]}>
      {/* Large dark planet */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.65, 5]} />
        <meshStandardMaterial
          color="#171717"
          metalness={0.9}
          roughness={0.27}
          flatShading
        />
      </mesh>

      {/* Detailed orange wireframe */}
      <mesh ref={wireRef} scale={1.015}>
        <icosahedronGeometry args={[1.65, 3]} />
        <meshBasicMaterial
          color="#ff7138"
          wireframe
          transparent
          opacity={0.48}
        />
      </mesh>

      {/* Outer transparent shell */}
      <mesh scale={1.045}>
        <icosahedronGeometry args={[1.65, 2]} />
        <meshBasicMaterial
          color="#ff4f16"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Orbital rings */}
      <group ref={haloRef} rotation={[0.8, 0.35, -0.25]}>
        <Orbit
          radius={2.45}
          rotation={[0.1, 0.15, 0]}
          speed={0.1}
        />
      </group>

      <Orbit
        radius={2.85}
        rotation={[1.15, 0.3, 0.4]}
        speed={-0.07}
      />

      {/* Small glowing satellites */}
      <Float speed={1.2} floatIntensity={0.3}>
        <mesh position={[2.3, 0.7, 0.5]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#ff7138"
            emissive="#ff4f16"
            emissiveIntensity={2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={0.8} floatIntensity={0.4}>
        <mesh position={[-2.1, -0.8, 0.2]}>
          <icosahedronGeometry args={[0.2, 1]} />
          <meshStandardMaterial
            color="#ff7138"
            emissive="#9b2708"
            emissiveIntensity={0.8}
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </Float>
    </group>
  );
}

function FloatingShape({ position, size, speed = 0.12 }) {
  const ref = useRef(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 0.8;
    ref.current.position.y +=
      Math.sin(state.clock.elapsedTime * 0.5 + position[0]) *
      delta *
      0.12;
  });

  return (
    <Float speed={0.7} floatIntensity={0.15}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color="#29201c"
          emissive="#6b260d"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.25}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#080808"]} />

      <fog attach="fog" args={["#080808", 8, 19]} />

      <ambientLight intensity={0.55} />

      <pointLight
        position={[3, 3, 4]}
        color="#ff7138"
        intensity={32}
        distance={14}
      />

      <pointLight
        position={[-4, -2, 1]}
        color="#b43c15"
        intensity={12}
        distance={12}
      />

      <pointLight
        position={[0, 4, -3]}
        color="#ffffff"
        intensity={4}
        distance={10}
      />

      <Stars
        radius={35}
        depth={25}
        count={1800}
        factor={2}
        saturation={0}
        fade
        speed={0.25}
      />

      <Sparkles
        count={220}
        scale={[14, 8, 8]}
        size={2.2}
        speed={0.35}
        opacity={0.75}
        color="#ff7138"
      />

      <Core />

      <FloatingShape position={[-3.4, 1.8, -1]} size={0.65} />
      <FloatingShape position={[4.2, 1.5, -2]} size={0.5} />
      <FloatingShape position={[-2.5, -1.9, -2]} size={0.38} />
      <FloatingShape position={[4, -1.8, -1]} size={0.7} />
      <FloatingShape position={[0, 2.8, -3]} size={0.28} />
    </>
  );
}

export default function Global3DBackground() {
  return (
    <div className="global-3d-background">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}