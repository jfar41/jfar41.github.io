import React from "react";
import "./style.scss";
import {FaPlay, FaLock} from "react-icons/fa"

export const Header = () => {
    return (
        <div className="header">
            <div className="musicPlayer">
                <FaPlay />
            </div>
            <div className="header-menu">
                <div className="link">
                    <FaLock/>
                </div>
                <div className="link">
                    <FaLock/>
                </div>
                <div className="link">
                    <FaLock/>
                </div>
            </div>
        </div>
    )
}