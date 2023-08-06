import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import WorkCardData from "./WorkCardData";
import "./Work.css"

const responsive = {

};

function CarouselPage() {
  return (
    <div>
      <h1 className="project">Projects</h1>
      <div className="carousel-container">
      <Carousel responsive={responsive}
      className="carousel"
      // showArrows={false}   // Disable arrows
      pagination={false}>
        {WorkCardData.map((val, ind) => (
          <div key={ind} className="project-card">
            <img src={val.imgsrc} alt="Project" />
            <h2 className="project-title">{val.title}</h2>
            <div className="pro-details">
              <p>{val.text}</p>
              <div className="pro-btns">
                <a
                  href={val.view}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
}

export default CarouselPage;
