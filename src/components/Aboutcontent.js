import { Link } from "react-router-dom"
import "./AboutcontentStyles.css"
import fed1 from "../assets/fed1.jpg"
import fed2 from "../assets/fed2.png"

import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am Web Developer developer. I have worked on 
            multiple projects as developer for my academic projects. I am more fond of developing front-end, but I can always work on back-end simultenously.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={fed1} className="img" alt="image1"/>
            </div> 
            <div className="img-stack bottom">
                <img src={fed2} className="img" alt="image2"/>
            </div> 
        </div>
    </div>
    </div>
  )
}

export default Aboutcontent
