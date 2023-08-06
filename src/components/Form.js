import { FaHandshake, FaMailBulk, FaLinkedin, FaInstagram, FaGithub, FaPhone } from "react-icons/fa"
import "./FormStyles.css"
import React from 'react'


const Form = () => {
  return (
    <div className="connect">
      <div className="connect-body">
      <div className="connect-title">
        <h1><FaHandshake size={30} style={{color: "#fff" , marginRight: "2rem", marginTop: "0.5rem"}} />Connect with me!</h1>
      </div>
      <div className="connect-text">
        <p>Here are a few ways you can contact me, whether you have a once-in-a-lifetime<br></br> opportunity or just some ideas! If I don't respond right away, I might be out exploring<br></br> in the middle of nowhere. I'll get back to you as soon as I can. That's for sure!</p>
      </div>
      <div className="connect-ways">
        <FaPhone size={30} style={{color: "#fff", marginRight: "1rem"}} />
        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
        <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} />
        <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
      </div>
      </div>
    </div>
  )
}

export default Form
