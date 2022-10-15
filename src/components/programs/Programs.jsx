import "./Programs.css"
import { programsData } from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
function Programs() {
    return (
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className="stroke-text">Explore Our</span>
                <span>Programs</span>
                <span className="stroke-text">to shape you</span>
            </div>
            <div className="program-categories">
                {programsData.map(({ image, heading, details, id }) => {
                    return (<div className="category" key={id}>
                        {image}
                        <span>{heading}</span>
                        <span>{details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="RightArrow " />
                        </div>
                    </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default Programs