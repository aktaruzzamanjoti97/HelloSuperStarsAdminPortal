import React from "react";
import { Link } from "react-router-dom";
import pendingFan from "../../../../assets/images/iconFan/expired-1.png";
import Invitation from "../../../../assets/images/Invitation.png";
import approved from "../../../../assets/images/approved.png";
import Accept from "../../../../assets/images/Accept.png";
import "./FanGroupStar.css";

const FanGroupNav = () => {
return (
<div className="mb-3 row">

    <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
        <div className="card meetupCard p-3">
            <div className="card-body d-flex justify-content-center  align-items-center">
                <tr className="d-flex">
                    <td className="ad-card-td d-flex justify-content-center align-items-center">
                        <img src={approved} width="75px" className="ad-card-img-top blur" alt="..." />
                    </td>
                    <td className="ad-card-td d-flex flex-column">
                        <small className="text-light">Accepted</small>
                        <small className=" fw-bold invitationTxt">01</small>
                    </td>
                </tr>
            </div>
            <Link to="/superstar/fan-group-accepted">
            <button className="btn btn-warning w-100">Check Status</button>
            </Link>
        </div>
    </div>

    <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
        <div className="card meetupCard p-3">
            <div className="card-body d-flex justify-content-center  align-items-center">
                <tr className="d-flex">
                    <td className="ad-card-td d-flex justify-content-center align-items-center">
                        <img src={pendingFan} width="75px" className="ad-card-img-top blur" alt="..." />
                    </td>
                    <td className="ad-card-td d-flex flex-column">
                        <small className="text-light">Rejected</small>
                        <small className=" fw-bold invitationTxt">01</small>
                    </td>
                </tr>
            </div>
            <Link to="/superstar/fan-group-rejected">
            <button className="btn btn-warning w-100">Check Status</button>
            </Link>
        </div>
    </div>

    <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
        <div className="card meetupCard p-3">
            <div className="card-body d-flex justify-content-center  align-items-center">
                <center>
                    <tr className="d-flex">
                        <td className="ad-card-td d-flex justify-content-center align-items-center">
                            <img src={Invitation} className="ad-card-img-top" alt="..." />
                        </td>
                        <td className="ad-card-td d-flex flex-column">
                            <small className="text-light">Invitation</small>
                            <small className=" fw-bold invitationTxt">01</small>
                        </td>
                    </tr>
                </center>
            </div>
            <Link to="/superstar/fan-group-invitation">
            <button className="btn btn-warning w-100">Check Status</button>
            </Link>

        </div>
    </div>

</div>
);
};

export default FanGroupNav