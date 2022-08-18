// right side has a type of AI version of me that's speaking and in a frame
// frame can be classical or sleek modern but make it look like museum
// 2 spot lights are aimed at it
// left side is about
import React, { useRef } from "react";
import * as THREE from "three";
import "./style.scss";
import {Canvas} from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei";
// import { Model } from "../../models/frames/Frames"
import { Frame } from "../3dmodels/Frame";
import { SpotLightHelper } from "three";
import { Lamp1 } from "../scenery/lights";

export const AboutPage = () => {
    console.log('About page')
    return (
        <div className="aboutPage" id="about">
            <div className="left">
                <div className="subtitle">
                    Jesus Federico Aguilar Ramirez
                </div>
                <div className="title">
                Full Stack Software Engineer
                </div>
                <div className="body">
                <p>
                I have 2 years of professional experience using cutting edge 
                technology to create software that is performant, maintainable, scalable, 
                secure, and focused on optimizing the user experience for an education based 
                platform with 100k monthly users. I am an agile team player that adapts to 
                team demands and takes initiative in the projects that I am a part of.    
                </p>
                <p>
                The majority of my career has been spent maintaining and creating for JS+React+Node based single page applications with cloud management, networking, compute power, storage, security, and permissions provided by the Google Cloud Platform.

                </p>
                </div>
           
            </div>
            <div className="right">

                    <Canvas
                        legacy={false}
                        camera={{position:[0, 0, 78], fov: 90}}
                        resize={{scroll: false}}
                    >
                        <OrbitControls
                            enableZoom={false}
                            minPolarAngle={Math.PI / 2}
                            maxPolarAngle={Math.PI / 2}
                        />
                        <mesh
                            rotation={[-Math.PI / 2, 0, 0]}
                            position={[0, -40 , -3]}
                            castShadow
                            receiveShadow
                        >
                            <meshPhongMaterial
                                // side={THREE.BackSide}
                                color={"#474747"}
                            />
                            <circleGeometry 
                                args={[28, 50]}
                                // scale={[5, 5, 1]}
                            />
                            {/* <boxGeometry 
                                args={[80, 80, 0]}
                            /> */}
                        </mesh>
                        <Frame />
                        {/* <ambientLight 
                            intensity={0.5}
                        /> */}
                    <Lamp1 
                            angle={0.29}
                            color={"#FFF8DC"}
                            pos={[0, 90, 8]}
                            power={10}
                            targetPos={[50, 0, 0]}
                    />
                    </Canvas>


            </div>
        </div>
    )
}