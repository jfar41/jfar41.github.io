import React from "react";
import './style.scss';
import {InteractiveSection} from "./InteractiveSection2";
import { Header } from "./components/Header";
import {AboutPage} from "./components/pages/AboutPage";

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
                <AboutPage />
                <Header />
            </div>
        )
    }
}