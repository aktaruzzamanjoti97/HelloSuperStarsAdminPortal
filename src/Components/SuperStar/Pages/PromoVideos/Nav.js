import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LiveNow from "./Content/LiveNow";
import Live from "../../../../assets/images/instagram-live 1.png";
import Approved from "../../../../assets/images/approved.png";
import Pending from "../../../../assets/images/pending 2.png";
import Add from "../../../../assets/images/UpcomingEvent/add 1.png";
import axios from "axios";
import Slider from "react-slick";
import "./SuperStarContent.css";

const Nav = () => {

  const [approved,setApproved]=useState('');
  const [pending,setPeding]=useState('');

  //Fetch Approved LiveChat
  useEffect(() => {
    axios.get(`/api/star/promoVideo/count`).then((res) => {
      if (res.status === 200) {
        setApproved(res.data.liveTotal);
        setPeding(res.data.pendingTotal);
      }
    });

    console.log();
  }, []);

  return (
    <>
     
        <div className="mb-3 row">
          <div
            title="Live Now"
            className="col-md-3 align-items-center justify-content-center "
          >
            <div className="card livechat-card SH-CARD-TSX">
              <div className="card-body  align-items-center">
                <center>
                  <tr>
                    <td className="livechat-card-td">
                      <img
                        src={Approved}
                        className="livechat-card-img-top mx-1"
                        alt="..."
                      />
                    </td>
                    <td className="livechat-card-td">
                      <h4 className="livechat-card-small fw-blod">{approved}</h4>
                    </td>
                  </tr>
                </center>
              </div>
              <Link
                to="/superstar/live/promoVideo"
                className="card-footer livechat-card-footer"
              >
                <button
                  className="livechat-card-footer"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  
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
            <div className="card livechat-card SH-CARD-TSX">
              <div className="card-body  align-items-center">
                <center>
                  <tr>
                    <td className="livechat-card-td">
                      <img src={Pending} className="livechat-card-img-top" alt="..." />
                    </td>
                    <td className="livechat-card-td">
                    <h4 className="livechat-card-small fw-blod">{pending}</h4>
                    </td>
                  </tr>
                </center>
              </div>
              <Link
                to="/superstar/pending/promoVideo"
                className="card-footer livechat-card-footer"
              >
                <button
                  className="livechat-card-footer"
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

          {/*<div*/}
          {/*  title="Live Now"*/}
          {/*  className="col-md-3 align-items-center justify-content-center "*/}
          {/*>*/}
          {/*  <div className="card livechat-card SH-CARD-TSX">*/}
          {/*    <div className="card-body  align-items-center">*/}
          {/*      <center>*/}
          {/*        <tr>*/}
          {/*          <td className="livechat-card-td">*/}
          {/*            <img src={Add} className="livechat-card-img-top" alt="..." />*/}
          {/*          </td>*/}
          {/*          <td className="livechat-card-td">*/}
          {/*            <small className="livechat-card-small"></small>*/}
          {/*          </td>*/}
          {/*        </tr>*/}
          {/*      </center>*/}
          {/*    </div>*/}
          {/*    <Link*/}
          {/*      to="/superstar/post/create"*/}
          {/*      className="livechat-card-footer"*/}
          {/*    >*/}
          {/*      <button*/}
          {/*        className="card-footer livechat-card-footer"*/}
          {/*        data-bs-toggle="collapse"*/}
          {/*        data-bs-target="#collapseOne"*/}
          {/*        aria-expanded="true"*/}
          {/*        aria-controls="collapseOne"*/}
          {/*      >*/}
          {/*        {" "}*/}
          {/*        Create Post*/}
          {/*      </button>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}

          
        </div>

 
  
    </>
  );
};

export default Nav;
