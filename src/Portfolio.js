import React from "react";
import './style.scss';
// import {InteractiveSection} from "./InteractiveSection2";
import {HomePage} from "./components/pages/HomePage";
import { Header } from "./components/Header";
import {AboutPage} from "./components/pages/AboutPage";

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log('Portfolio loaded!')
    }
    render() {
        return (
            <div className="portfolio">
                <HomePage />
                <AboutPage />
                <Header />
            </div>
        )
    }
}