import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import auditionSelectRoundBanner from "../../../../../assets/images/AuditionAdmin/audition537.png";
import singleDownArrow from "../../../../../assets/images/AuditionAdmin/singleDownArrow.png";
import diamond from "../../../../../assets/images/AuditionAdmin/diamondGift.png";
import downArrow from "../../../../../assets/images/AuditionAdmin/downArrow.png";
import ershad from "../../../../../assets/images/AuditionAdmin/ershad.png";
import gold from "../../../../../assets/images/AuditionAdmin/goldGift.png";
import leftArrow from "../../../../../assets/images/AuditionAdmin/leftArrow.png";
import oni from "../../../../../assets/images/AuditionAdmin/oni.png";
import rafa from "../../../../../assets/images/AuditionAdmin/rafa.png";
import rightArrow from "../../../../../assets/images/AuditionAdmin/rightArrow.png";
import silver from "../../../../../assets/images/AuditionAdmin/silverGift.png";
import iconStar from "../../../../../assets/images/AuditionAdmin/starIcon.png";
import decline from "../../../../../assets/images/declined.png";
import sign from "../../../../../assets/images/sign.png";
import action from "../../../../../assets/images/AuditionAdmin/action.png";

import avatarImg from "../../../../../assets/images/AuditionAdmin/tableImage.png";
import { Table } from "react-bootstrap";

function AuditionRoundDecision2({ data, setData }) {
  return (
    <div>
      <div className="my-4">
        <img
          src={auditionSelectRoundBanner}
          className="w-100 imgBorderBanner"
          alt=""
        />
      </div>

      <div className="d-flex justify-content-between p-3 beginnerRoundTitle">
        <h3 className="text-light">
          Guitar for the beginners - Round 3 - Final Jury Result
        </h3>

        <button type="button">
          <img src={downArrow} alt="" />
        </button>
      </div>

      <div className="">
        <div className="row mb-5">
          <div className="col-md-4 my-3 d-flex justify-content-center">
            <div className="bg-dark cardBox">
              <div className="px-3 d-flex justify-content-start titleBorderHeader rounded-3">
                <img
                  className="img-fluid photoImgStyle py-2"
                  src={oni}
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <h6 className="mx-3 text-black juryName">Arafat Hossain</h6>
                </div>
              </div>
              <div className="threeF m-3  p-2 rounded-3">
                <div className="d-flex ">
                  <button className="">
                    <i className="fa-solid fa-video text-warning iconJuryText"></i>
                  </button>

                  <span className="mx-3">
                    <span>Total Videos</span>
                    <h5>
                      <big className="text-warning">200</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="cFour m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={sign} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Selected Videos</span>
                    <h5>
                      <big className="text-warning">200</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="ffdNine m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={decline} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Rejected Videos</span>
                    <h5>
                      <big className="text-warning">100</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="m-3">
                <button className="w-100 btn nameBg p-2">
                  <big className="text-dark fw-bold">Details</big>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3 d-flex justify-content-center">
            <div className="bg-dark cardBox">
              <div className="px-3 d-flex justify-content-start nameBg rounded-3">
                <img
                  className="img-fluid photoImgStyle photoImgStyle py-2"
                  src={rafa}
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <h6 className="mx-3 text-black juryName">Arafat Hossain</h6>
                </div>
              </div>
              <div className="threeF m-3  p-2 rounded-3">
                <div className="d-flex ">
                  <button className="">
                    <i className="fa-solid fa-video text-warning iconJuryText"></i>
                  </button>

                  <span className="mx-3">
                    <span>Total Videos</span>
                    <h5>
                      <big className="text-warning">200</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="cFour m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={sign} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Selected Videos</span>
                    <h5>
                      <big className="text-warning">200</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="ffdNine m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={decline} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Rejected Videos</span>
                    <h5>
                      <big className="text-warning">100</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="m-3">
                <button className="w-100 btn nameBg p-2">
                  <big className="text-dark fw-bold">Details</big>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3 d-flex justify-content-center">
            <div className="bg-dark cardBox">
              <div className="px-3 d-flex justify-content-start titleBorderHeader rounded-3">
                <img
                  className="img-fluid photoImgStyle py-2"
                  src={ershad}
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <h6 className="mx-3 text-black juryName">Arafat Hossain</h6>
                </div>
              </div>
              <div className="threeF m-3  p-2 rounded-3">
                <div className="d-flex ">
                  <button className="">
                    <i className="fa-solid fa-video text-warning iconJuryText"></i>
                  </button>

                  <span className="mx-3">
                    <span>Total Videos</span>
                    <h5>
                      <big className="text-warning">200</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="cFour m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={sign} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Selected Videos</span>
                    <h5>
                      <big className="text-warning">200</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="ffdNine m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={decline} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Rejected Videos</span>
                    <h5>
                      <big className="text-warning">100</big>
                    </h5>
                  </span>
                </div>
              </div>
              <div className="m-3">
                <button className="w-100 btn nameBg p-2">
                  <big className="text-dark fw-bold">Details</big>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark my-3">
        <div className="nameBg p-2 rounded-3">
          <h5 className="text-black p-1 mx-2">Selection for Next Round</h5>
        </div>

        <div className="row p-4">
          <div className="col-md-8">
            <input
              type="text"
              className="my-2 form-control input-gray border border-warning"
            />
          </div>
          <div className="col-md-4">
            <button className="btn nameBg my-2 fw-bold">Apply</button>
          </div>
        </div>

        <div className="bg-dark my-3">
          <div className="row p-4">
            <div className="col-md-8">
              <input
                type="text"
                className="my-2 form-control input-gray border border-warning"
              />
            </div>
            <div className="col-md-4">
              <button className="btn viewListBtn my-2 fw-bold">
                View List <img src={singleDownArrow} alt="" />{" "}
              </button>
            </div>
          </div>

          <div className="row p-4">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th className="text-primary">Photo</th>
                  <th className="text-primary"> Name</th>
                  <th className="text-primary">Mobile</th>
                  <th className="text-primary">Email</th>
                  <th className="text-primary">Mart</th>
                  <th className="text-primary">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="photoImgStyle img-fluid"
                      src={avatarImg}
                      alt=""
                    />
                  </td>
                  <td>Akhil Hossain</td>
                  <td>01635431430</td>
                  <td>joti@gmail.com</td>
                  <td>86</td>
                  <td>
                    <button>
                      <img src={action} alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          {/* <div className="row p-4">
            <div className="row ">
              <div className="col-md-8">
                <input
                  type="text"
                  className="my-2 form-control input-gray border border-warning"
                />
              </div>
              <div className="col-md-4">
                <button className="btn nameBg my-2 fw-bold">View List</button>
              </div>
            </div>
            <p className="text-light">Message for the selected User</p>
            <div className="col-md-12">
             
              <input
                type="text"
                className="my-2 form-control input-gray border border-warning"
              />
 
            </div>
          </div> */}

          <center>
            <button
              //   onClick={() => setData(4)}
              onClick={() => setData(6)}
              className="btn nameBg my-2 px-5 mb-2 fw-bold"
            >
              Send
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default AuditionRoundDecision2;
