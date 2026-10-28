
// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   Float,
//   MeshDistortMaterial,
//   Sparkles,
//   Torus,
// } from "@react-three/drei";

// function EnergyCore() {
//   const core = useRef(null);
//   const ring1 = useRef(null);
//   const ring2 = useRef(null);
//   const ring3 = useRef(null);

//   useFrame((state, delta) => {
//     if (core.current) {
//       core.current.rotation.x += delta * 0.25;
//       core.current.rotation.y += delta * 0.45;

//       core.current.position.y =
//         Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
//     }

//     if (ring1.current) {
//       ring1.current.rotation.x += delta * 0.35;
//       ring1.current.rotation.y += delta * 0.2;
//     }

//     if (ring2.current) {
//       ring2.current.rotation.x -= delta * 0.25;
//       ring2.current.rotation.z += delta * 0.4;
//     }

//     if (ring3.current) {
//       ring3.current.rotation.y += delta * 0.3;
//       ring3.current.rotation.z -= delta * 0.2;
//     }
//   });

//   return (
//     <group>
//       {/* Main energy core */}
//       <Float
//         speed={2}
//         rotationIntensity={0.35}
//         floatIntensity={0.45}
//       >
//         <mesh ref={core}>
//           <icosahedronGeometry args={[1, 2]} />

//           <MeshDistortMaterial
//             color="#ff6b00"
//             emissive="#ff4500"
//             emissiveIntensity={1.8}
//             roughness={0.12}
//             metalness={0.85}
//             distort={0.35}
//             speed={2.5}
//           />
//         </mesh>
//       </Float>

//       {/* Outer orbital rings */}
//       <Torus
//         ref={ring1}
//         args={[1.55, 0.018, 16, 120]}
//         rotation={[1.1, 0.3, 0.4]}
//       >
//         <meshStandardMaterial
//           color="#ff6b00"
//           emissive="#ff4500"
//           emissiveIntensity={2.5}
//           metalness={0.9}
//           roughness={0.2}
//         />
//       </Torus>

//       <Torus
//         ref={ring2}
//         args={[1.8, 0.012, 16, 120]}
//         rotation={[0.5, 1.1, 0.2]}
//       >
//         <meshStandardMaterial
//           color="#ff9b45"
//           emissive="#ff6b00"
//           emissiveIntensity={2}
//           metalness={1}
//           roughness={0.15}
//         />
//       </Torus>

//       <Torus
//         ref={ring3}
//         args={[1.35, 0.01, 16, 120]}
//         rotation={[1.5, 0.2, 1]}
//       >
//         <meshStandardMaterial
//           color="#ffffff"
//           emissive="#ff6b00"
//           emissiveIntensity={1.5}
//           metalness={1}
//           roughness={0.1}
//         />
//       </Torus>

//       {/* Floating particles */}
//       <Sparkles
//         count={100}
//         scale={5}
//         size={3}
//         speed={0.5}
//         color="#ff7b00"
//         opacity={0.9}
//       />

//       <Sparkles
//         count={45}
//         scale={3.5}
//         size={5}
//         speed={1}
//         color="#ffffff"
//         opacity={0.6}
//       />

//       {/* Lighting */}
//       <pointLight
//         position={[2, 2, 2]}
//         color="#ff6b00"
//         intensity={25}
//         distance={8}
//       />

//       <pointLight
//         position={[-2, -1, 1]}
//         color="#ff2200"
//         intensity={12}
//         distance={6}
//       />
//     </group>
//   );
// }

// export default function Hero3D() {
//   return (
//     <div className="hero-3d">
//       <Canvas
//         camera={{ position: [0, 0, 5], fov: 45 }}
//         dpr={[1, 1.5]}
//         gl={{ antialias: true, alpha: true }}
//       >
//         <ambientLight intensity={0.8} />

//         <directionalLight
//           position={[4, 4, 5]}
//           intensity={2}
//         />

//         <EnergyCore />
//       </Canvas>
//     </div>
//   );
// }
