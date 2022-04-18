import { TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import auditionSelectRoundBanner from "../../../assets/images/AuditionAdmin/audition537.png";
import downArrow from "../../../assets/images/AuditionAdmin/downArrow.png";
import ershad from "../../../assets/images/AuditionAdmin/ershad.png";
import ferdous from "../../../assets/images/AuditionAdmin/Ferdous.png";
import oni from "../../../assets/images/AuditionAdmin/oni.png";
import rafa from "../../../assets/images/AuditionAdmin/rafa.png";
import decline from "../../../assets/images/declined.png";
import sign from "../../../assets/images/sign.png";
import "./AuditionAssignedStar.css";

const AuditionAssignedStar = () => {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    // <img src={LeftArrow} alt="prevArrow" {...props} />
    <FaArrowLeft {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <FaArrowRight {...props} />
  );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
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

      <div className="my-4">
        <img
          src={auditionSelectRoundBanner}
          className="w-100 imgBorderBanner"
          alt=""
        />
      </div>

      <div className="d-flex justify-content-between p-3 beginnerRoundTitle">
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
            <h5 className="text-black p-1 mx-2">Selection for Superstar</h5>
          </div>

          <div className="row p-4">
            <div className="col-md-6">
              <h3 className="text-light">Assigned Star For mark and Comment</h3>
            </div>
            <div className="col-md-3 deskTopDate">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Select Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <div className="col-md-3 deskTopDate">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
          </div>

          <div className="bottomLineBlack"></div>

          <div className="row p-4">
            <div className="slick-parent main-slider d-flex justify-content-center">
              <Slider className="slider-width" {...settings}>
                <div className="p-3">
                  <div className="">
                    <img src={ferdous} className="w-100" alt="" />

                    <div className="starBox text-center">
                      <div className="starTitleBoxColor p-3">
                        <h5 className="text-light">Ferdous Ahmed</h5>
                        <p className="text-muted">Super Star</p>
                      </div>
                      <button className="btn btn-primary primaryBtnStyle">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div>
                    <img src={ferdous} className="w-100" alt="" />

                    <div className="starBox text-center">
                      <div className="starTitleBoxColor p-3">
                        <h5 className="text-light">Ferdous Ahmed</h5>
                        <p className="text-muted">Super Star</p>
                      </div>
                      <button className="btn btn-primary primaryBtnStyle">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div>
                    <img src={ferdous} className="w-100" alt="" />

                    <div className="starBox text-center">
                      <div className="starTitleBoxColor p-3">
                        <h5 className="text-light">Ferdous Ahmed</h5>
                        <p className="text-muted">Super Star</p>
                      </div>
                      <button className="btn btn-primary primaryBtnStyle">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div>
                    <img src={ferdous} className="w-100" alt="" />

                    <div className="starBox text-center">
                      <div className="starTitleBoxColor p-3">
                        <h5 className="text-light">Ferdous Ahmed</h5>
                        <p className="text-muted">Super Star</p>
                      </div>
                      <button className="btn btn-primary primaryBtnStyle">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div>
                    <img src={ferdous} className="w-100" alt="" />

                    <div className="starBox text-center">
                      <div className="starTitleBoxColor p-3">
                        <h5 className="text-light">Ferdous Ahmed</h5>
                        <p className="text-muted">Super Star</p>
                      </div>
                      <button className="btn btn-primary primaryBtnStyle">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="p-4 d-flex justify-content-evenly">
            <Button className="autoAssignedBtn text-dark">Auto Assigned</Button>
            <Button className="applyBtn">Apply</Button>
          </div>
        </div>

        <div className="bg-dark my-4">
          <div className="row p-4">
            <div className="col-md-6">
              <h3 className="text-light">Create Post For The User Vote</h3>
            </div>
            <div className="col-md-3 deskTopDate">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Select Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <div className="col-md-3 deskTopDate">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
          </div>

          <div className="bottomLineBlack"></div>

          <div className="">
            <div className="row p-3 mt-4">
              <div className="col-md-3 d-flex justify-content-around">
                <h4 className="text-light">Post Title</h4>
                <h4></h4>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="my-2 form-control input-gray border border-warning"
                />
              </div>
            </div>
            <div className="row p-3">
              <div className="col-md-3 d-flex justify-content-around">
                <h4 className="text-light">Post Description</h4>
                <h4></h4>
              </div>
              <div className="col-md-9">
                <textarea className="my-2 form-control input-gray border border-warning"></textarea>
              </div>
            </div>
            <div className="row p-3">
              <div className="col-md-3 d-flex justify-content-around">
                <h4 className="text-light">Post Description</h4>
                <h4></h4>
              </div>
              <div className="col-md-9 row">
                <div className="col-md-6">
                  <label class="checkBoxContainer text-light">
                    <span className="showAllVideosBorder px-3 mx-2">
                      Show All Videos
                    </span>
                    <input type="checkbox" />
                    <span class="checkmark mt-1"></span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label class="checkBoxContainer text-light">
                    <span className="showAllVideosBorder px-3 mx-2">
                      Show Only Jury Selected Videos
                    </span>
                    <input type="checkbox" />
                    <span class="checkmark mt-1"></span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label class="checkBoxContainer text-light">
                    <span className="showAllVideosBorder px-3 mx-2">
                      Show Juries Mark
                    </span>
                    <input type="checkbox" />
                    <span class="checkmark mt-1"></span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label class="checkBoxContainer text-light">
                    <span className="showAllVideosBorder px-3 mx-2">
                      Show Super Star Comment
                    </span>
                    <input type="checkbox" />
                    <span class="checkmark mt-1"></span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label class="checkBoxContainer text-light">
                    <span className="showAllVideosBorder px-3 mx-2">
                      Show Star Mark
                    </span>
                    <input type="checkbox" />
                    <span class="checkmark mt-1"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end p-3">
              <Button className="btnPost fw-bold">Post</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditionAssignedStar;
