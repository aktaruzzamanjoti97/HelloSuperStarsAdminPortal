import React from "react";
import { Tab, Nav } from "react-bootstrap";
import AuditionAssignJury from "./AuditionAssignJury/AuditionAssignJury";
import "./AuditionRounds.css";
import AuditonStarStatus from "./AuditionStarStatus/AuditonStarStatus";
import AuditonPending from "./AuditonPending/AuditonPending";
import VideoRound from "./VideoRound/VideoRound";
const AuditionRounds = () => {
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
                {/*--------- page no 448--------- */}
                {/* <VideoRound />  */}
                {/*------------ page no 448--------- */}

                {/*--------- page no 451----------*/}
                {/* <AuditionAssignJury /> */}
                {/*---------- page no 451 -----------*/}

                {/*--------- page no 452----------*/}
                {/* <AuditonPending /> */}
                {/*---------- page no 452 -----------*/}

                {/*--------- page no 557----------*/}
                <AuditonStarStatus />
                {/*---------- page no 557 -----------*/}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {" "}
                <div className="text-light">component2</div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                {" "}
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
