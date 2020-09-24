import React from "react";
import hero from "../assets/hero.png"
import signup from "../components/SignUp"


function Hero(){
    return(
        <div className="hero-section" >
            <div className="hero-desc-con">
                <p>Looking for where developer share their story about their journey from newbie to experience</p>
                <div className="cta-con">
                    <a href="#">Get Started</a>
                    <span className="arrow">--></span>
                </div>
            </div>
            <img className="hero"src={hero} alt="blogger with a laptop"/>
        </div>
    );
}

export default Hero;