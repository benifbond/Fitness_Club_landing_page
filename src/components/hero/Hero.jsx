import React from 'react'
import Header from './header/Header'
import "./Hero.css"
import HeroImage from "../../assets/hero_image.png"
import HeroImageBack from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

function Hero() {
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>The Best Modern Fitness Club </span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            We will help you to shape and model your ideal body and live up to your life to the fullest.
                        </span>
                    </div>
                </div>
                {/* =======figures======== */}
                <div className="figures">
                    <div>
                        <span>+150</span>
                        <span>expert coachs </span>
                    </div>
                    <div>
                        <span>+1000</span>
                        <span>members joined </span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness programs</span>
                    </div>
                </div>
                {/* ======= hero buttons ===== */}
                <div className="hero-buttons">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </div>
                {/* ========Hero Imgaes ======== */}
                <img src={HeroImage} alt="heroImage" className='hero-image' />
                <img src={HeroImageBack} alt="heroImageBack" className="hero-image-back" />
                {/* ======Calories ====== */}
                <div className="calories">
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>250Kcal</span>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Hero