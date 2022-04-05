import React from "react";
import LiveFanImage from "../../../../../assets/images/FanGroupImages/Group456.png";
import "./AdminFanGroup.css";
import AdminFanGroupNav from "./AdminFanGroupNav/AdminFanGroupNav";
import LiveFanGroupSlider from "./LiveFanGroupSlider/LiveFanGroupSlider";

const AdminFanGroup = () => {
  return (
    <div className="ms-4">
      <AdminFanGroupNav />

      <div className="liveMeetupBorder my-5">
        {/* <div className="d-flex mt-4 mx-3">
          <img
            width="38px"
            className="img-fluid text-white"
            src={LivePng}
            alt=""
          />
          <h3 className="text-light mx-2">Live Fan Group</h3>
        </div> */}

        <div className="">
          <img
            src={LiveFanImage}
            className="img-fluid liveFanImage"
            height="70px"
            alt=""
          />
          <LiveFanGroupSlider />
        </div>
      </div>

      {/* <div className="mt-5 mb-3">
        <div className="d-flex mt-4">
          <img
            width="38px"
            className="img-fluid text-white"
            src={LivePng}
            alt=""
          />
          <h3 className="text-light mx-2">Live Fan Group</h3>
        </div>

        <div className="row my-3">
          <div className="col-md-9">
            <div className="bgBlurDiv d-flex justify-content-end align-items-end">
              <Link to="">
                {" "}
                <button className="btn btn-warning enterBtn fw-bold py-2 px-4 m-5">
                  Enter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdminFanGroup;
