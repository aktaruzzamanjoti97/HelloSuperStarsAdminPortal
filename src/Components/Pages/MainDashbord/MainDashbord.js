import React from "react";
import Card1LeftsideBar from "./components/Card1LeftsideBar";
import Card2LeftsideBar from "./components/Card2LeftsideBar";
import bank1 from "../../../assets/images/RightSidebar/1.png";
import bank2 from "../../../assets/images/RightSidebar/2.jpg";
import graph from "../../../assets/images/RightSidebar/canvas 1.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./MainDashbord.css";
const MainDashbord = () => {
  return (
    <div className="custom-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Card1LeftsideBar />
            <Card2LeftsideBar />
          </div>

          <div className="col-md-8 ">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div class="card bg-dark my-3 card-dashbord">
                  <div class="card-body mb-2">
                    <h5 className="text-light">Balance</h5>
                    <h2 className="text-warning">$ 14,500</h2>
                    <span class="card-link text-light">
                      <span>
                        <i class="fas fa-arrow-up mx-2 p-1 bg-secondary"></i>
                      </span>
                      +3200.0
                    </span>
                    <span class="card-link text-light">
                      <span>
                        <i class="fas fa-arrow-down mx-2 p-1 bg-secondary"></i>
                      </span>
                      -0.000
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-8">
                <div class="card bg-dark my-3 card-dashbord">
                  <div class="card-body">
                    <h5 className="text-light">Transfer to</h5>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      margin={0}
                      items={6}
                      nav
                    >
                      <div class="item">
                        <div className="imgItem">
                          <img
                            src={bank1}
                            className="img-fluid carousel-img"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="item">
                        <div className="imgItem">
                          <img
                            src={bank2}
                            className="img-fluid carousel-img "
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="item">
                        <div className="imgItem">
                          <img
                            src={bank1}
                            className="img-fluid carousel-img"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="item">
                        <div className="imgItem">
                          <img
                            src={bank2}
                            className="img-fluid carousel-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-12 col-lg-8 mb-3">
                <div class="card card-dashbord bg-dark">
                  <div class="card-body">
                    <h5 className="text-light">Monthly Earning</h5>
                    <div className="text-center">
                      <img src={graph} className="img-fluid" alt="" />
                      <button className="btn btn-warning my-3 fw-bold px-4">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4 ">
                <div class="card card-dashbord bg-dark">
                  <div class="card-body">
                    <h5 className="text-light">History</h5>
                    <div className="loopCard mx-auto">
                      <div class="card money-card">
                        <div class="container d-flex justify-content-between">
                          <small className="text-light my-1 pending">
                            Pending
                          </small>
                          <p className="text-light my-1 ">2:20 pm</p>
                        </div>
                        <div class="container d-flex justify-content-between">
                          <h4 className="text-warning">$14,500</h4>
                          <p className="text-light">21-10-2021</p>
                        </div>
                      </div>

                      <div class="card money-card my-3">
                        <div class="container d-flex justify-content-between">
                          <small className="text-light my-1 transferred">
                            Transferred
                          </small>
                          <p className="text-light my-1 ">2:20 pm</p>
                        </div>
                        <div class="container d-flex justify-content-between">
                          <h4 className="text-warning">$14,500</h4>
                          <p className="text-light">21-10-2021</p>
                        </div>
                      </div>

                      <div class="card money-card my-3">
                        <div class="container d-flex justify-content-between">
                          <small className="text-light my-1 transferred">
                            Transferred
                          </small>
                          <p className="text-light my-1 ">2:20 pm</p>
                        </div>
                        <div class="container d-flex justify-content-between">
                          <h4 className="text-warning">$14,500</h4>
                          <p className="text-light">21-10-2021</p>
                        </div>
                      </div>

                      <div class="card money-card my-3">
                        <div class="container d-flex justify-content-between">
                          <small className="text-light my-1 transferred">
                            Transferred
                          </small>
                          <p className="text-light my-1 ">2:20 pm</p>
                        </div>
                        <div class="container d-flex justify-content-between">
                          <h4 className="text-warning">$14,500</h4>
                          <p className="text-light">21-10-2021</p>
                        </div>
                      </div>

                      <div class="card money-card my-3">
                        <div class="container d-flex justify-content-between">
                          <small className="text-light my-1 transferred">
                            Transferred
                          </small>
                          <p className="text-light my-1 ">2:20 pm</p>
                        </div>
                        <div class="container d-flex justify-content-between">
                          <h4 className="text-warning">$14,500</h4>
                          <p className="text-light">21-10-2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashbord;
