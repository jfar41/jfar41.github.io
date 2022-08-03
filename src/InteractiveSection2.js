import React, {Suspense, useRef} from "react";
import "./style.scss";
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";

import Globe from "./models/globe/Globe";
import Blimp from "./models/blimp/Blimp";
import NeonLight from "./models/NeonLight";
import { SpotLightHelper, TextureLoader } from "three";
import { Lamp1 } from "./components/lights";

export const InteractiveSection = () => {
    const upperPos = [-200, 200, 150]
    // const coneMaterial = useLoader(TextureLoader, require("./images/brick.jpg"))
    return (
        <div className="canvas">
            <Canvas 
                legacy={false}
                camera={{position: [0, -1, 10], fov: 100}}
                resize={{scroll: false}}
            >
                <OrbitControls
                />
                <ambientLight intensity={0.8}/>
                <Lamp1 pos={[-150, 200, 250]}/>
                <Suspense fallback={null}>
                    <Globe />
                </Suspense>
                <Suspense fallback={null}>
                    <Blimp />
                </Suspense>
                <Suspense fallback={null }>
                    <NeonLight angle={0}/>
                </Suspense>
                <Suspense fallback={null }>
                    <NeonLight angle={90}/>
                </Suspense>
                <Suspense fallback={null }>
                    <NeonLight angle={-90}/>
                </Suspense>
                <mesh
                    // rotation={[-Math.PI/7, 0, 0]}
                    position={[0, -7, 0]}
                >
                    <coneGeometry args={[2, 2, 64, 1]} />
                    <meshPhongMaterial 
                        color={"#B7392C"}
                        // map={coneMaterial}
                    />
                </mesh>
            </Canvas>
        </div>
    )
    
}