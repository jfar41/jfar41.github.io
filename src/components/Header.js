import { useRef } from "react";
import React from "react";
import "./style.scss";
import {FaPlay, FaLock, FaTwitter, FaGithub, FaLinkedin, FaBars, FaTimes} from "react-icons/fa"

export const Header = () => {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsiveNav");
    }
    return (
        <div className="header">
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/experience">Experience</a>
                <a href="https://linktr.ee/ricocode">Socials</a>
                <a href="/qrCode">QR</a>
                <button className="navBtn navCloseBtn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="navBtn" onClick={showNavBar}>
                <FaBars />
            </button>

        </div>
    )
}

// export class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             homeFromTop: null,
//             aboutFromTop: null,
//             experienceFromTop: null,
//         }
//     }
//     // componentDidMount() {
//     //     const portfolioRef = document.getElementById('portfolio')
//     //     const homeRef = document.getElementById('home')
//     //     const homeFromTop = homeRef.getBoundingClientRect().top
//     //     const aboutRef = document.getElementById('about')
//     //     const aboutFromTop = aboutRef.getBoundingClientRect().top
//     //     const experienceRef = document.getElementById('experience')
//     //     const experienceFromTop = experienceRef.getBoundingClientRect().top

//     //     this.setState({homeFromTop, aboutFromTop, experienceFromTop})

//     //     portfolioRef.addEventListener('scroll', () => {
//     //         if (homeRef.getBoundingClientRect().top >= 0 || homeRef.getBoundingClientRect().bottom >= 0) {
//     //             window.history.pushState({'page_id': 1}, '', '/')
//     //             this.props.updateViewingPage(1)
//     //         } else if (aboutRef.getBoundingClientRect().top >= 0 || aboutRef.getBoundingClientRect().bottom >= 0) {
//     //             window.history.pushState({'page_id': 2}, '', '#about')
//     //             this.props.updateViewingPage(2)
//     //         } else if (experienceRef.getBoundingClientRect().top >= 0 || experienceRef.getBoundingClientRect().bottom >= 0) {
//     //             window.history.pushState({'page_id': 3}, '', "#experience")
//     //             this.props.updateViewingPage(3)
//     //         }
//     //     })
//     // }
//     render() {
//         const portfolio = document.getElementById('portfolio')

//         return (
//             <div className="header">
//                 <div className="icons right">
//                     <nav>
//                         <a href="/">Home</a>
//                         <a href="/about">About</a>
//                         <a href="/experience">Experience</a>
//                         <a href="https://linktr.ee/ricocode">Socials</a>
//                         <button>
//                             <FaTimes />
//                         </button>
//                     </nav>
//                     <button>
//                         <FaBars />
//                     </button>
//                 </div>
//             </div>
//         )

//     }
// }