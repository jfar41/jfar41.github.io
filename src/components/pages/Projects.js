import React from "react";
import "./projects.scss";

export class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="projectSection" id="project">
                <div className="projectsContainer">
                    <div className="projectContainer">
                        <div className={"content"}>

                        </div>
                        <div className={"tableOfContent"}>
                            <div className="title">
                            Projects
                            </div>
                            <div className="projects">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}