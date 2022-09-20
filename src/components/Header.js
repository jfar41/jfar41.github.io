import React from "react";
import "./style.scss";
import {FaPlay, FaLock, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa"

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeFromTop: null,
            aboutFromTop: null,
            experienceFromTop: null,
        }
    }
    componentDidMount() {
        const portfolioRef = document.getElementById('portfolio')
        const homeRef = document.getElementById('home')
        const homeFromTop = homeRef.getBoundingClientRect().top
        const aboutRef = document.getElementById('about')
        const aboutFromTop = aboutRef.getBoundingClientRect().top
        const experienceRef = document.getElementById('experience')
        const experienceFromTop = experienceRef.getBoundingClientRect().top

        this.setState({homeFromTop, aboutFromTop, experienceFromTop})

        portfolioRef.addEventListener('scroll', () => {
            if (homeRef.getBoundingClientRect().top >= 0 || homeRef.getBoundingClientRect().bottom >= 0) {
                window.history.pushState({'page_id': 1}, '', '/')
                this.props.updateViewingPage(1)
            } else if (aboutRef.getBoundingClientRect().top >= 0 || aboutRef.getBoundingClientRect().bottom >= 0) {
                window.history.pushState({'page_id': 2}, '', '#about')
                this.props.updateViewingPage(2)
            } else if (experienceRef.getBoundingClientRect().top >= 0 || experienceRef.getBoundingClientRect().bottom >= 0) {
                window.history.pushState({'page_id': 3}, '', "#experience")
                this.props.updateViewingPage(3)
            }
        })
    }
    render() {
        const portfolio = document.getElementById('portfolio')

        return (
            <div className="header">
                <div className="icons left">
                    <a className="icon" href="https://www.linkedin.com/in/jesus-federico-aguilar/" target="_blank" rel="noreferrer noopener">
                        <FaLinkedin />
                    </a>
                    <a className="icon" href="https://github.com/jfar41" target="_blank" rel="noreferrer noopener">
                        <FaGithub />
                    </a>
                    <a className="icon" href="https://twitter.com/ricocodes" target="_blank" rel="noreferrer noopener">
                        <FaTwitter />
                    </a>
                </div>
                <div className="icons right">
                    <div className="icon" 
                        onClick={() => portfolio.scrollTo(0, this.state.homeFromTop)}>
                        Home
                    </div>
                    <div className="icon" 
                        onClick={() => portfolio.scrollTo(0, this.state.aboutFromTop + 1)}
                    >
                        About
                    </div>
                    <div className="icon"
                        onClick={() => portfolio.scrollTo(0, this.state.experienceFromTop)}
                    >
                        Experience
                    </div>
                    {/* <div className="icon hidden">
                        <FaLock/>
                    </div> */}
                </div>
            </div>
        )

    }
}