import React from "react";
import "./style.scss";
import {FaPlay, FaLock, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa"

export const Header = () => {
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
                <div className="icon">
                    About
                </div>
                <div className="icon">
                    Projects
                </div>
                <div className="icon">
                    <FaLock/>
                </div>
            </div>
        </div>
    )
}