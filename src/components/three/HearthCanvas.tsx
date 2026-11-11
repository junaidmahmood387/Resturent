"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Embers({ reduced }: { reduced: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 48;
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        phase: (index / count) * Math.PI * 2,
        radius: 0.55 + (index % 8) * 0.16,
        rise: 0.25 + (index % 5) * 0.18,
        scale: 0.02 + (index % 3) * 0.012,
        speed: 0.25 + (index % 5) * 0.05,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = reduced ? 0.8 : clock.elapsedTime;
    seeds.forEach((seed, index) => {
      const angle = time * seed.speed + seed.phase;
      const lift = (time * 0.15 + seed.phase) % 1;
      dummy.position.set(
        Math.cos(angle) * seed.radius,
        lift * seed.rise,
        Math.sin(angle) * seed.radius,
      );
      dummy.scale.setScalar(seed.scale * (1 - lift * 0.45));
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#ffb067" emissive="#e07a32" emissiveIntensity={1.4} roughness={0.4} />
    </instancedMesh>
  );
}

export default function HearthCanvas({
  reduced,
  frameloop = "always",
}: {
  reduced: boolean;
  frameloop?: "always" | "never";
}) {
  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.35, 2.4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0.4, 0]} intensity={6} color="#ff8a3d" distance={4} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <ringGeometry args={[0.85, 1.15, 48]} />
        <meshStandardMaterial color="#2a211c" roughness={0.8} metalness={0.2} />
      </mesh>
      <Embers reduced={reduced} />
    </Canvas>
  );
}
