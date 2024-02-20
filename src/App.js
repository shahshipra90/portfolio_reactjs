import React from "react";
//import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Education from "./routes/Education";
import Skill from "./routes/Skill";
//import { Route } from "react-router-dom";
//import { Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
