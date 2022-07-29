import React, {Suspense, useRef} from "react";
import "./style.scss";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Globe from "./models/globe/Globe";
import Blimp from "./models/blimp/Blimp";

export const InteractiveSection = () => {
    
    return (
        <div className="canvas">
            <Canvas 
                legacy={false}
                camera={{position: [0, 0, 10], fov: 100}}
                resize={{scroll: false}}
            >
                <OrbitControls
                />
                <ambientLight />
                <Suspense fallback={null}>
                    <Globe />
                </Suspense>
                <Suspense fallback={null}>
                    <Blimp />
                </Suspense>
            </Canvas>
        </div>
    )
    
}