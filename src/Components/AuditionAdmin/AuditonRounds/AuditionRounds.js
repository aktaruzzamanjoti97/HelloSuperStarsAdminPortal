import React from "react";
import { Tab, Nav } from "react-bootstrap";
import CreateEventRound from "../../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/CreateEventRound";
import PendingAuditiontest from "../../Admin/Home/Pages/AdminAudition/AuditionDasboard/Pending/PendingAuditiontest";
import AuditionAssignedStar from "../AuditionAssignedStar/AuditionAssignedStar";
import AuditionRoundDecision from "../Home/Pages/AuditionRoundDecision/AuditionRoundDecision";
import AuditionRoundDecision2 from "../Home/Pages/AuditionRoundDecision/AuditionRoundDecision2";
import AuditionAssignJury from "./AuditionAssignJury/AuditionAssignJury";
import AuditionRoundComplete from "./AuditionRoundComplete/AuditionRoundComplete";
import "./AuditionRounds.css";
import AuditonStarStatus from "./AuditionStarStatus/AuditonStarStatus";
import AuditonPending from "./AuditonPending/AuditonPending";
import VideoRound from "./VideoRound/VideoRound";

const AuditionRounds = () => {
  const [data, setData] = React.useState(0);
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="container">
          <Nav variant="pills">
            <div className="row">
              <div className="col-md-4">
                <div className="round1Tab mb-2">
                  <Nav.Item>
                    <div className="px-5 py-2">
                      <h3 className="text-warning">Round</h3>
                      <div className="text-warning  d-flex justify-content-end ">
                        <h3 className="bg-dark p-1">01</h3>
                      </div>
                    </div>
                    <Nav.Link
                      className="NavColorFan text-center"
                      eventKey="first"
                    >
                      Running
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </div>
              <div className="col-md-4">
                <div className="round1Tab mb-2">
                  <Nav.Item>
                    <div className="px-5 py-2">
                      <h3 className="text-warning">Round</h3>
                      <div className="text-warning  d-flex justify-content-end ">
                        <h3 className="bg-dark p-1">02</h3>
                      </div>
                    </div>
                    <Nav.Link
                      className="NavColorFan text-center"
                      eventKey="second"
                    >
                      Pending
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </div>
              <div className="col-md-4">
                <div className="round1Tab mb-2">
                  <Nav.Item>
                    <div className="px-5 py-2">
                      <h3 className="text-warning">Round</h3>
                      <div className="text-warning  d-flex justify-content-end ">
                        <h3 className="bg-dark p-1">03</h3>
                      </div>
                    </div>
                    <Nav.Link
                      className="NavColorFan text-center"
                      eventKey="third"
                    >
                      Pending
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </div>
            </div>
          </Nav>

          <div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {/* if Round is empty then this two component available */}

                {/*
            <CreateEventRound /> */}
                {/*
            <PendingAuditiontest /> */}

                {/* if Round is empty then this two component available */}

  {/*--------- page no 583--------- */}
                {data === 4 ? <AuditionAssignedStar data={data} setData={setData} /> : null}

  {/*--------- page no 583--------- */}



                {/*--------- page no 448--------- */}

                {data === 1 ? (
                  <VideoRound data={data} setData={setData} />
                ) : null}
                {/*
            <VideoRound /> */}
                {/*------------ page no 448--------- */}

                {/*--------- page no 451----------*/}
                {/*
            <AuditionAssignJury /> */}
                {data === 2 ? (
                  <AuditionAssignJury data={data} setData={setData} />
                ) : null}
                {/*---------- page no 451 -----------*/}

                {/* pending component start here */}
                {/* <AuditonPending /> */}
                {/* pending component end here */}

                {/*--------- page no 452----------*/}
                {/*
            <AuditonPending /> */}
                {/*---------- page no 452 -----------*/}

                {/*--------- page no 557----------*/}
                {data === 0 ? (
                  <AuditonStarStatus data={data} setData={setData} />
                ) : null}

                {data === 3 ? (
                  <AuditionRoundDecision data={data} setData={setData} />
                ) : null}



                {data === 5 ? <AuditionRoundDecision2 data={data} setData={setData} /> : null}
                {data === 6 ? <AuditionRoundComplete /> : null}

                {/*---------- page no 557 -----------*/}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="text-light">component2</div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="text-light">component3</div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default AuditionRounds;
