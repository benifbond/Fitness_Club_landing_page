import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"
import adidas from "../../assets/adidas.png"
import tick from "../../assets/tick.png"
function Reasons() {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="sportImage" />
                <img src={image2} alt="sportImage" />
                <img src={image3} alt="sportImage" />
                <img src={image4} alt="sportImage" />
            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className="stroke-text">why</span>
                    <span> choose us ?</span>
                </div>
                <div>
                    <div>
                        <img src="" alt=""></img>
                        <span></span>
                    </div>
                    <div><img src="" alt="" />
                        <span></span></div>
                    <div><img src="" alt="" />
                        <span></span></div>
                    <div><img src="" alt="" />
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons