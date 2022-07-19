import * as THREE from 'three';
import { useState, useRef} from 'react';
import { SpotLight, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';

export function Lamp(props) {
    const [target] = useState(() => new THREE.Object3D())
    const helper = useRef();
    useHelper(helper, SpotLightHelper, "red")
    return (
        <mesh>
            <meshStandardMaterial />
            <SpotLight
                ref={helper}
                color={"#1B5E6C"}
                intensity={2}
                position={[-60, 100, -350]}
                power={100}
                // angle={0.30054}
                angle={0.50054}
                target={target}
                decay={0}
                distance={200}
                penumbra={1}
            />
            <primitive object={target} position={[-60, -50, -160]} />
        </mesh>
    )
}