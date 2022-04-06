import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import decline from "../../../../assets/images/declined.png";
import Banner from "../../../../assets/images/juryGroup.png";
import sign from "../../../../assets/images/sign.png";
import "./JurySelectBoard.css";

const JurySelectBoard = () => {


const [selectVideo, setSelectVideo] = useState([]);

useEffect(()=>{

  axios.get('api/jury/selectVideo').then((res)=>{

    console.log('Select Jury Video', res.data.audition_videos);
  })

},[])



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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

  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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

  const audition_videos = [
    {
      id: 1,
      video_url: "https://www.youtube.com/watch?v=eaB1bXTA23w&t=319s",
    },
    {
      id: 2,
      video_url: "https://www.youtube.com/watch?v=eaB1bXTA23w&t=319s",
    },
    {
      id: 3,
      video_url: "https://www.youtube.com/watch?v=eaB1bXTA23w&t=319s",
    },
    {
      id: 4,
      video_url: "https://www.youtube.com/watch?v=eaB1bXTA23w&t=319s",
    },
    {
      id: 5,
      video_url: "https://www.youtube.com/watch?v=eaB1bXTA23w&t=319s",
    },
    {
      id: 6,
      video_url: "https://www.youtube.com/watch?v=eaB1bXTA23w&t=319s",
    },
    {
      id: 7,
      video_url: "https://www.youtube.com/watch?v=eaB1bXTA23w&t=319s",
    },
  ];

  const acceptedVideos = [
    {
      id: 1,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
    {
      id: 2,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
    {
      id: 3,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
    {
      id: 4,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
    {
      id: 5,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
    {
      id: 6,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
    {
      id: 7,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
    {
      id: 8,
      video_url: "https://www.youtube.com/watch?v=ZQ5RCASdpuE",
    },
  ];

  return (
    <>
      <div className="card m-3">
        <img src={Banner} alt="" className="Banner-SME-b" />
        <div class="centered ">
          <div className="MENbtn d-flex ">
            <div className="btn-l-1">
              <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                2
              </button>{" "}
              <br />
              <span className="mx-2 text-light">hours</span>
            </div>
            <div className="btn-l-1">
              <button className="None-Btn">-</button>
            </div>
            <div className="btn-l-1">
              <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                30
              </button>{" "}
              <br />
              <span className="mx-2 text-light">minutes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="divCenter">
          <h4 className="fw-bold text-center text-center text-light">
            Guitar for the beginners
          </h4>
          <p className="text-success text-center">Audition</p>

          <p className="text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            id tempore ad quae expedita possimus voluptatum porro unde natus
            pariatur repellendus, eum praesentium accusamus delectus fugiat
            veniam cupiditate. Commodi, sunt.
          </p>

          <h4 className="fw-bolder my-3 text-success text-center">
            Jury Judgement Board
          </h4>
        </div>
      </div>

      <div className="videoSliderBorder d-flex justify-content-center">
        <div className="videoSliderStyle py-5 px-3">
          <div>
            <h2 className="text-warning py-2"> Video Marking </h2>

            <Slider {...settings}>
              {audition_videos?.map((video, i) => (
                <div className="">
                  <div className="videos bg-success p-4 mx-4" key={video.id}>
                    <ReactPlayer className="img-fluid" url={video.video_url} />
                  </div>
                </div>
              ))}
            </Slider>

            {audition_videos?.length > 0 ? (
              <div className="my-3">
                <span className="buttonStyle" type="button">
                  <img className="img-fluid" width="40px" src={sign} alt="" />
                </span>

                <button className="ms-3 buttonStyle" type="button">
                  <img
                    className="img-fluid"
                    width="40px"
                    src={decline}
                    alt=""
                  />
                </button>
              </div>
            ) : null}
          </div>

          <div className="row mt-4">
            <div className="col-md-2">
              <input
                type="text"
                className="form-control input-gray donePlaceHolder"
                placeholder="Marks"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control input-gray donePlaceHolder"
                placeholder="Comment"
              />
            </div>
            <div className="col-md-1">
              <span className="form-control btn btn-warning">Done</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <div className="filterVideoBorder d-flex justify-content-center">
          <div className="filteredVideoWidth py-5 px-2">
            <h2 className="text-warning py-2">Filtered Video</h2>
            <Slider {...settings2}>
              {acceptedVideos?.map((video, i) => (
                <div key={video.id}>
                  <ReactPlayer className="img-fluid" url={video.video_url} />
                </div>
              ))}
            </Slider>

            <div
              // onClick={() => {
              //   history.push("/audition-admin/audition/audition-video-show");
              // }}
              className="d-flex justify-content-end mt-4"
            >
              <span className="btn btn-warning w-25">
                <b>Submit & Complete</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JurySelectBoard;
