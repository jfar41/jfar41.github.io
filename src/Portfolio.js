import React from "react";
import './style.scss';
// import {InteractiveSection} from "./InteractiveSection2";
import { Header } from "./components/Header";
import {HomePage} from "./components/pages/HomePage";
import {AboutPage} from "./components/pages/AboutPage";


export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        window.history.pushState({'page_id': 1}, '', '/')
    }

    render() {
        return (
            <div className="portfolio" id="portfolio">
                <HomePage />
                <AboutPage />
                <Header />
            </div>
        )
    }
}