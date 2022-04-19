import React from "react";
import "./AuditionStarStatus.css";
import Status from "./StatusCom/Status";

const AuditonStarStatus = () => {
  return (
    <div className="my-2">
      <div class="accordion" id="accordionExample">
        <div
          class="accordion-item mb-1"
          style={{ border: "none", outline: "none" }}
        >
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button accordionHeader text-light"
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
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body bg-dark">
              <Status />
            </div>
          </div>
        </div>
        <div class="accordion-item" style={{ border: "none", outline: "none" }}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button accordionHeader  collapsed"
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
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body bg-dark">
              <div className="text-warning">Component-2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditonStarStatus;
