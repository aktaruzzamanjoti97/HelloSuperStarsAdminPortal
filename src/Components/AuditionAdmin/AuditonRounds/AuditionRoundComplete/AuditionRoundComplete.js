import React from "react";
import auditionSelectRoundBanner from "../../../../assets/images/AuditionAdmin/audition537.png";
import RoundBanner from "../../../../assets/images/AuditionAdmin/Group1180.png";

function AuditionRoundComplete() {
  return (
    <div>
      <div className="my-4">
        <img
          src={auditionSelectRoundBanner}
          className="w-100 imgBorderBanner img-fluid"
          alt=""
        />
      </div>

      <div>
        <div className="d-flex justify-content-center my-2">
          <img src={RoundBanner} alt="" />
        </div>

        <div className="bg-success text-center">
          <h1 className="text-warning p-5">Round 1 Complete</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning p-3">
          Get Permission for the next round
        </button>
      </div>
    </div>
  );
}

export default AuditionRoundComplete;
