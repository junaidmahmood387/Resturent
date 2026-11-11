"use client";

import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { PlatedDish } from "@/components/three/PlatedDish";

function CameraRig({ reduced }: { reduced: boolean }) {
  useFrame((state, delta) => {
    const goalX = 2.05 + (reduced ? 0 : state.pointer.x * 0.32);
    const goalY = 2.15 + (reduced ? 0 : state.pointer.y * 0.16);
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, goalX, 2.2, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, goalY, 2.2, delta);
    state.camera.lookAt(0, 0.22, 0);
  });

  return null;
}

function Turntable({
  reduced,
  children,
}: {
  reduced: boolean;
  children: React.ReactNode;
}) {
  const group = useRef<THREE.Group>(null);
  const target = useRef(0.35);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const { gl } = useThree();

  useEffect(() => {
    const element = gl.domElement;

    const down = (event: PointerEvent) => {
      dragging.current = true;
      lastX.current = event.clientX;
    };
    const up = () => {
      dragging.current = false;
    };
    const move = (event: PointerEvent) => {
      if (!dragging.current) return;
      const delta = event.clientX - lastX.current;
      lastX.current = event.clientX;
      target.current += delta * 0.008;
    };

    element.addEventListener("pointerdown", down);
    element.addEventListener("pointerup", up);
    element.addEventListener("pointercancel", up);
    element.addEventListener("pointerleave", up);
    window.addEventListener("pointermove", move);

    return () => {
      element.removeEventListener("pointerdown", down);
      element.removeEventListener("pointerup", up);
      element.removeEventListener("pointercancel", up);
      element.removeEventListener("pointerleave", up);
      window.removeEventListener("pointermove", move);
    };
  }, [gl]);

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!reduced && !dragging.current) target.current += delta * 0.22;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, target.current, 4, delta);
  });

  return <group ref={group}>{children}</group>;
}

export default function HeroCanvas({
  reduced,
  frameloop = "always",
}: {
  reduced: boolean;
  frameloop?: "always" | "never";
}) {
  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 1.6]}
      camera={{ position: [2.05, 2.15, 3.85], fov: 30, near: 0.1, far: 40 }}
      gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}
      onCreated={({ gl }) => {
        gl.toneMappingExposure = 1.12;
        gl.setClearColor("#0c0b09");
      }}
      style={{ cursor: "grab", height: "100%", touchAction: "pan-y", width: "100%" }}
    >
      <CameraRig reduced={reduced} />
      <ambientLight intensity={0.22} />
      <spotLight position={[4.2, 6.2, 3.2]} angle={0.42} penumbra={0.85} intensity={5} color="#fff1df" />
      <spotLight position={[-4.5, 2.4, -1.5]} angle={0.6} penumbra={1} intensity={3.5} color="#9eb4c9" />
      <pointLight position={[0.2, 1.4, 0.4]} intensity={1.1} color="#c9844a" distance={6} />
      <Suspense fallback={null}>
        <Environment preset="studio" environmentIntensity={0.45} frames={1} />
      </Suspense>
      <Turntable reduced={reduced}>
        <PlatedDish reduced={reduced} />
      </Turntable>
      <ContactShadows position={[0, -0.01, 0]} opacity={0.45} scale={8} blur={2.4} far={3} color="#000000" />
    </Canvas>
  );
}
