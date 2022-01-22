import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import MeetupImage1 from "../../../../../assets/images/MeetupImages/unsplash_MXbM1NrRqtI.png";
import LeMerridian from "../../../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png";
import Session from "../../../../../assets/images/MeetupImages/unsplash_YC8qqp50BdA.png";
import EnterImage from "../../../../../assets/images/enter 1.png";
import LearnSessionNaveStar from "../LearnSessionNaveStar";

const ApprovedRequestList = () => {
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
  return (
    <>
      <div className="slick-parent d-flex justify-content-center">
        <Slider className="slider-width" {...settings}>
          <Link to="/superstar/learning-session/request/view">
            <div className="p-3">
              <div className="completedMeetupBlack">
                <img src={MeetupImage1} className="img-fluid" alt="" />
                <div className="p-3">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-white">Friday Evening with SAH75</h5>
                    <img className="img-fluid" src={EnterImage} alt="" />
                  </div>

                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                </div>
              </div>
            </div>
          </Link>
          
          <div className="p-3">
            <div className=" completedMeetupBlack">
              <img src={Session} className="img-fluid" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5 className="text-white">Raddusson Blue</h5>
                  <img className="img-fluid" src={EnterImage} alt="" />
                </div>

                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className=" completedMeetupBlack">
              <img src={LeMerridian} className="img-fluid" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5 className="text-white">Le Merridian 11.11</h5>
                  <img className="img-fluid" src={EnterImage} alt="" />
                </div>

                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className=" completedMeetupBlack">
              <img src={Session} className="img-fluid" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5 className="text-white">Friday Evening with SAH75</h5>
                  <img className="img-fluid" src={EnterImage} alt="" />
                </div>

                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className=" completedMeetupBlack">
              <img src={Session} className="img-fluid" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>Session Moneyheist</h5>
                  <img className="img-fluid" src={EnterImage} alt="" />
                </div>

                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className=" completedMeetupBlack">
              <img src={MeetupImage1} className="img-fluid" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>Friday Evening with SAH75</h5>
                  <img className="img-fluid" src={EnterImage} alt="" />
                </div>

                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className=" completedMeetupBlack">
              <img src={MeetupImage1} className="img-fluid" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>Friday Evening with SAH75</h5>
                  <img className="img-fluid" src={EnterImage} alt="" />
                </div>

                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className=" completedMeetupBlack">
              <img src={MeetupImage1} className="img-fluid" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5 className="text-white">Friday Evening with SAH75</h5>
                  <img className="img-fluid" src={EnterImage} alt="" />
                </div>

                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ApprovedRequestList;

