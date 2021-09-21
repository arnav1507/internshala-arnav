import React from "react";
import "./FreshersJob.css";
import { FreshersJobData } from "../../data/FreshersJobData";

function FreshersJob() {
  const data = FreshersJobData;

  return (
    <div className="container">
      <div className="line">
        <div className="line_posters">
          {data.map((item) => {
            return (
              <div className="line_poster">
                <img
                  key={item.id}
                  src={item.image}
                  alt="Icon"
                  className="item_image"
                />
                <p className="item_name">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FreshersJob;
