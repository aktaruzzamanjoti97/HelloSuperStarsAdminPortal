import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rejected from "../../../../assets/images/fanGroup/Rejected.png";
import Invitation from "../../../../assets/images/fanGroup/Invitation.png";
import Accept from "../../../../assets/images/fanGroup/Accept.png";
// import approved from "../../../../assets/images/approved.png";
import "./FanGroupStar.css";
import axios from "axios";

const FanGroupNav = () => {

    const [allFanAccept, setAllFanAccept] = useState([]);
    const [allFanReject, setAllFanReject] = useState([]);
    const [allFanActive, setAllFanActive] = useState([]);

    console.log("Length ", allFanAccept.length)

    useEffect(() => {

        axios.get("/api/star/fan/group/starlist/status").then(res => {
          if (res.data.status === 200) {
            console.log( res.data);

            setAllFanAccept(res.data.starApproved);
            setAllFanActive(res.data.starActive);
            setAllFanReject(res.data.starRejected);
    
          }
        });
    
    }, []);

return (
<div className="mb-3 row">

    <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
        <div className="card meetupCard p-3">
            <div className="card-body d-flex justify-content-center  align-items-center">
                <tr className="d-flex">
                    <td className="ad-card-td d-flex justify-content-center align-items-center">
                        <img src={Accept} width="75px" className="ad-card-img-top blur" alt="..." />
                    </td>
                    <td className="ad-card-td d-flex flex-column">
                        <small className="text-light">Accepted</small>
                        <small className=" fw-bold invitationTxt">{ allFanAccept.length }</small>
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
                        <img src={Rejected} width="75px" className="ad-card-img-top blur" alt="..." />
                    </td>
                    <td className="ad-card-td d-flex flex-column">
                        <small className="text-light">Rejected</small>
                        <small className=" fw-bold invitationTxt">{ allFanReject.length }</small>
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
                            <small className=" fw-bold invitationTxt">{ allFanActive.length }</small>
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