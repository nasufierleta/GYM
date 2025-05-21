import React from "react"
import Header from "./Header/Header"
import './Hero.css'
import Heart from "../../src/assets/heart.png"
import Hero_image from "../../src/assets/hero_image.png"
import Hero_image_back from "../../src/assets/hero_image_back.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>

            <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape </span>
                    <span>your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span id="description">
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span> 
                </div>
            </div>
            {/*figures*/}
            <div className="figures">
                <div><span>+140</span>
                     <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/*hero buttons */}
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn more</buttons>
            </div>
            </div>
            <div className="right-h">
                <button className="btn-r">Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt=""/>
                    <span>Heart Rate</span><span>bpm</span>
                </div>
                {/*hero image */}
                <img src={Hero_image} alt="" className="hero-image"/>
                <img src={Hero_image_back} alt="" className="hero-image-back"/>
            </div>
        </div>
    )
}

export default Hero