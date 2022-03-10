import React from "react";
import "./FanbaseAdmin1.css";
import fanBanner from "../../../assets/images/Fanbase-img/Fanbasebanner.jpg";
import { Tab, Nav } from "react-bootstrap";
import FanBaseHome from "./FanBaseComponents/FanBaseHome";
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
                        <h1 className="text-warning">
                          Media component here
                          </h1>
                        </Tab.Pane>
                      <Tab.Pane eventKey="Third"> <h1 className="text-warning">
                         Approval component here
                          </h1></Tab.Pane>
                      <Tab.Pane eventKey="Four"> <h1 className="text-warning">
                        Analytics Compoenent here
                          </h1></Tab.Pane>
                      <Tab.Pane eventKey="Fifth">
                      <h1 className="text-warning">
                        Setting component here
                          </h1></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <div className="col-md-4 bg-info">
              right content
              <h3>Messenger content</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanbaseAdmin1;
