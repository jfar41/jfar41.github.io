import React, { useRef } from "react";
import "./style.scss";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import {OrbitControls, useHelper} from '@react-three/drei'
import { SpotLightHelper } from "three";
import { Scene } from "three";

import { Lamp } from "./components/lights";

const seaTexture = new THREE.TextureLoader().load(require("./images/sandGrey.jpg"));

const AquaLight = () => {
    let tgtObj = (<mesh rotation={[-Math.PI/2, 0, 10]} position={[-50, 200, 0]}>
        <planeBufferGeometry args={[10,10]} />
        <meshPhongMaterial color="red" side={THREE.DoubleSide}/>
    </mesh>)
    const helper = useRef();
    const spotLightTgtTile = useRef();
    useHelper(helper, SpotLightHelper, "#1B5E6C")
    return <spotLight
        ref={helper}
        intensity={1}
        position={[-50, 200,0]}
        angle={0.174533}
        target-position={[-50, 200, 0]}
    />
    const group = <group>
        <spotLight 
        ref={helper} 
        intensity={1} 
        position={[0, 200, 0]} 
        castShadow={true} 
        angle={0.174533}
        />
        <mesh
            rotation={[-Math.PI/2, 0, 10]}
            position={[-40, -50, -10]}
            ref={spotLightTgtTile}
        >
            <planeBufferGeometry args={[10, 10]} />
            <meshPhongMaterial
                color="red"
                side={THREE.DoubleSide}
                // map={seaTexture}
            />
        </mesh>
    </group>

    return group
   
}
export class InteractiveSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        // spotLightTgtTile.current.target = [-50, -50, 0]
    }
    render() {
        return (
            <div className="canvas">
                <Canvas
                    legacy={false}
                    camera={{position: [0, 0, 120], fov: 100}}
                    resize={{scroll: false}}
                >
                    <group>
                        <mesh
                            rotation={[-Math.PI / 2, 0, 10]}
                            position={[0, -50, -10]}
                        >
                            <planeBufferGeometry args={[450, 450]} />
                            <meshPhongMaterial
                                color="#3F3F3F"
                                side={THREE.DoubleSide}
                                // map={seaTexture}
                            />
                        </mesh>
                    </group>
                    <OrbitControls
                        // enableZoom={false}
                    />
                    {/* <AquaLight /> */}
                    <ambientLight />
                    <Lamp position={[0, 15, 0]}/>
                </Canvas>
            </div>
        )
    }
}