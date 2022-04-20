import React from "react";
import "./AuditionStarStatus.css";
import Status from "./StatusCom/Status";
import Status2 from "./StatusCom/Status2";

const AuditonStarStatus = () => {
  return (
    <div classNameName="my-2">
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item mb-1"
          style={{ border: "none", outline: "none" }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button accordionHeader text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ boxShadow: "none" }}
            >
              Start status
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-dark">
              <Status />
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "none", outline: "none" }}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button accordionHeader  collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ boxShadow: "none" }}
            >
              Create Event for first round.
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-dark">
              
              <Status2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditonStarStatus;
