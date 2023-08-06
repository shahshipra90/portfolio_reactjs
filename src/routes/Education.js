import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Education from '../components/Education';


const education = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Education" text="Developer"/>
      <Education />
      <Footer />
    </div>
  )
}

export default education
