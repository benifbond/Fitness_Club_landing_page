import "./Plans.css"
import { plansData } from "../../data/plansData"
import Whitetick from "../../assets/whiteTick.png"
function Plans() {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>

            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITH US</span>
            </div>
            {/* ================= Plans Cards ========= */}
            <div className="plans">
                {plansData.map(({ icon, id, name, price, features }) => {
                    return (
                        <div className="plan" key={id}>
                            {icon}
                            <span>{name}</span>
                            <span>€ {price}</span>
                            <div className="features">
                                {features.map((feature, i) => {
                                    return (
                                        <div className="feature" key={i} >
                                            <img src={Whitetick} alt="whitetick" />
                                            <span >{feature}</span>
                                        </div>)
                                })}
                            </div>
                            <div>
                                <span>See more benefits -></span>
                            </div>
                            <button className="btn">Join Now</button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Plans