import React from "react";
import './style.scss';
import {InteractiveSection} from "./InteractiveSection";

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log('jere')
    }
    render() {
        return (
            <div className="landingPage">
                <InteractiveSection />
            </div>
        )
    }
}