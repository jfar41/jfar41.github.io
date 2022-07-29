import React from "react";
import './style.scss';
import {InteractiveSection} from "./InteractiveSection2";

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