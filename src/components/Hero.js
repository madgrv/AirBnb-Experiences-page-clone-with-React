import React from "react";
import HeroImg from "../images/Group77.png"

export default function Hero() {
    return(
        <div className="Hero--container">
            <div>
                <img src={HeroImg} alt="Hero group image" className="hero--image"></img>
                <h1 className="title">Online Experiences</h1>
                <p className="description">Join unique interactive activities led by<br/>
                one-of-a-kind hosts—all without leaving<br/>
                home.</p>
            </div>
        </div>
    )
}