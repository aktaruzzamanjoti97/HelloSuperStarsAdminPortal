import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import VS from "../../../../../../assets/images/fanGroup/VS.png";
import FanGroupIcon from "../../../../../../assets/images/iconFan/expired-1.png";
import Salman from "../../../../../../assets/images/SalmanKhan.jpg";
import ShahrukhAnother from "../../../../../../assets/images/starImg/shah-rukh-khan-01.webp";
// import shahRukhAnother from "../../../../../../assets/images/starImg/shahRukhAnother.webp";
import "./CompletionBetweenStars.css";
import { Markup } from "interweave";

const CompetitionBetweenStars = () => {
  let history = useHistory();
  const {slug} = useParams();

  const [fanDetails, setFanDetails] = useState([]);
  console.log('fanDetails ', fanDetails);
  console.log('slug', slug);

  useEffect(() => {
    axios.get(`/api/admin/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        setFanDetails(res.data.fanDetails);
      }
    });
  }, [slug]);

  return (
    <>
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
          <div className="col-md-11 text-light">
            <h2>{fanDetails.group_name} </h2>
            <p>

          <Markup content={fanDetails.description} />
            </p>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-md-7 row">
            <div className="col-md-5">
              <div className="mx-2">
                <div className="bgStar">
                  <img className="img-fluid" src={`http://localhost:8000/${fanDetails.my_superstar?.image}`} alt="" />
                  <div className="m-2">
                    <p>
                      {" "}
                      <big className="text-light fw-bolder">{fanDetails.my_superstar?.first_name} {fanDetails.my_superstar?.last_name}</big>
                    </p>
                    <p>
                      <small>
                        <span className="text-muted">Status</span>:{" "}
                        <i className="text-muted">Pending</i>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={VS} alt="" />
            </div>
            <div className="col-md-5">
              <div className="mx-3">
                <div className="bgStar ">
                  <img className="img-fluid" src={`http://localhost:8000/${fanDetails.another_superstar?.image}`} alt="" />
                  <div className="m-2">
                    <p>
                      {" "}
                      <big className="text-light fw-bolder">{fanDetails.another_superstar?.first_name} {fanDetails.another_superstar?.last_name}</big>
                    </p>
                    <p>
                      <small>
                        <span className="text-secondary">Status</span>:{" "}
                        <i className="text-muted">Pending</i>
                      </small>
                    </p>

                    {/* @FIXME: Never Delete this comment */}
                    {/* <button className="btn btn-secondary w-100">Render Group</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center">
              <div className="bg-dark bgBorderManagerAuth py-2 px-5 d-flex">
                <div className="spinnerBootstrap">
                  <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className="ps-4">
                  <p className="text-light">Manager Authentication</p>
                  <h3 className="text-warning">Waiting</h3>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center my-5">
              <Link to="/superstar-admin/fangroup/view">
                {" "}
                {/* <button className="btn nameBg fw-bolder launchBtn px-5 py-2">
                  Launch Fan Group
                </button> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionBetweenStars;
