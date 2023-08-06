import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';
import Workcont from '../components/Workcont';

const project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Recent Work" />
      <Workcont />
      <Footer />
    </div>
  );
};

export default project
