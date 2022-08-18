// "Blimp from Poly by Google" (https://skfb.ly/6ZFKQ) by IronEqual is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/gold-blimp.glb");
    const radius =  6.5
    let angle = 225
    let xPos = null
    let zPos = null
    useFrame(() => {
        xPos = radius * Math.sin(angle)
        zPos = radius * Math.cos(angle)
        angle += 0.003
        group.current.position.x = xPos
        group.current.position.z = zPos
        group.current.rotation.y = angle
    })
    return (
    <group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Cap_2}
            scale={0.001}
            />
        </group>
        </group>
    </group>
    );
}

useGLTF.preload("/gold-blimp.glb");