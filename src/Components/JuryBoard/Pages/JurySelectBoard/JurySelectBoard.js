import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import decline from "../../../../assets/images/declined.png";
import Banner from "../../../../assets/images/juryGroup.png";
import sign from "../../../../assets/images/sign.png";
import "./JurySelectBoard.css";
import swal from "sweetalert";
import { map } from "jquery";
import { Markup } from "interweave";
import moment from "moment";

const JurySelectBoard = () => {


const [auditionInfo, setAuditionInfo] = useState([]);
const [clickVideoLink, setClickVideoLink] = useState("");
const [aud_id, setAuditionId] = useState("");
const [acceptVideo, setAcceptVideo] = useState(0);
const [audition_videos, setAuditionVideos] = useState([]);
const [comments, setComments] = useState("");
const [marks, setMarks] = useState("");
const [acceptedVideos, setAcceptedVidoes] = useState([]);
const [error_list, setErrorList] = useState([]);
const [declineInput, setDeclineInput] = useState(true);
const [selectedVideo, setSelectedVideo] = useState(0);
const [rejectVideo, setRejectvideo] = useState(0);

//Countdown state
const auditionTime = moment(auditionInfo.auditions?.start_time).format('LL HH:mm:ss')
//console.log(auctionTime);
const countDownDate = new Date(auditionTime).getTime();
const [day, setDay] = useState('');
const [hour, setHour] = useState('');
const [minute, setMinute] = useState('');
const [second, setSecond] = useState('');



useEffect(()=>{

  getAuditionVedio();
  getAcceptedVideo();

},[])


const getAuditionVedio = () => {
  axios.get('api/jury/selectVideo').then((res) => {
    if (res.data.status === 200) {
      let video = res.data.audition_videos;
      setAuditionVideos(video);
      setAuditionInfo(res.data.auditionInfo)
      console.log('Audition Id',video);
    }
  });
};

const getAcceptedVideo = () => {
  axios.get('api/jury/juryMarkingDone/videos').then((res) => {
    if (res.data.status === 200) {
      let video = res.data.accepted_videos;
      console.log('done video',video)
      setAcceptedVidoes(video);
    }
  });
};

function handleSelectVideo(participant_id,audition_id) {
  setClickVideoLink(participant_id);
  setAuditionId(audition_id);
  setAcceptVideo(1);
  console.log("Video Clicked", participant_id);
}

  // show reject comment form
  const handleSelected = () => {
    setSelectedVideo(1);
    setDeclineInput(true);
  };

  // show reject comment form
  const handleDeclineInput = () => {
    setDeclineInput(!declineInput);
    setRejectvideo(1);
  };

  // set marks input

  const handleMarks = (e) => {
    setMarks(e.target.value);
  };

    // set comment input

    const handleComment = (e) => {
      setComments(e.target.value);
    };

      // Submit Accepted Video
  const submitFiltervideo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("audition_id", aud_id);
    formData.append("selected", selectedVideo);
    formData.append("rejected", rejectVideo);
    formData.append("participant_id", clickVideoLink);
    formData.append("comments", comments);
    formData.append("marks", marks);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`api/jury/juryMarking`, formData)
        .then((res) => {
          console.log("data", res.data);
          if (res.data.status === 200) {
            setClickVideoLink("")
            setComments("")
            setMarks("")
            swal("Success", res.data.message, "success");
            getAuditionVedio();
            getAcceptedVideo();
            
          }
          if (res.data.status === 422) {
            setErrorList({
              ...error_list,
              error_list: res.data.validation_errors,
            });
            swal("Please Select Video First",...error_list);
          } 
        });
    });
  };


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


  // Countdown
  useEffect(()=>{

    setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDay(days);

        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHour(hours);

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setMinute(minutes);


        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setSecond(seconds)

    }, 1000);

},[])


  return (
    <>
      <div className="card m-3">

          <img src={`http://localhost:8000/${auditionInfo.auditions?.banner}`} alt="" className="Banner-SME-b" />
        <div class="centered ">
          <div className="MENbtn d-flex ">
          <div className="btn-l-1">
              <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                {day}
              </button>{" "}
              <br />
              <span className="mx-2 text-light">days</span>
            </div>
            <div className="btn-l-1">
              <button className="None-Btn">-</button>
            </div>
            <div className="btn-l-1">
              <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                {hour}
              </button>{" "}
              <br />
              <span className="mx-2 text-light">hours</span>
            </div>
            <div className="btn-l-1">
              <button className="None-Btn">-</button>
            </div>
            <div className="btn-l-1">
              <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                {minute}
              </button>{" "}
              <br />
              <span className="mx-2 text-light">minutes</span>
            </div>
            <div className="btn-l-1">
              <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                {second}
              </button>{" "}
              <br />
              <span className="mx-2 text-light">Second</span>
            </div>
          </div>
        </div>

      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="divCenter">
          <h4 className="fw-bold text-center text-center text-light">
          {auditionInfo.auditions?.title}
          </h4>
          <p className="text-success text-center">Audition</p>

          <p className="text-center text-light">
           <Markup content={auditionInfo.auditions?.description}/>
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
                  <div className="videos bg-success p-4 mx-4" onClick={() => handleSelectVideo(video.id,video.audition_id)} key={video.id}>
                  <video width="630" controls>
                      <source
                        src={
                          video.video_url != null
                            ? `http://localhost:8000/${video.video_url}`
                            : "https://youtu.be/dgfTiONcnTc"
                        }
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              ))}
            </Slider>

            {audition_videos?.length > 0 ? (
              <div className="my-3">
                <span
                  onClick={handleSelected}
                  className="buttonStyle"
                  type="button"
                >
                  <img className="img-fluid" width="40px" src={sign} alt="" />
                </span>

                <button
                  onClick={handleDeclineInput}
                  className="ms-3 buttonStyle"
                  type="button"
                >
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
          {declineInput ? (
            <div className="col-md-2">
              <input
                type="text"
                className="form-control input-gray donePlaceHolder"
                placeholder="Marks"
                value={marks}
                onChange={handleMarks}
              />
            </div>
            ) : null}
            <div className="col-md-4">
              <input
                type="text"
                className="form-control input-gray donePlaceHolder"
                placeholder="Comment"
                value={comments}
                onChange={handleComment}
              />
            </div>
            <div className="col-md-1">

            {/* {clickVideoLink == true?<span className="form-control btn btn-warning" onClick={submitFiltervideo}> Done</span>:null} */}


              <span className="form-control btn btn-warning" onClick={submitFiltervideo}> Done</span>
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
                <video width="400" controls>
                  <source
                    src={
                      video.auditions_participant.video_url != null
                        ? `http://localhost:8000/${video.auditions_participant.video_url}`
                        : "https://youtu.be/dgfTiONcnTc"
                    }
                    type="video/mp4"
                  />
                </video>
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
