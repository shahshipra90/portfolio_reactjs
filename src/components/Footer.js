import "./FooterStyles.css"
import React from "react"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        {/* <p>954 McEwan Ave</p> */}
                        {/* <p>N9B 2G2</p> */}
                        <p>Ontario</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{color: "#fff" , marginRight: "2rem"}} />
                    +1 (519)-991-1752</h4>
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{color: "#fff" , marginRight: "2rem"}} />
                    shahshipra90@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
