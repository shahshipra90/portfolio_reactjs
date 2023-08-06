import React from "react";
import WorkCardData from "./WorkCardData";
import Workcard from "./Workcard";
import "./Work.css"

function ContainersPage() {
  return (
    <div>
      <h1 className="project">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => (
          <Workcard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
          />
        ))}
      </div>
    </div>
  );
}

export default ContainersPage;
