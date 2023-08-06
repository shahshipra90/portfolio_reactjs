import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Aboutcontent from '../components/Aboutcontent';


const about = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="About" text="Web Developer"/>
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default about
