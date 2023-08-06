import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skill from '../components/Skill';
import Heroimg2 from '../components/Heroimg2';


const skills = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Skills" text="Interests"/>
      <Skill />
      <Footer />
    </div>
  )
}

export default skills
