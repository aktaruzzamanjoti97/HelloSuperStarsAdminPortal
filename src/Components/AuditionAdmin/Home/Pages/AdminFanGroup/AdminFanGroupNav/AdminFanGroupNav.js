import React from "react";
import { Link } from "react-router-dom";
import pendingFan from "../../../../../../assets/images/iconFan/expired-1.png";
import HourGlass from "../../../../../../assets/images/iconFan/hourglass1.png";
import Invitation from "../../../../../../assets/images/iconFan/invitation2.png";
import "./AdminFanGroupNav.css";

const AdminFanGroupNav = () => {
  return (
    <div className="mb-3 row">
      <div
        title="Live Now"
        className="col-md-2 align-items-center justify-content-center Souvenir-bt "
      >
        <div className="card meetupCard p-3">
          <div className="card-body d-flex justify-content-center  align-items-center">
            <tr className="d-flex">
              <td className="ad-card-td d-flex justify-content-center align-items-center">
                <img
                  src={pendingFan}
                  width="75px"
                  className="ad-card-img-top blur"
                  alt="..."
                />
              </td>
              <td className="ad-card-td d-flex flex-column">
                <small className="text-light">Pending</small>
                <small className=" fw-bold invitationTxt">01</small>
              </td>
            </tr>
          </div>
          <Link to="/superstar-admin/pending-fan-group">
            <button className="btn btn-warning w-100">Check Status</button>
          </Link>
        </div>
      </div>

      <div
        title="Live Now"
        className="col-md-2 align-items-center justify-content-center Souvenir-bt "
      >
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
          <Link to="/superstar-admin/invitation-fan-group">
            <button className="btn btn-warning w-100">Check Status</button>
          </Link>
          {/* <Link to={{ pathname: "/superstar-admin/souvenir/product-list/approved" }} className="">
                        <button className="card-footer Souvenir-button  w-100 "
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"> Approved Products List
                        </button></Link> */}
        </div>
      </div>

      <div
        title="Live Now"
        className="col-md-2 align-items-center justify-content-center Souvenir-bt "
      >
        <div className="card meetupCard p-3">
          <div className="card-body d-flex justify-content-center  align-items-center">
            <center>
              <tr className="d-flex">
                <td className="ad-card-td  d-flex justify-content-center align-items-center">
                  <img src={HourGlass} className="ad-card-img-top" alt="..." />
                </td>
                <td className="ad-card-td d-flex flex-column">
                  <small className="text-light">Create</small>
                  <small className=" fw-bold invitationTxt">New</small>
                </td>
              </tr>
            </center>
          </div>
          <Link to="/superstar-admin/create-fan-group">
            {" "}
            <button className="btn btn-warning w-100">Create New</button>
          </Link>

          {/* <Link to='/superstar-admin/souvenir/add-products-marketPlace' className=""><button className="card-footer Souvenir-button  w-100 "
                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne"> Add products
                    </button></Link> */}
        </div>
      </div>
    </div>
  );
};

export default AdminFanGroupNav;
