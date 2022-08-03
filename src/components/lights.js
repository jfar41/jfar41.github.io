import * as THREE from 'three';
import { useState, useRef} from 'react';
import { SpotLight, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';

export function Lamp1({pos}) {
    const [target] = useState(() => new THREE.Object3D())
    const helper = useRef();
    useHelper(helper, SpotLightHelper, "blue")
    const defPos = [-180, 100, -350]
    return (
        <mesh>
            <meshStandardMaterial />
            <SpotLight
                ref={helper}
                color={"#1B5E6C"}
                intensity={2}
                position={pos ? pos : defPos}
                power={20}
                // angle={0.30054}
                angle={0.40054}
                // target={target}
                decay={0}
                distance={200}
                penumbra={1}
            />
            <primitive object={target} position={[-90, -50, -160]} />
        </mesh>
    )
}
export function Lamp2(props) {
    const [target] = useState(() => new THREE.Object3D())
    const helper = useRef();
    useHelper(helper, SpotLightHelper, "red")
    return (
        <mesh>
            <meshStandardMaterial />
            <SpotLight
                ref={helper}
                color={"#37526D"}
                intensity={2}
                position={[300, 100, 70]}
                power={80}
                // angle={0.30054}
                angle={0.40054}
                target={target}
                decay={0}
                distance={200}
                penumbra={1}
            />
            <primitive object={target} position={[180, -50, 30]} />
        </mesh>
    )
}
export function Lamp3(props) {
    const [target] = useState(() => new THREE.Object3D())
    const helper = useRef();
    useHelper(helper, SpotLightHelper, "red")
    return (
        <mesh>
            <meshStandardMaterial />
            <SpotLight
                ref={helper}
                color={"#A548A8"}
                intensity={2}
                position={[-85, 100, 300]}
                power={50}
                // angle={0.30054}
                angle={0.40054}
                target={target}
                decay={0}
                distance={200}
                penumbra={1}
            />
            <primitive object={target} position={[-40, -50, 150]} />
        </mesh>
    )
}