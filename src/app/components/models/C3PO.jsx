"use client";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Dynamically get the base path
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function C3PO(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(`${basePath}/models/cp30-transformed.glb`);
  const { actions } = useAnimations(animations, group);

  const modelRef = useRef(); // Reference for the model

  // Animate the model's position
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.position.y = -1.1 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <group ref={group} {...props} dispose={null} rotation={[0.25, 0, 0]} scale={1.5} position={[0, 0, 0]}>
      <group ref={modelRef} name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.shadowsmash_000_mat}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.shadowsmash_000_mat}
          skeleton={nodes.Object_10.skeleton}
        />
        <mesh
          name="trip_righthand_closed_mesh_000_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.trip_righthand_closed_mesh_000_mat_0.geometry}
          material={materials.shadowsmash_000_mat}
        />
      </group>
    </group>
  );
}

// Preload the model
useGLTF.preload(`${basePath}/models/cp30-transformed.glb`);
