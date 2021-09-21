import React from "react";
import "./Freshers.css";

function Freshers() {
  return (
    <div className="freshers container">
      <div className="left">
        <h3 className="title">
          Fresher Jobs
          <span class="offer_badge1">NEW</span>
        </h3>
        <h5 className="desc">Premium fresher jobs on your fingertips</h5>
      </div>
      <div className="right">
        <h6 className="view">
          <a href="https://internshala.com/fresher-jobs">
            View all jobs <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Freshers;
