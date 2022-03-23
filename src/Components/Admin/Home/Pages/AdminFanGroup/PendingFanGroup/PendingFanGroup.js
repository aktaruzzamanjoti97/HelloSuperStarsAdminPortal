import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Link, useHistory } from "react-router-dom";
import Ayushman from "../../../../../../assets/images/AyshmanKhurana.webp";
import FanGroupIcon from "../../../../../../assets/images/iconFan/expired-1.png";
import Salman from "../../../../../../assets/images/SalmanKhan.jpg";
import "./PendingFanGroup.css";

const PendingGroup = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/superstar-admin/pending-fan-group-competition");
  };

  return (
    <div className="container">
      <div className="d-flex my-2">
        <img className="img-fluid" width="35px" src={FanGroupIcon} alt="" />
        <h3 className="text-white mx-2">Pending Fan Group</h3>
      </div>

      <div className="pendingGroupFan my-3">
        <div className="fanGroupBgImage w-100 fanGroupText d-flex justify-content-center align-items-center">
          <div>
            <h4 className="pendingTxt">PENDING</h4>
            <h2 className="fanGroupTxt">FAN GROUP</h2>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-8 text-light">
          <h2>Shahrukh Fanbase vs Star Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            possimus repellat, accusantium est vitae perspiciatis accusamus vel
            molestias enim. Natus quibusdam deleniti dignissimos aperiam
            adipisci unde, reprehenderit eius quisquam exercitationem.
          </p>
        </div>
        <div className="col-md-4">
          <div className="d-flex estimateSection justify-content-between m-3 p-4">
            <div>
              <p className="text-muted">Estimate Start</p>
              <big className="text-warning fw-bold">10-12-2022</big>
            </div>
            <div>
              <p className="text-muted">Estimate End</p>
              <big className="text-warning fw-bold">12-12-2022</big>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap my-4">
        <div className="col-md-8 d-flex">
          <div className="mx-2">
            <div className="bgStar">
              <img className="img-fluid" src={Ayushman} alt="" />
              <div className="m-2">
                <p>
                  {" "}
                  <big className="text-light fw-bolder">Auyshman Khurana</big>
                </p>
                <p>
                  <small>
                    <span className="text-muted">Status</span>:{" "}
                    <i className="text-muted">Pending</i>
                  </small>
                </p>
                <button className="btn btn-secondary w-100">
                  Render Group
                </button>
              </div>
            </div>
          </div>

          <div className="mx-3">
            <div className="bgStar ">
              <img className="img-fluid" src={Salman} alt="" />
              <div className="m-2">
                <p>
                  {" "}
                  <big className="text-light fw-bolder">Salman Khan</big>
                </p>
                <p>
                  <small>
                    <span className="text-secondary">Status</span>:{" "}
                    <i className="text-warning">Accepted</i>
                  </small>
                </p>
                <button onClick={handleClick} className="btn btn-warning w-100">
                  Render Group
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="" style={{ borderLeft: "1px dashed yellow" }}>
            <h5 className="text-light text-center my-3">Status</h5>
            <div className="d-flex justify-content-center align-items-center ">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbarWithChildren
                  value={50}
                  styles={buildStyles({
                    pathColor: `gold`,
                  })}
                >
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong className="text-light">50% complete</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <p className="text-warning text-center my-2">
                  Approve by Sakib Al Hasan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex my-3">
        <button className="btn btnDlt text-warning fw-bold">Delete</button>
        <Link to="/superstar-admin/pending-fan-group-Edit">
          <button className="btn btnDlt text-warning fw-bold">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default PendingGroup;
