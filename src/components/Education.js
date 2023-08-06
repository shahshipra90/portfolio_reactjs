import "./EducationStyles.css"
import React from "react"



const Education = () => {
  return (
  
<div class="education-card">
  <div class="education-body">
    <h5 class="university-title">University of Windsor</h5>
    <h6 class="course-subtitle mb-2 text-muted">Master of Applied Computing (August 2023) </h6>
    <p class="card-text"> Coursework: Advanced Software Engineering, Advanced Database Technology, 
                         Advanced Computing Concepts, Internet Application and Distrubation System, and Networking and Security.</p>
  </div>

  <div class="education-body">
    <h5 class="university-title">Gujarat Technological University</h5>
    <h6 class="course-subtitle mb-2 text-muted">Bachelor of Engineering Computer Engineering (June 2021)</h6>
    <p class="card-text"> Coursework: Programming in C and C++, Advanced Java, .NET Technology, and Web Technology.</p>
  </div>

  <div class="education-body">
    <h5 class="university-title">Gujarat Technological University</h5>
    <h6 class="course-subtitle mb-2 text-muted">Diploma in Computer Engineering (May 2018)</h6>
    {<p class="card-text">Coursework: Programming in C and C++, Advanced Java, .NET Technology, and Web Technology.</p>}
  </div>
</div>

  )
}

export default Education
