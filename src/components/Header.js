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