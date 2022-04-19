import React from "react";
import "./AuditionPending.css";
import topvideoBanner from "../../../../assets/images/Rounds/unsplash_IeTLKtzbLNo.png";
import { Spinner } from "react-bootstrap";
const AuditonPending = () => {
  return (
    <section>
      <div className="my-2">
        <h5 className="text-muted">Submitted content</h5>
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            height: 2,
            borderColor: "white",
          }}
        />
      </div>

      <div className="container topBannerVideoRound my-4">
        <img src={topvideoBanner} alt="" className="img-fluid w-100" />
      </div>

      <div className="container my-2">
        <div className="card bg-dark">
          <div className="card-body d-flex justify-content-between">
            <h5 className="text-light"> Guiter for the beginners Round-1</h5>
            <span className="text-light">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="card bg-dark "
          style={{ height: "300px", width: "100%" }}
        >
          <div className="card-body d-flex justify-content-center align-items-center">
            <div>
              <div className="text-center">
                <Spinner
                  animation="border"
                  variant="warning"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <h3 className="text-warning">Pending for Jury update</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditonPending;
