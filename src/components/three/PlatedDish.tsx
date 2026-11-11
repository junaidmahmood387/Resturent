"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scallop({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.16, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#d7b07a" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.028, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.012, 24]} />
        <meshStandardMaterial color="#4a220f" roughness={0.72} />
      </mesh>
    </group>
  );
}

function WineGlass() {
  const glass = {
    color: "#f4efe6",
    metalness: 0.2,
    roughness: 0.18,
  } as const;

  return (
    <group position={[1.02, 0, -0.2]}>
      <mesh position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.015, 28]} />
        <meshStandardMaterial {...glass} />
      </mesh>
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.012, 0.014, 0.46, 12]} />
        <meshStandardMaterial {...glass} />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.14, 0.012, 10, 32]} />
        <meshStandardMaterial {...glass} />
      </mesh>
      <mesh position={[0, 0.49, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.125, 24]} />
        <meshStandardMaterial color="#6b1730" roughness={0.35} />
      </mesh>
    </group>
  );
}

function SpiceField() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 36;
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        phase: (index / count) * Math.PI * 2,
        radius: 1.85 + (index % 5) * 0.16,
        scale: 0.012 + (index % 4) * 0.007,
        speed: 0.18 + (index % 6) * 0.035,
        y: 0.35 + (index % 7) * 0.09,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = clock.elapsedTime;
    seeds.forEach((seed, index) => {
      const angle = time * seed.speed + seed.phase;
      dummy.position.set(
        Math.cos(angle) * seed.radius,
        seed.y + Math.sin(time * 0.9 + seed.phase) * 0.08,
        Math.sin(angle) * seed.radius * 0.72,
      );
      dummy.scale.setScalar(seed.scale);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} frustumCulled={false}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#e2b57a" emissive="#c9844a" emissiveIntensity={0.45} roughness={0.35} />
    </instancedMesh>
  );
}

export function PlatedDish({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current || reduced) return;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.035;
  });

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <circleGeometry args={[2.35, 64]} />
        <meshStandardMaterial color="#161310" roughness={0.92} metalness={0.04} />
      </mesh>

      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[1.72, 1.72, 0.045, 64]} />
        <meshStandardMaterial color="#1a1614" roughness={0.62} metalness={0.22} />
      </mesh>

      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[1.42, 1.36, 0.07, 64]} />
        <meshStandardMaterial color="#e4d8c8" roughness={0.55} metalness={0.02} />
      </mesh>

      <mesh position={[0, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.12, 1.36, 64]} />
        <meshStandardMaterial color="#e6ddd0" roughness={0.48} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0.4]} position={[0.05, 0.145, 0.08]}>
        <torusGeometry args={[0.42, 0.016, 10, 40, Math.PI * 1.15]} />
        <meshStandardMaterial color="#c9844a" roughness={0.32} metalness={0.05} />
      </mesh>

      <Scallop position={[-0.18, 0.15, 0.05]} />
      <Scallop position={[0.2, 0.15, 0.1]} />
      <Scallop position={[0.02, 0.15, -0.18]} />

      <mesh position={[0.48, 0.22, -0.18]} rotation={[0.5, 0.2, 0.7]}>
        <boxGeometry args={[0.26, 0.012, 0.14]} />
        <meshStandardMaterial color="#c9a36a" roughness={0.62} />
      </mesh>

      {[
        [-0.05, 0.15, 0.42],
        [0.16, 0.15, 0.4],
        [0.32, 0.15, 0.28],
      ].map((position) => (
        <mesh key={position.join("-")} position={position as [number, number, number]} scale={[1, 0.35, 1]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial color="#1f4d34" roughness={0.4} />
        </mesh>
      ))}

      <mesh position={[0.34, 0.2, -0.34]} rotation={[0.4, 0.2, -0.4]}>
        <coneGeometry args={[0.025, 0.16, 5]} />
        <meshStandardMaterial color="#2f6b45" roughness={0.55} />
      </mesh>
      <mesh position={[0.42, 0.2, -0.28]} rotation={[-0.2, 0.4, 0.5]}>
        <coneGeometry args={[0.02, 0.12, 5]} />
        <meshStandardMaterial color="#3e7a4e" roughness={0.55} />
      </mesh>

      <WineGlass />
      <SpiceField />
    </group>
  );
}
