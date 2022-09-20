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
import {FaPlay, FaLock, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa"


const jayAtGraduation = require("../../images/jayAtGraduation.jpeg")
const skillSet = require("../../images/skillSet.jpg");

export class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="aboutSection" id="about">
                <div className="aboutRow">
                    <img src={jayAtGraduation} />
                    <div className="content rightSide">
                        <h1>I'm Federico, a Full Stack Engineer👋🏽</h1>
                        <p>
                            I have 2 years of professional experience creating software 
                            for an education based platform with 100k monthly users.
                            I like to work on my latte art in my spare time☕️, count my macros🏋🏽‍♂️, and 
                            travel with friends🌎.
                        </p>
                    </div>
                </div>
                <div className="aboutRow">
                    <div className="content sectionTitle" style={{minWidth: "200px"}}>
                        <h1>My Skills</h1>
                    </div>
                    <div className="content">
                        <p>JavaScript, React, Redux, Google Cloud Platform (firebase, firestore, cloud functions, security + permissions), Python, HTML, CSS, Node.js, TypeScript, web APIs, Express, Github, MongoDB, Amazon Web Services</p>
                    </div>
                </div>
                <div className="aboutRow">
                    <div className="content sectionTitle" style={{minWidth: "20px"}}>
                        <h1>Education</h1>
                    </div>
                    <div className="content">
                        <ol>
                            Biological Sciences B.S. from the University of California, Irvine
                        </ol>
                        <ol>
                            Software Engineering Immersive by General Assembly
                        </ol>
                    </div>
                </div>
                <div className="aboutRow">
                    <h1 className="content">Experience</h1>
                </div>
            </div>
        )
    }
}
