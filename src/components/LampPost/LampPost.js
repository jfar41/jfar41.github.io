import * as THREE from 'three';
import "./style.scss"
import { useState, useRef} from 'react';
import { Html, SpotLight, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import { useLoader } from '@react-three/fiber';
import RectangularSign from "./RectangularSign"
import ArrowSign from "./ArrowSign";

function Post(props) {
    const rotation = [0, -4, 0]
    return (
        <group>
            <mesh
                rotation={rotation}
                position={[-20, -25, 35]}
            >
                <boxGeometry args={[1, 50, 2]}/>
                <meshPhongMaterial 
                    color="#0C0F17"
                />
            </mesh>
            <mesh
                rotation={[-Math.PI /2, 0, 10]}
                position={[-20, -48.5, 35]}
            >
                <boxGeometry args={[2, 2, 1]}/>
                <meshPhongMaterial 
                    color="#0C0F17"
                />
            </mesh>
            <mesh
                rotation={[-Math.PI /2, 0, 10]}
                position={[-20, -49.5, 35]}
            >
                <boxGeometry args={[4, 4, 1]}/>
                <meshPhongMaterial 
                    color="#0C0F17"
                />
            </mesh>
            <mesh
                rotation={[-Math.PI /2, 0, 10]}
                position={[-20, -50, 35]}
            >
                <boxGeometry args={[6, 6, 1]}/>
                <meshPhongMaterial 
                    color="#0C0F17"
                />
            </mesh>
        </group>
    )
}
export function LampPost(props) {
    return (
        <group>
            <Post />
            <RectangularSign 
                text="articles" 
                position={[-20, -34, 35]} 
                signColor={"#FF0090"}/>
            <ArrowSign />
            <RectangularSign 
                text="credits" 
                position={[-20, -44, 35]} 
                signColor={"orange"} />
        </group>
    )
}