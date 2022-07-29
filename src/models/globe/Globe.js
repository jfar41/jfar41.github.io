import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(...props) {
    const { nodes, materials } = useGLTF("/globe.glb");
    const globeRef = React.useRef()
    useFrame(() => {
        globeRef.current.rotation.y -= .001
    })

    return (
    //   <group ref={group} {...props} dispose={null}>
      <group ref={globeRef} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, Math.PI/4]} scale={0.85}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.lambert1}
              scale={10}
            />
          </group>
        </group>
      </group>
    );
}