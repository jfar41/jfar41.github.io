import * as THREE from 'three';
import "./style.scss"
import { useState, useRef} from 'react';
import { Html, SpotLight, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import { useLoader } from '@react-three/fiber';
function RectangularSign(props) {
    // pass in text, color, 
    const rotation = [0, 0.5, 0]
    const position = [-20, -42.5, 35]
    // const text = useLoader(FontLoader, "/node_modules/three/examples/fonts/gentilis_bold.typeface.json")
    return (
        <group>
            <mesh
                rotation={rotation}
                position={position}
            >
                <boxGeometry args={[12, 3, 1]} />
                <meshPhongMaterial  
                    color="#0C0F17"
                />
            </mesh>
            <Html 
                className='sign'
                rotation={rotation}
                position={position}
                transform
            >
                credits
            </Html>
        </group>
    )
}
function Post(props) {
    return (
        <mesh
            rotation={[0, -4, 0]}
            position={[-20, -25, 35]}
        >
            <boxGeometry args={[1, 50, 1]}/>
            <meshPhongMaterial 
                color="#0C0F17"
            />
        </mesh>
    )
}
export function LampPost(props) {
    return (
        <group>
            <Post />
            <RectangularSign />
            
        </group>
    )
}