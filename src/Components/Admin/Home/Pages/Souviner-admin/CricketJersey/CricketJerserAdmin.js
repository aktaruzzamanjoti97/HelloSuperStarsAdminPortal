import React from "react";
import "./CricketJerseryAdmin.css";
import vector from "../../../../../../../src/assets/images/Souvenir/Vector.png";
import clock from "../../../../../../../src/assets/images/Souvenir/clock.png";
import calender from "../../../../../../../src/assets/images/Souvenir/calendar.png";
import Jersey from "../../../../../../../src/assets/images/Souvenir/jersey-1.png";
import nework from "../../../../../../../src/assets/images/Souvenir/live.png";
import person from "../../../../../../../src/assets/images/Souvenir/person.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const CricketJerserAdmin = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 mb-3">
          <h4 className="text-light">
            Cricket Jersey{" "}
            <img src={vector} className="img-fluid mx-2" alt="" />
          </h4>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            aperiam qui veritatis odit facere ipsa earum, perferendis placeat
            obcaecati quod ratione dicta deleniti unde doloribus laborum dolores
            officiis voluptate? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat ad voluptate, adipisci suscipit quo facilis
            incidunt dolores dignissimos nostrum, consequuntur doloremque et
            esse expedita optio, voluptatum accusamus eligendi autem numquam.
          </p>
          <p className="my-3 text-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            ipsa.
          </p>

          <div className="d-inline-block jersey-div">
            <div className="d-flex px-3 py-1">
              <img src={calender} className="img-fluid" alt="" />
              <div className="mx-2">
                <p className="m-0 p-0 text-light">Last Date</p>
                <h6 className="m-0 p-0 text-warning"> 21th Nov</h6>
              </div>
            </div>
          </div>
          <div className=" mx-2 d-inline-block jersey-div">
            <div className="d-flex px-3 py-1">
              <img src={clock} className="img-fluid" alt="" />
              <div className="mx-2">
                <p className="m-0 p-0 text-light">Time</p>
                <h6 className="m-0 p-0 text-warning"> 11:00 pm</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 left-slick">
          <Slider {...settings} className="text-warning">
            <div>
              <img src={Jersey} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={Jersey} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={Jersey} alt="" className="img-fluid" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="row my-5">
        <div className="container-fluid">
          <div className="card card-admin-souviner">
            <div className="card-body">
              <h5 className="text-light">
                <img src={nework} alt="" className="img-fluid mx-2" />
                Live biddings
              </h5>

              <div className="conatiner">
                <div className="row my-4">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        <div className="d-flex px-3 py-1">
                          <img
                            src={person}
                            className="img-fluid souviner-person"
                            alt=""
                          />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        {" "}
                        <div className="d-flex px-3 py-1">
                          <img src={person} className="img-fluid" alt="" />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        {" "}
                        <div className="d-flex px-3 py-1">
                          <img src={person} className="img-fluid" alt="" />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        {" "}
                        <div className="d-flex px-3 py-1">
                          <img src={person} className="img-fluid" alt="" />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        <div className="d-flex px-3 py-1">
                          <img
                            src={person}
                            className="img-fluid souviner-person"
                            alt=""
                          />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        {" "}
                        <div className="d-flex px-3 py-1">
                          <img src={person} className="img-fluid" alt="" />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        {" "}
                        <div className="d-flex px-3 py-1">
                          <img src={person} className="img-fluid" alt="" />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        {" "}
                        <div className="d-flex px-3 py-1">
                          <img src={person} className="img-fluid" alt="" />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              $160
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {" "}
                              Aslam uddin
                            </h6>
                            <small className="m-0 p-0  text-light">
                              18-12-2021 | 5:40pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="text-center my-4">
                      <Link to={'/superstar-admin/jersey-admin2'}> <button className="btn button-souviner px-5 py-2">Upfront payment</button></Link>
                     
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

export default CricketJerserAdmin;
