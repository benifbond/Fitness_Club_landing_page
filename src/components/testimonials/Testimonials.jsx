import { useState } from "react";
import "./Testimonials.css"

import { testimonialsData } from "../../data/testimonialsData"
function Testimonials() {
    const [selected, setSelected] = useState(0);
    const TestiLength = testimonialsData.length

    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t"></div>
        </div>
    )
}

export default Testimonials