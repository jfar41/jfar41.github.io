import React, { Suspense, useRef } from "react";
import "./style.scss";
import * as THREE from 'three';
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls, useHelper} from '@react-three/drei'
import { SpotLightHelper } from "three";
import { Scene } from "three";

import { Lamp1, Lamp2, Lamp3 } from "./components/lights";
import { LampPost } from "./components/LampPost/LampPost";
import BusStop from "./models/bus_stop/BusStop"

const seaTexture = new THREE.TextureLoader().load(require("./images/sandGrey.jpg"));

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
                    <ambientLight />
                    <Lamp1 position={[0, 15, 0]}/>
                    <Lamp2 />
                    <Lamp3 />
                    <LampPost />
                    <Suspense fallback={null}>
                        <BusStop />
                    </Suspense>
                </Canvas>
            </div>
        )
    }
}