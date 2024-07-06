import "./SkillStyles.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import bs from "../assets/bootstrap.png";
import cc from "../assets/c-.png";
import c from "../assets/c-document.png";
import database from "../assets/database.png";
import django from "../assets/django.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import ai from "../assets/illustrator.png";
import java from "../assets/java.png";
import jira from "../assets/jira.png";
import office from "../assets/office.png";
import ps from "../assets/photoshop.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import next from "../assets/next.jpeg";

import React from "react";

const Skill = () => {
  return (
    <div className="skills">
      <div className="tools">
        <h1>Tools and Technologies</h1>
      </div>
      <div className="logos">
        <div className="web">
          <h3>Web Development Tools</h3>
          <img src={html} alt="html" className="img-logo" />
          <img src={css} alt="html" className="img-logo" />
          <img src={js} alt="html" className="img-logo" />
          <img src={bs} alt="html" className="img-logo" />
          <img src={react} alt="html" className="img-logo" />
          <img src={next} alt="html" className="img-logo" />
        </div>
        <div className="languages">
          <h3>Programming Languages and Database</h3>
          <img src={python} alt="html" className="img-logo" />
          <img src={django} alt="html" className="img-logo" />
          <img src={java} alt="html" className="img-logo" />
          <img src={database} alt="html" className="img-logo" />
          <img src={c} alt="html" className="img-logo" />
          <img src={cc} alt="html" className="img-logo" />
        </div>
        <div className="Management">
          <h3>Project Management Tools</h3>
          <img src={github} alt="html" className="img-logo" />
          <img src={jira} alt="html" className="img-logo" />
        </div>
        <div className="other-tools">
          <h3>Other Tools</h3>
          <img src={office} alt="html" className="img-logo" />
          <img src={ai} alt="html" className="img-logo" />
          <img src={ps} alt="html" className="img-logo" />
          <img src={figma} alt="html" className="img-logo" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
