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
                    <a href="https://github.com/benifbond?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/onyebueke/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="linkedin" />

                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">

                        <img src={Instagram} alt="instagram" />
                    </a>
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
