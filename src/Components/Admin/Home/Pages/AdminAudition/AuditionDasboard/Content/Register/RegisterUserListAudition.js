import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import action from "../../../../../../../../assets/images/AuditionAdmin/action.png";
import avatarImg from "../../../../../../../../assets/images/AuditionAdmin/tableImage.png";
import EnterImage from "../../../../../../../../assets/images/unsplash_hUHzaiAHuUc.png";
import "./RegisterUserListAudition.css";
import { Table } from "react-bootstrap";

function RegisterUserListAudition() {
  const [meetupEvents, setMeetupEvents] = useState([]);

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
      <div className="row">
        <h4 className="text-light fw-bold ">Register User List</h4>
        <div className="bottomBorderBlack"></div>
      </div>
      <div className="">
        <div className=" row p-2">
          
          <div className="p-3 col-md-3">
            <div className="card bg-dark completedMeetupBlack GoldBorder">
              <img
                src={EnterImage}
                className="img-fluid p-2 ImgBlue"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                <center>
                  <h5 className="text-white text-center">Guitar Competition</h5>
                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.{" "}
                  </p>
                  <Link to='/audition-admin/audition/register-user-list'><button className="btn btn-warning PTBDn px-5 py-2 mt-4">Action</button></Link>
                </center>
              </div>
            </div>
          </div>

          <div className="p-3 col-md-3">
            <div className="card bg-dark completedMeetupBlack GoldBorder">
              <img
                src={EnterImage}
                className="img-fluid p-2 ImgBlue"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                <center>
                  <h5 className="text-white text-center">Guitar Competition</h5>
                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.{" "}
                  </p>
                  <Link to='/audition-admin/audition/register-user-list'><button className="btn btn-warning PTBDn px-5 py-2 mt-4">Action</button></Link>
                </center>
              </div>
            </div>
          </div>

          <div className="p-3 col-md-3">
            <div className="card bg-dark completedMeetupBlack GoldBorder">
              <img
                src={EnterImage}
                className="img-fluid p-2 ImgBlue"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                <center>
                  <h5 className="text-white text-center">Guitar Competition</h5>
                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.{" "}
                  </p>
                  <Link to='/audition-admin/audition/register-user-list'><button className="btn btn-warning PTBDn px-5 py-2 mt-4">Action</button></Link>
                </center>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </>
  );
}

export default RegisterUserListAudition;
