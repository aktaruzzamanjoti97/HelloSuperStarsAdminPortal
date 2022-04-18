import React from "react";
import { Table } from "react-bootstrap";
import action from "../../../assets/images/AuditionAdmin/action.png";
import auditionSelectRoundBanner from "../../../assets/images/AuditionAdmin/audition537.png";
import downArrow from "../../../assets/images/AuditionAdmin/downArrow.png";
import ershad from "../../../assets/images/AuditionAdmin/ershad.png";
import oni from "../../../assets/images/AuditionAdmin/oni.png";
import rafa from "../../../assets/images/AuditionAdmin/rafa.png";
import singleDownArrow from "../../../assets/images/AuditionAdmin/singleDownArrow.png";
import avatarImg from "../../../assets/images/AuditionAdmin/tableImage.png";
import decline from "../../../assets/images/declined.png";
import sign from "../../../assets/images/sign.png";
import "./AuditionSelectionRound.css";

const AuditionSelectionRound = () => {
  return (
    <div className="container">
      <h3 className="fw-bold text-muted">Submitted Content</h3>
      <div className="bottomLine"></div>

      <div className="my-4">
        <img
          src={auditionSelectRoundBanner}
          className="w-100 imgBorderBanner"
          alt=""
        />
      </div>

      <div className="d-flex justify-content-between p-3 mt-4 beginnerRoundTitle">
        <h3 className="text-light">Guitar for the beginners - Round 1</h3>

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
                  <div className="mx-3">
                    <h6 className="text-black juryName">Arafat Hossain</h6>
                    <span>Music Specialist</span>
                  </div>
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
                <button className="w-100 btn grayBg p-2">
                  <big className="text-dark fw-bold">Details</big>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3 d-flex justify-content-center">
            <div className="bg-dark cardBox">
              <div className="px-3 d-flex justify-content-start grayBg rounded-3">
                <img
                  className="img-fluid photoImgStyle photoImgStyle py-2"
                  src={rafa}
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <div className="mx-3">
                    <h6 className="text-black juryName">Arafat Hossain</h6>
                    <span>Music Specialist</span>
                  </div>
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
                <button className="w-100 btn grayBg p-2">
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
                  <div className="mx-3">
                    <h6 className="text-black juryName">Arafat Hossain</h6>
                    <span>Music Specialist</span>
                  </div>
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
                <button className="w-100 btn grayBg p-2">
                  <big className="text-dark fw-bold">Details</big>
                </button>
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
        </div>
      </div>
    </div>
  );
};

export default AuditionSelectionRound;
