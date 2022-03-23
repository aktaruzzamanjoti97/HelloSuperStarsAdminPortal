import React from "react";
import "./FanbaseAdmin1.css";
import fanBanner from "../../../assets/images/Fanbase-img/Fanbasebanner.jpg";
import { Tab, Nav } from "react-bootstrap";
import FanBaseHome from "./FanBaseComponents/FanBaseHome";
import FanBaseGroup from "./FanBaseComponents/FanBaseGroup";
import FanBaseMessenger from "./FanBaseComponents/FanBaseMessenger";
import FanBaseMedia from "./FanBaseComponents/MediaComponent/FanBaseMedia";
import ApproveComponent from "./FanBaseComponents/ApproveComponent/ApproveComponent";
import Analytics from "./AnalyticsComponents/Analytics";
import FanBaseSetting from "./FanbaseSettingComponents/FanBaseSetting";
const FanbaseAdmin1 = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [remove, setRemove] = React.useState(false);
  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center align-items-center main-fan-container  p-0 ">
        <div
          className={
            remove
              ? "fanbanner d-flex justify-content-center align-items-center d-none"
              : "fanbanner d-flex justify-content-center align-items-center"
          }
        >
          <div class="fileFan">
            <label for="input-file">
              <span>
                {" "}
                <i class="fas fa-camera mx-2"></i>Add Cover photo
              </span>
            </label>
            <input
              onClick={() => setRemove(true)}
              id="input-file"
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          </div>

          {/* <input
        onClick={()=>setRemove(true)}
       
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        /> */}
        </div>

        {selectedImage && (
          <>
            <img
              alt="not fount"
              className="img-fluid fanbanner w-100"
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
          </>
        )}
        {/* <img src={fanBanner} className='img-fluid fanbanner w-100' alt="" /> */}
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="container">
                <h2 className="text-light my-3">Shrukh Khan vs Salman khan</h2>
                <p className="text-muted">
                  Created at 12 Feb 2022 | Continue til 22 Apr 2022
                </p>

                <div className="my-3">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="d-flex justify-content-between flex-wrap"
                    >
                      <Nav.Item>
                        <Nav.Link className="NavColorFan" eventKey="first">
                          <i className="fa fa-home mx-1" aria-hidden="true"></i>
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="NavColorFan" eventKey="second">
                          <i className="fas fa-image mx-1"></i>Media
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="NavColorFan" eventKey="Third">
                          <i className="fa-solid fa-calendar-check mx-1"></i>{" "}
                          Approval
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="NavColorFan" eventKey="Four">
                          <i className="fa-solid fa-chart-line mx-1"></i>
                          Analytics
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="NavColorFan" eventKey="Fifth">
                          <i className="fa-solid fa-gear mx-1"></i> Settings
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className=" my-2">
                      <Tab.Pane eventKey="first">
                        <FanBaseHome />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <FanBaseMedia />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Third">
                        {" "}
                        <ApproveComponent />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Four">
                        {" "}
                        <Analytics></Analytics>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Fifth">
                        <FanBaseSetting />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="container my-2 ">
                <Tab.Container id="left-tabs-example" defaultActiveKey="group">
                  <Tab.Content className="my-2">
                    <Tab.Pane eventKey="group">
                      <FanBaseGroup />
                    </Tab.Pane>
                    <Tab.Pane eventKey="message">
                      <FanBaseMessenger />
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link className="MessengerChat mx-2" eventKey="group">
                        <i class="fa-solid py-2 fa-user-group"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="MessengerChat" eventKey="message">
                        <i class="fa-brands py-2 fa-facebook-messenger"></i>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanbaseAdmin1;
