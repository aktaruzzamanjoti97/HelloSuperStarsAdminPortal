import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LiveNow from "./Content/LiveNow";
import Live from "../../../../../assets/images/instagram-live 1.png";
import Approved from "../../../../../assets/images/approved.png";
import Pending from "../../../../../assets/images/pending 2.png";
import Add from "../../../../../assets/images/UpcomingEvent/add 1.png";
import axios from "axios";
import Slider from "react-slick";
import "./SuperStarContent.css";

const Nav = () => {

  // Fetch Approved LiveChat
//   useEffect(() => {
//     axios.get(`/api/admin/live_chat/approved`).then((res) => {
//       if (res.status === 200) {
//         setEvents(res.data.event);
//       }
//     });

//     console.log();
//   }, []);

  return (
    <>
     
        <div className="mb-3 row">
          <div
            title="Live Now"
            className="col-md-3 align-items-center justify-content-center "
          >
            <div className="card ad-card SH-CARD-TSX">
              <div className="card-body  align-items-center">
                <center>
                  <tr>
                    <td className="ad-card-td">
                      <img
                        src={Approved}
                        className="ad-card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="ad-card-td">
                      <small className="ad-card-small">01</small>
                    </td>
                  </tr>
                </center>
              </div>
              <Link
                to="/superstar-admin/live-chat"
                className="card-footer ad-card-footer"
              >
                <button
                  className="ad-card-footer"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {" "}
                 Live Now
                </button>
              </Link>
            </div>
          </div>
          <br />

          <div
            title="Live Now"
            className="col-md-3 align-items-center justify-content-center "
          >
            <div className="card ad-card SH-CARD-TSX">
              <div className="card-body  align-items-center">
                <center>
                  <tr>
                    <td className="ad-card-td">
                      <img src={Pending} className="ad-card-img-top" alt="..." />
                    </td>
                    <td className="ad-card-td">
                      <small className="ad-card-small">01</small>
                    </td>
                  </tr>
                </center>
              </div>
              <Link
                to="/superstar-admin/live-chat/pending"
                className="card-footer ad-card-footer"
              >
                <button
                  className="ad-card-footer"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {" "}
                  Pending
                </button>
              </Link>
            </div>
          </div>
          <br />

          <div
            title="Live Now"
            className="col-md-3 align-items-center justify-content-center "
          >
            <div className="card ad-card SH-CARD-TSX">
              <div className="card-body  align-items-center">
                <center>
                  <tr>
                    <td className="ad-card-td">
                      <img src={Add} className="ad-card-img-top" alt="..." />
                    </td>
                    <td className="ad-card-td">
                      <small className="ad-card-small"></small>
                    </td>
                  </tr>
                </center>
              </div>
              <Link
                to="/superstar-admin/live-chat/add-session"
                className="ad-card-footer"
              >
                <button
                  className="card-footer ad-card-footer"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {" "}
                  Add Schedule
                </button>
              </Link>
            </div>
          </div>
        </div>

 
  
    </>
  );
};

export default Nav;