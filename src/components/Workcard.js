import "./WorkcardStyle.css"

import React from 'react';
import { NavLink } from "react-router-dom";


const Workcard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="image1"/>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View Source</NavLink>
                </div>
            </div>
        </div>
  )
}

export default Workcard

