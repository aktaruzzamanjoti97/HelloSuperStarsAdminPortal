import React, { useState } from 'react';
import first from "../../../../../../assets/images/meetupEvent/1.png";
import second from "../../../../../../assets/images/meetupEvent/2.png";
import third from "../../../../../../assets/images/meetupEvent/3.png";
import clock from "../../../../../../assets/images/meetupEvent/clock-icon.png";
import hotel from "../../../../../../assets/images/meetupEvent/unsplash_MXbM1NrRqtI.png";
import vector from "../../../../../../assets/images/meetupEvent/Vector.png";
import './EventSuccess.css';
import MeetUpSuccessfulModal from './MeetUpSuccessfullModal/MeetUpSuccessfulModal';
import ReportIssuesModal from './ReportIssuesModal/ReportIssuesModal';
const EventSuccess = () => {

  const [modalShow, setModalShow] = useState(false);
  const [issueModal, setIssueModal] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card event-card">
            <img src={hotel} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-8 mb-2">
          <div className="card event-card2 shadow">
            <div className="card-body">
              <h5 className="text-light p-2">
                Le Meridian with SAK 75{" "}
                <sub className="text-warning">(offline)</sub>
              </h5>
              <p className="text-light">
                {" "}
                labore reiciendis natus repellendus, itaque iste. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Placeat id odit
                aliquam labore repellat eaque error quibusdam similique at in{" "}
              </p>
              <p className="text-light fw-bold">
                21 September 2021 | 10:00 PM-11:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card event-card2 shadow">
            <div className="p-3">
              <p className="text-light">
                <img src={clock} alt="Pineapple" />
                Remaining time
                <h6 className="mx-3 text-warning py-4">02 Day 20 hour 20min</h6>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-12">
          <div className="card bg-dark solt-card">
            <div className="card-body">
              <h3 className="text-warning">
                <img src={vector} alt="clock" className="mx-2"></img>
                Slots <sub>(80/100)</sub>
              </h3>
              <div className="row my-3">
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>

                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>


                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>

                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>



                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>



                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>

                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>


                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={first} className="img-fluid mx-2 p-1" alt="" />
                    Mahfuzul Alom
                  </p>
                </div>
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={second} className="img-fluid mx-2 p-1" alt="" />
                    Asfia Hossain
                  </p>
                </div>
                <div className="col-md-2 col-sm-3">
                  <p className="sold-small-card fw-bold">
                    <img src={third} className="img-fluid mx-2 p-1" alt="" />
                    Saddam Hossain
                  </p>
                </div>




              </div>
            </div>
          </div>
        </div>

        <div className="btns my-3">
          {/* <Link to='/superstar-admin/meetup-events'>  */}
          <button onClick={() => setModalShow(true)} className="btn btn-warning text-black fw-bold py-2">Meetup Successful</button>
          {/* </Link> */}

          <button onClick={() => setIssueModal(true)} className="btn uncomplete text-black mx-4 fw-bold py-2">Report Issue</button>
        </div>


        <MeetUpSuccessfulModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <ReportIssuesModal
          show={issueModal}
          onHide={() => setIssueModal(false)}
        />

      </div>
    </div>
  );
};

export default EventSuccess;