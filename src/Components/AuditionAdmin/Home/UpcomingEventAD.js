import React from "react";
import "./UpcomingEvent.css";
import goal from "../../../assets/images/UpcomingEvent/goal.png";
import calender from "../../../assets/images/UpcomingEvent/sketchbook 1 (1).png";
import addNew from "../../../assets/images/UpcomingEvent/add 1.png";
import darkImg from "../../../assets/images/UpcomingEvent/balck-img.png";
import SpinLearn from "../../../assets/images/UpcomingEvent/balhasan.jpg";
const UpcomingEventAD = () => {
  return (
    <>
      <div className="row my-3">
        <div className="col-md-6">
          <div className="card event-live-card py-1">
            <div className="card-body ">
              <h5 className="text-light">
                <img src={goal} alt="" className="img-fluid mx-2" />
                Schedule
              </h5>

              <div className="my-3 row">
                <div className="col-md-6 ">
                  <div className="card inside-card">
                    <div className="card-body text-center">
                      <img
                        src={calender}
                        alt=""
                        className="img-fluid inside-img"
                        height="70px"
                        width="70px"
                      />
                    </div>
                    <div className="my-2">
                      <h2 className="text-warning bg-black text-center py-2 m-0">
                        26 days
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="card inside-card">
                    <div className="card-body text-center">
                      <img
                        src={addNew}
                        alt=""
                        className="img-fluid inside-img"
                        height="70px"
                        width="70px"
                      />
                    </div>
                    <div className="card-body">
                      <div className="btn btn-warning w-100 fw-bold">
                        Add New
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="card event-live-card">
            <div className="card-body ">
              <h5 className="text-light">
                <img src={goal} alt="" className="img-fluid mx-2" />
                Agreement
              </h5>

              <div className=" row ">
                <div className="col-md-6 ">
                  <img
                    src={darkImg}
                    alt=""
                    classNae="img-fluid"
                    height="170px"
                    width="90%"
                  />
                </div>
                <div className="col-md-6 ">
                  <div
                    className="card"
                    style={{ background: "#2D2D2D", border: "none" }}
                  >
                    <div className="card-body">
                      <p className="text-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aperiam atque sit accusamus adipisci enim!
                        Voluptatum recusandae porro excepturi odio
                        exercitationem!
                      </p>
                    </div>
                  </div>
                 
                </div>
                
              </div>

              <div className="row">
              <button className=' btn btn-warning fw-bold  mx-2 exp'>Explore</button>
              </div>
           
            </div>
         
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <div className="card event-live-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="card inside-card2">
                      <div className="learn-container">
                      <img
                      src={SpinLearn}
                      className="img-fluid spinlearn"
                      alt=""
                    />
                     <div className="bottomright text-light">
                        <h6 className='p-2 '>20 <small>th</small> <br></br> January </h6>
                        
                         </div>
                      </div>
                  
                    <div className="card-body">
                      <h5 className="text-light text-center">How to Spin</h5>
                      <h6 className="text-warning text-center">
                        Learning seassion
                      </h6>
                      <div className="text-center">
                        <button className="btn btn-warning fw-bold my-3">
                          <span className="mx-2">
                            <i className="fas fa-envelope"></i>
                          </span>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="card inside-card2">
                      <div className="learn-container">
                      <img
                      src={SpinLearn}
                      className="img-fluid spinlearn"
                      alt=""
                    />
                     <div className="bottomright text-light">
                        <h6 className='p-2 '>20 <small>th</small> <br></br> January </h6>
                        
                         </div>
                      </div>
                  
                    <div className="card-body">
                      <h5 className="text-light text-center">How to Spin</h5>
                      <h6 className="text-warning text-center">
                        Learning seassion
                      </h6>
                      <div className="text-center">
                        <button className="btn btn-warning fw-bold my-3">
                          <span className="mx-2">
                            <i className="fas fa-envelope"></i>
                          </span>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="card inside-card2">
                      <div className="learn-container">
                      <img
                      src={SpinLearn}
                      className="img-fluid spinlearn"
                      alt=""
                    />
                     <div className="bottomright text-light">
                        <h6 className='p-2 '>20 <small>th</small> <br></br> January </h6>
                        
                         </div>
                      </div>
                  
                    <div className="card-body">
                      <h5 className="text-light text-center">How to Spin</h5>
                      <h6 className="text-warning text-center">
                        Learning seassion
                      </h6>
                      <div className="text-center">
                        <button className="btn btn-warning fw-bold my-3">
                          <span className="mx-2">
                            <i className="fas fa-envelope"></i>
                          </span>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="card inside-card2">
                      <div className="learn-container">
                      <img
                      src={SpinLearn}
                      className="img-fluid spinlearn"
                      alt=""
                    />
                     <div className="bottomright text-light">
                        <h6 className='p-2 '>20 <small>th</small> <br></br> January </h6>
                        
                         </div>
                      </div>
                  
                    <div className="card-body">
                      <h5 className="text-light text-center">How to Spin</h5>
                      <h6 className="text-warning text-center">
                        Learning seassion
                      </h6>
                      <div className="text-center">
                        <button className="btn btn-warning fw-bold my-3">
                          <span className="mx-2">
                            <i className="fas fa-envelope"></i>
                          </span>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEventAD;
