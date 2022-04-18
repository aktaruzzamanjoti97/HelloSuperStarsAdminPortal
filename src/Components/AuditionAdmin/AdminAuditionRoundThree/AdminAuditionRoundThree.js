import React from "react";
import Slider from "react-slick";
import auditionSelectRoundBanner from "../../../assets/images/AuditionAdmin/audition537.png";
import diamond from "../../../assets/images/AuditionAdmin/diamondGift.png";
import downArrow from "../../../assets/images/AuditionAdmin/downArrow.png";
import ershad from "../../../assets/images/AuditionAdmin/ershad.png";
import gold from "../../../assets/images/AuditionAdmin/goldGift.png";
import leftArrow from "../../../assets/images/AuditionAdmin/leftArrow.png";
import oni from "../../../assets/images/AuditionAdmin/oni.png";
import rafa from "../../../assets/images/AuditionAdmin/rafa.png";
import rightArrow from "../../../assets/images/AuditionAdmin/rightArrow.png";
import silver from "../../../assets/images/AuditionAdmin/silverGift.png";
import decline from "../../../assets/images/declined.png";
import sign from "../../../assets/images/sign.png";
import "./AdminAuditionRoundThree.css";

const AdminAuditionRoundThree = () => {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h3 className="fw-bold text-muted">Submitted Content</h3>
      <div className="bottomLine"></div>

      <div className="my-3">
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

      <div className="row my-4">
        <div className="d-flex justify-content-between p-3 beginnerRoundTitle">
          <h3 className="text-light">
            Guitar for the beginners - Round 3 - Final Star Result
          </h3>

          <button type="button">
            <img src={downArrow} alt="" />
          </button>
        </div>

        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 my-3 d-flex justify-content-center">
              <div className="bg-dark cardBox">
                <div className="px-3 d-flex justify-content-start nameBg rounded-3">
                  <img
                    className="img-fluid arafatPic py-2"
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
                      <img
                        src={decline}
                        className="img-fluid iconJury"
                        alt=""
                      />
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
                  <img className="img-fluid arafatPic py-2" src={oni} alt="" />
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
                      <img
                        src={decline}
                        className="img-fluid iconJury"
                        alt=""
                      />
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
                  <img className="img-fluid arafatPic py-2" src={rafa} alt="" />
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
                      <img
                        src={decline}
                        className="img-fluid iconJury"
                        alt=""
                      />
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
      </div>

      <div className="row my-4">
        <div className="d-flex justify-content-between p-3 beginnerRoundTitle">
          <h3 className="text-light">
            Guitar for the beginners - Round 3 - User Result
          </h3>

          <button type="button">
            <img src={downArrow} alt="" />
          </button>
        </div>
      </div>

      <div className="row bgGray p-3 pb-5 my-4">
        <div className="d-flex justify-content-end my-3">
          <img className="mx-2" src={leftArrow} alt="" />
          <img className="mx-2" src={rightArrow} alt="" />
        </div>

        <div className="row p-4">
          <div className="slick-parent d-flex justify-content-center">
            <Slider className="slider-width" {...settings}>
              <div className="p-1">
                <div className="userResultBox d-flex p-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={rafa}
                      className="photoImgStyleRound img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="px-2">
                    <h5 className="text-light">Imdadul Haque</h5>
                    <h6>User Vote: 24k</h6>

                    <p className="text-muted">User Gift</p>
                    <div className="d-flex">
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={diamond} alt="" />
                        <span className="mx-1" style={{ color: "#8794EE" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={gold} alt="" />
                        <span className="mx-1" style={{ color: "#FEDA95" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={silver} alt="" />
                        <span className="mx-1" style={{ color: "#A6AFBA" }}>
                          215
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="userResultBox d-flex p-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={rafa}
                      className="photoImgStyleRound img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="px-2">
                    <h5 className="text-light">Imdadul Haque</h5>
                    <h6>User Vote: 24k</h6>

                    <p className="text-muted">User Gift</p>
                    <div className="d-flex">
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={diamond} alt="" />
                        <span className="mx-1" style={{ color: "#8794EE" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={gold} alt="" />
                        <span className="mx-1" style={{ color: "#FEDA95" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={silver} alt="" />
                        <span className="mx-1" style={{ color: "#A6AFBA" }}>
                          215
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="userResultBox d-flex p-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={rafa}
                      className="photoImgStyleRound img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="px-2">
                    <h5 className="text-light">Imdadul Haque</h5>
                    <h6>User Vote: 24k</h6>

                    <p className="text-muted">User Gift</p>
                    <div className="d-flex">
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={diamond} alt="" />
                        <span className="mx-1" style={{ color: "#8794EE" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={gold} alt="" />
                        <span className="mx-1" style={{ color: "#FEDA95" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={silver} alt="" />
                        <span className="mx-1" style={{ color: "#A6AFBA" }}>
                          215
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="userResultBox d-flex p-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={rafa}
                      className="photoImgStyleRound img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="px-2">
                    <h5 className="text-light">Imdadul Haque</h5>
                    <h6>User Vote: 24k</h6>

                    <p className="text-muted">User Gift</p>
                    <div className="d-flex">
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={diamond} alt="" />
                        <span className="mx-1" style={{ color: "#8794EE" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={gold} alt="" />
                        <span className="mx-1" style={{ color: "#FEDA95" }}>
                          215
                        </span>
                      </div>
                      <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                        <img src={silver} alt="" />
                        <span className="mx-1" style={{ color: "#A6AFBA" }}>
                          215
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
            </Slider>
          </div>
        </div>

        {/* <div className="col-md-4 d-flex justify-content-center">
          <div className="userResultBox d-flex p-4">
            <div className="d-flex align-items-center">
              <img src={rafa} className="photoImgStyleRound img-fluid" alt="" />
            </div>

            <div className="px-2">
              <h5 className="text-light">Imdadul Haque</h5>
              <h6>User Vote: 24k</h6>

              <p className="text-muted">User Gift</p>
              <div className="d-flex">
                <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                  <img src={diamond} alt="" />
                  <span className="mx-1" style={{ color: "#8794EE" }}>
                    215
                  </span>
                </div>
                <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                  <img src={gold} alt="" />
                  <span className="mx-1" style={{ color: "#FEDA95" }}>
                    215
                  </span>
                </div>
                <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                  <img src={silver} alt="" />
                  <span className="mx-1" style={{ color: "#A6AFBA" }}>
                    215
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="userResultBox d-flex p-4">
            <div className="d-flex align-items-center">
              <img src={rafa} className="photoImgStyleRound img-fluid" alt="" />
            </div>

            <div className="px-2">
              <h5 className="text-light">Imdadul Haque</h5>
              <h6>User Vote: 24k</h6>

              <p className="text-muted">User Gift</p>
              <div className="d-flex">
                <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                  <img src={diamond} alt="" />
                  <span className="mx-1" style={{ color: "#8794EE" }}>
                    215
                  </span>
                </div>
                <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                  <img src={gold} alt="" />
                  <span className="mx-1" style={{ color: "#FEDA95" }}>
                    215
                  </span>
                </div>
                <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                  <img src={silver} alt="" />
                  <span className="mx-1" style={{ color: "#A6AFBA" }}>
                    215
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="userResultBox d-flex p-4">
            <div className="d-flex align-items-center">
              <img src={oni} className="photoImgStyleRound img-fluid" alt="" />
            </div>

            <div className="px-2">
              <div>
                <h5 className="text-light">Imdadul Haque</h5>
                <h6>User Vote: 24k</h6>

                <p className="text-muted">User Gift</p>
                <div className="d-flex">
                  <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                    <img src={diamond} alt="" />
                    <span className="mx-1" style={{ color: "#8794EE" }}>
                      215
                    </span>
                  </div>
                  <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                    <img src={gold} alt="" />
                    <span className="mx-1" style={{ color: "#FEDA95" }}>
                      215
                    </span>
                  </div>
                  <div className="prizeBox p-1 m-1 d-flex justify-content-center">
                    <img src={silver} alt="" />
                    <span className="mx-1" style={{ color: "#A6AFBA" }}>
                      215
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="bg-dark my-3">
        <div className="nameBg p-2 rounded-3">
          <h5 className="text-black p-1 mx-2">Selection Winners</h5>
        </div>

        <div className="row p-4">
          <p className="text-light">
            <big>Select top</big>
          </p>
          <div className="col-md-8">
            {/* <input type="text" className="my-2 form-control input-gray border border-warning" /> */}
            <select
              class="form-select"
              className="my-2 form-control text-light input-gray colorSelect border border-warning"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-2">
            <button className="btn nameBg my-2 fw-bold">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuditionRoundThree;
