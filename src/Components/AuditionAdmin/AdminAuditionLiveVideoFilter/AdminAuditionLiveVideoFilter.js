import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import liveVideoPng from "../../../assets/images/liveVideoUpload.PNG";
import roundSubmissionPlay from "../../../assets/images/ShakibPlayVideoGreetings.png";
import "./AdminAuditionLiveVideoFilter.css";
import ReactPlayer from "react-player";
import axios from "axios";

const AdminAuditionLiveVideoFilter = (props) => {
  let history = useHistory();
  const [audition, setAudition] = useState([]);
  const [videoPlay, setVideoPlay] = useState(false);

  var aud_id = props.match.params.id;

  useEffect(() => {
    axios.get(`/api/audition-admin/audition/${aud_id}`).then((res) => {
      if (res.data.status === 200) {
        let audition = res.data.audition;
        console.log("Single Audition:", audition);
        setAudition(audition);
      }
    });
  }, [aud_id]);


  const handleClick = () => {
    history.push(`/audition-admin/audition/audition-video/${aud_id}`);
  };

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

  const videoHandleClick = () => {
    setVideoPlay(!videoPlay);
  };

  return (
    <div className="">
      <div className="liveFilterImage">
        <img
          src={
            audition.banner != null
              ? `http://localhost:8000/${audition.banner}`
              : liveVideoPng
          }
          className="img-fluid w-100"
          alt=""
        />
      </div>

      <div className="d-flex justify-content-between bg-dark p-3 my-4 rounded-3">
        <h3 className="text-light mx-4">{audition.title}</h3>
        <i className="fa-solid fa-angles-down text-warning videoFilterIcon"></i>
      </div>

      <div className="bg-dark p-3">
        <div>
          <div className="d-flex p-1">
            <i className="fa-solid fa-video mx-2 text-warning videoFilterIcon"></i>
            <h3 className="text-warning mx-3">Round 1 Submission</h3>
          </div>
        </div>

        <div className="slick-parent d-flex justify-content-center">
          <Slider className="slider-width" {...settings}>
            {audition.participant?.map((video, i) => (
              <video width="400" controls>
                <source
                  src={
                    video.video_url != null
                      ? `http://localhost:8000/${video.video_url}`
                      : "https://youtu.be/dgfTiONcnTc"
                  }
                  type="video/mp4"
                />
              </video>
            ))}
          </Slider>
        </div>

        <div className="d-flex justify-content-end my-3">
          <button onClick={handleClick} className="btn btn-info px-5">
            <i className="fa-solid fa-filter text-light filterIcon"></i>{" "}
            <span className="filterTxt text-light">Filter</span>
          </button>
          <button className="btn btn-light px-5 mx-3">
            <i className="fa-solid fa-angles-right text-primary filterIcon"></i>{" "}
            <span className="filterTxt text-primary">Next round</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAuditionLiveVideoFilter;
