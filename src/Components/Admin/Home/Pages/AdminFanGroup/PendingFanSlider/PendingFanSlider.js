import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import bannerVs from "../../../../../../assets/images/bannerVs.png";
import Session from "../../../../../../assets/images/email.png";
import EnterImage from "../../../../../../assets/images/enter 1.png";
import "./PendingFanSlider.css";

const PendingFanSlider = () => {
  let history = useHistory();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const handleChange = () => {
    history.push("/superstar-admin/pending-fan-group-Edit-delete");
  };

  return (
    <div>
      <div className="slick-parent d-flex justify-content-center">
        <Slider className="slider-width" {...settings}>
          <div className="p-3">
            <div className="completedMeetupBlack">
              <div className="card-body">
                <center className="d-flex justify-content-center align-items-center">
                  <img
                    src={Session}
                    className="img-fluid ADImgSchedule"
                    style={{ width: "100px" }}
                    alt=""
                  />
                  <div class="centeredImgCl fw-bold mt-4 ms-3">25</div>
                </center>
              </div>

              <img
                src={bannerVs}
                className="img-fluid"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3 pendingBg">
                {/* <div className="d-flex justify-content-center ApprovedAdSchedule">
                          <p className="fw-bold mt-4">February , 2022</p>
                      </div> */}
                <div className="d-flex justify-content-center">
                  <h5 className="fw-bolder mt-4">February , 2022</h5>

                  <img
                    onClick={handleChange}
                    className="img-fluid mx-2 mt-2"
                    src={EnterImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PendingFanSlider;
