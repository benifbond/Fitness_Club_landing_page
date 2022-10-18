import "./Footer.css"
import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
import Instagram from "../../assets/instagram.png"

export const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="github" />
                    <img src={Linkedin} alt="linkedin" />
                    <img src={Instagram} alt="instagram" />
                </div>
                <div className="logo-footer">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div className="blur blur-footer-1" />
            <div className="blur blur-footer-2" />

        </div>
    )
}
