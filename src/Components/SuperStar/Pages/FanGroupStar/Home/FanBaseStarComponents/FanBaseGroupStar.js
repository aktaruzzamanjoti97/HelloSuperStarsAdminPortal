import React from "react";

import img1 from "../../../../../../assets/images/Fanbase-img/fanBaseGroup/1.png";
import img2 from "../../../../../../assets/images/Fanbase-img/fanBaseGroup/2.png";
import img3 from "../../../../../../assets/images/Fanbase-img/fanBaseGroup/3.png";
import img4 from "../../../../../../assets/images/Fanbase-img/fanBaseGroup/4.png";
import img5 from "../../../../../../assets/images/Fanbase-img/fanBaseGroup/5.png";
import img6 from "../../../../../../assets/images/Fanbase-img/fanBaseGroup/5.png";

import { Nav, Tab } from "react-bootstrap";

const msgData = [
  {
    name: "Akter Hossain",
    fan: "Shrukh Khan",
    img: img1,
  },

  {
    name: "Junayed Hossain",
    fan: "Salman Khan",
    img: img2,
  },

  {
    name: "Taimur Alom",
    fan: "Salman Khan",
    img: img3,
  },
  {
    name: "Alamin Hossain",
    fan: "Salman Khan",
    img: img4,
  },
  {
    name: "Kamal Akram",
    fan: "Salman Khan",
    img: img2,
  },
  {
    name: "Akram",
    fan: "Shrukh Khan",
    img: img1,
  },
];
const msgData2 = [
  {
    name: "Junayed Hossain",
    fan: "Salman Khan",
    img: img2,
  },

  {
    name: "Taimur Alom",
    fan: "Shrukh Khan",
    img: img3,
  },
];

function FanBaseGroupStar() {
  return (
    <div className="my-3">
      <div className="card bg-dark fanMessageCard">
        <div className="card-body">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="d-flex justify-content-center">
              <Nav.Item>
                <Nav.Link
                  className="GroupMessengerChat"
                  style={{ cursor: "pointer" }}
                  eventKey="first"
                >
                  Members (230)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="GroupMessengerChat  ms-4"
                  style={{ cursor: "pointer" }}
                  eventKey="second"
                >
                  Admins (02)
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <hr className="m-0 p-0 bg-warning" />
            <Tab.Content className=" my-2">
              <Tab.Pane eventKey="first">
                <div className="card bg-dark">
                  <div className="card-body">
                    <div class="parentMsgDiv">
                      <div class="childMsgDiv">
                        {msgData.map((item) => {
                          return (
                            <div className="d-flex mb-3">
                              <img
                                src={item.img}
                                className="img-fluid"
                                alt=""
                              />
                              <div className="w-75 mx-2">
                                <p className="m-0 p-0">{item.name}</p>
                                <small className="m-0 p-0 text-muted">
                                  {item.fan}
                                </small>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="card bg-dark">
                  <div className="card-body">
                    <div className="parentMsgDiv">
                      <div className="childMsgDiv">
                        {msgData2.map((item) => {
                          return (
                            <div className="d-flex mb-3">
                              <img
                                src={item.img}
                                className="img-fluid"
                                alt=""
                              />
                              <div className="w-75 mx-2">
                                <p className="m-0 p-0">{item.name}</p>
                                <small className="m-0 p-0 text-muted">
                                  {item.fan}
                                </small>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
}

export default FanBaseGroupStar;

