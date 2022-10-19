import React from 'react'
import Header from './header/Header'
import "./Hero.css"
import HeroImage from "../../assets/hero_image.png"
import HeroImageBack from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from "framer-motion"
function Hero() {
    const transition = { type: "spring", duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "160px" : "230px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    >
                    </motion.div>
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

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>
                {/* ========Hero Imgaes ======== */}
                < img src={HeroImage} alt="heroImage" className='hero-image' />
                <motion.img initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    src={HeroImageBack} alt="heroImageBack" className="hero-image-back" />
                {/* ======Calories ====== */}
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>250Kcal</span>
                    </div>
                </motion.div>
            </div>

        </div >
    )
}

export default Hero