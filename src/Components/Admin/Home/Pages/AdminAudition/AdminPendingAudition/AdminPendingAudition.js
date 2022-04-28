import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import ReactPlayer from "react-player";
import pendingBanner from "../../../../../../assets/images/pendingBannerAudio.png";
import demo from "../../../../../../assets/images/pendingIcons/demo.png";
import finish from "../../../../../../assets/images/pendingIcons/finish.png";
import jury from "../../../../../../assets/images/pendingIcons/jury.png";
import star from "../../../../../../assets/images/pendingIcons/star.png";
import start from "../../../../../../assets/images/pendingIcons/start.png";
import JuryJudgePanel from '../../../../../Reuseable/JuryJudgePanel'
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Markup } from "interweave";
import moment from "moment";


const AdminPendingAudition = () => {
  const history = useHistory();

  const { id } = useParams();

  const [pending_audition, setPendingAudition] = useState([]);

  useEffect(() => {
    axios.get(`/api/admin/audition/details/${id}`).then((res) => {
      if (res.data.status === 200) {
        console.log("pending details", res.data.pending_audition);
        setPendingAudition(res.data.pending_audition);
      }
    });
  }, []);

  return (
    <>
      {pending_audition?.map((audition) => (
        <div className="container-fluid">
          <h2 className="text-white">Request for approval</h2>
          <div className="requestApprovalBottomLine mb-4"></div>

          <div className="mainBorderPending p-5">
            <h3 className="text-primary fw-bolder my-2">{audition.title}</h3>
            <p className="text-light my-2">
              <Markup content={audition.description} />
            </p>

            <div className="my-3">
              <img
                src={`http://localhost:8000/${audition.banner}`}
                className="img-fluid imgPending my-3 w-100"
                alt=""
              />
              <ReactPlayer
                className="mt-3"
                style={{
                  border: "2px solid gold",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                url={`http://localhost:8000/${audition.video}`}
                playing={false}
                volume={1}
                width="100%"
                // height="320px"
              />
            </div>
            <div className="row">
              {/* for judge  */}
              {audition.judge ? (
                <JuryJudgePanel
                  img={star}
                  title="Judge Panel"
                  data={audition?.judge}
                />
              ) : (
                <></>
              )}
              {/* for jury  */}
              {audition.jury ? (
                <JuryJudgePanel
                  img={jury}
                  title="Jury Panel"
                  data={audition?.jury}
                />
              ) : (
                <></>
              )}
              {/* for admin  */}
              {audition.admin ? (
                <JuryJudgePanel
                  img={jury}
                  title="Admins"
                  data={audition?.admin}
                  type="admin"
                />
              ) : (
                <></>
              )}
            </div>

            <div className="row">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <Card style={{ width: "18rem" }} className="my-2">
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex juryItem justify-content-center">
                      <img className="demoStar" src={start} alt="" />
                      <div className="mx-2">
                        <p className="text-light">Starts</p>
                        <h5 className="text-light fw-bold">
                          {moment(audition.start_time).format("LL")}
                        </h5>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <Card style={{ width: "18rem" }} className="my-2">
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex juryItem justify-content-center">
                      <img className="demoStar" src={finish} alt="" />
                      <div className="mx-2">
                        <p className="text-light">Ends</p>
                        <h5 className="text-light fw-bold">
                          {moment(audition.end_time).format("LL")}
                        </h5>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button className="p-2 btn btn-warning fw-bold">Pending</button>
            </div>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default AdminPendingAudition;
