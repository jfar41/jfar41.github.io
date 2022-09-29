// right side has a type of AI version of me that's speaking and in a frame
// frame can be classical or sleek modern but make it look like museum
// 2 spot lights are aimed at it
// left side is about
import React, { useRef } from "react";
import ReactTooltip from "react-tooltip";
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
            tooltip: null
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
                    <div className="content sectionTitle" >
                        <h1>My Skills</h1>
                    </div>
                    <div className="content">
                        <div className="skills">
                            <div className="skill" data-tip="Frontend and Backend">JavaScript</div>
                            <div className="skill" data-tip="Backend">TypeScript</div>
                            <div className="skill" data-tip="Algorithms, Data Structures, web crawling">Python</div>
                            <div className="skill" data-tip="Firebase, Firestore, Storage, Cloud Functions">Google Cloud Platform</div>
                            <div className="skill" data-tip="Amplify, EC2, hosting">Amazon Web Services</div>
                            <div className="skill" data-tip="Frontend">React</div>
                            <div className="skill" data-tip="Frontend">Redux</div>
                            <div className="skill" data-tip="Backend">Node.js</div>
                            <div className="skill" data-tip="Professional experience @ oneboard">Agile</div>
                            <div className="skill" data-tip="Version Control">Github</div>
                            <div className="skill" data-tip="Frontend">HTML</div>
                            <div className="skill" data-tip="Frontend: LESS, SCSS">CSS</div>
                            <div className="skill" data-tip="Backend">MongoDB</div>
                        </div>

                    </div>
                </div>
                <div className="aboutRow">
                    <div className="content sectionTitle" >
                        <h1>Education</h1>
                    </div>
                    <div className="content">
                        <p>
                            Biological Sciences B.S. from the University of California, Irvine
                        </p>
                    </div>
                </div>
                <div className="aboutRow">
                    <div className="content sectionTitle" >
                        <h1>Certificates</h1>
                    </div>
                    <div className="content">
                        <a href="/certificates/GeneralAssembly">
                            Software Engineering Immersive by General Assembly
                        </a>
                        <a href="/certificates/awsJobRoles">
                            AWS Job Roles in Cloud
                        </a>
                    </div>
                </div>
                <ReactTooltip place="top" effect="solid"  globalEventOff="click"/>

            </div>
        )
    }
}
