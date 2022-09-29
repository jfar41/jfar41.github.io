// right side has a type of AI version of me that's speaking and in a frame
// frame can be classical or sleek modern but make it look like museum
// 2 spot lights are aimed at it
// left side is about
import React, { useRef } from "react";
import ReactTooltip from "react-tooltip";
import "./style.scss";


const jayAtGraduation = require("../../images/jayAtGraduation.jpeg")

export class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltip: false
        }
    }
    componentDidUpdate = (prevProps, prevState) => {

            ReactTooltip.rebuild()

    }
    render() {

        return (
            <div className="aboutSection" id="about">
                
                <div className="aboutRow" onClick={() => this.setState({tooltip: false})}>
                    <img src={jayAtGraduation} />
                    <div className="content rightSide">
                        <h2>I'm Federico, a Full Stack Engineer👋🏽</h2>
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
                        <h2>My Skills</h2>
                    </div>
                    <div className="content">
                        <div className="skills" onClick={() => this.setState({tooltip: true})} onMouseEnter={() => this.setState({tooltip: true})} onMouseLeave={() => {this.setState({tooltip: false})}}>
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
                <div className="aboutRow" onClick={() => this.setState({tooltip: false})}>
                    <div className="content sectionTitle" >
                        <h2>Education</h2>
                    </div>
                    <div className="content">
                        <p>
                            Biological Sciences B.S. from the University of California, Irvine
                        </p>
                    </div>
                </div>
                <div className="aboutRow" onClick={() => this.setState({tooltip: false})}>
                    <div className="content sectionTitle" >
                        <h2>Certificates</h2>
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
                <div className="aboutRow" onClick={() => this.setState({tooltip: false})}>
                    <div className="content sectionTitle" >
                        <h2>What's Next?</h2>
                    </div>
                    <div className="content">
                        <a href="https://dev.d2f4ed069urwgy.amplifyapp.com/">Todo</a>
                        <p style={{fontSize: "10px"}}>This play app is to get hands on with AWS, starting with AWS Amplify. It currently has authentication, database integration, and live-hosting. I'm currently adding user specific data query and creation. Will then use this knowledge to create a fully functional bug tracker using GraphQL, Node.js, and TypeScript. If you create an account today, I will notify you when the updated app is live!</p>
                        <p>.NET Framework</p>
                        <p style={{fontSize: "10px"}}>Finishing up a fully functional e-commerce site wit the .NET Framework, MySQL, and hosting with AWS. Link will be published soon :)</p>
                        <p>AWS Certified Cloud Practitioner</p>
                        <p style={{fontSize: "10px"}}>Currently on module 7 of 11. Will take the exam next week!</p>
                    </div>
                </div>
                {this.state.tooltip ? <ReactTooltip place="top" effect="solid" /> : null}

            </div>
        )
    }
}
