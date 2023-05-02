import React from "react";
import logo from "../images/airbnb 1.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li className="logo">
                    <img src={logo} alt="airbnb logo" className="airbnbImage"></img>
                </li>
            </ul>
        </nav>
    )
}