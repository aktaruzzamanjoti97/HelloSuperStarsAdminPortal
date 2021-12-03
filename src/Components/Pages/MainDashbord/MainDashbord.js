import React from "react";
import Card1LeftsideBar from "./components/Card1LeftsideBar";
import Card2LeftsideBar from "./components/Card2LeftsideBar";
import bank1 from "../../../assets/images/RightSidebar/1.png";
import bank2 from "../../../assets/images/RightSidebar/2.jpg";
// import graph from "../../../assets/images/RightSidebar/canvas 1.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./MainDashbord.css";
import MonthCard from "./components/MonthCard";
import HistoryCard from "./components/HistoryCard";
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
              {/* Balancea and transfer card start here */}
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="card bg-dark my-3 card-dashbord">
                  <div className="card-body mb-2">
                    <h5 className="text-light">Balance</h5>
                    <h2 className="text-warning">$ 14,500</h2>
                    <span className="card-link text-light">
                      <span>
                        <i className="fas fa-arrow-up mx-2 p-1 bg-secondary"></i>
                      </span>
                      +3200.0
                    </span>
                    <span className="card-link text-light">
                      <span>
                        <i className="fas fa-arrow-down mx-2 p-1 bg-secondary"></i>
                      </span>
                      -0.000
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-8">
                <div className="card bg-dark my-3 card-dashbord">
                  <div className="card-body">
                    <h5 className="text-light">Transfer to</h5>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      margin={0}
                      items={6}
                      nav
                    >
                      <div className="item">
                        <div className="imgItem">
                          <img
                            src={bank1}
                            className="img-fluid carousel-img"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgItem">
                          <img
                            src={bank2}
                            className="img-fluid carousel-img "
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgItem">
                          <img
                            src={bank1}
                            className="img-fluid carousel-img"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="item">
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
      {/* Balancea and transfer card start here */}

 {/* graph and History card start here
  */}
            <div className="row my-4">
              <div className="col-md-12 col-lg-8 mb-3">
              <MonthCard />
              </div>

              <div className="col-md-12 col-lg-4 ">
               <HistoryCard />
              </div>
            </div>
             {/* graph and History card end here
  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashbord;
