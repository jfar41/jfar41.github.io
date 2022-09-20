import React from "react";
import './style.scss';
// import {InteractiveSection} from "./InteractiveSection2";
import { Header } from "./components/Header";
import {HomePage} from "./components/pages/HomePage";
import {AboutPage} from "./components/pages/AboutPage";
import {ProjectsPage} from "./components/pages/ProjectsPage";

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewingPage: null
        }
    }
    componentDidMount() {
        window.history.pushState({'page_id': 1}, '', '/')
    }
    updateViewingPage = (pageId) => {
        this.setState({viewingPage: pageId}, () => console.log(`updated state: ${this.state.viewingPage}`))
    }
    render() {
        return (
            <div className="portfolio" id="portfolio">
                <HomePage />
                <AboutPage viewingPage={this.state.viewingPage}/>
                <ProjectsPage />
                <Header updateViewingPage={this.updateViewingPage}/>
            </div>
        )
    }
}