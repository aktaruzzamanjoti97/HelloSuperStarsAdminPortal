import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import decline from "../../../assets/images/declined.png";
import sign from "../../../assets/images/sign.png";
import "./AdminAuditionVideo.css";
import axios from "axios";
import swal from "sweetalert";

const AdminAuditionVideo = (props) => {
  const [clickVideoLink, setClickVideoLink] = useState("");
  const [acceptVideo, setAcceptVideo] = useState(0);
  const [rejectVideo, setRejectvideo] = useState(0);
  const [comments, setComments] = useState("");
  const [error_list, setErrorList] = useState([]);

  const [acceptedVideos, setAcceptedVidoes] = useState([]);
  const [rejecteddVideos, setRejectedVidoes] = useState([]);

  let history = useHistory();

  const [audition_videos, setAuditionVideos] = useState([]);

  const [declineInput, setDeclineInput] = useState(false);

  const aud_id = props.match.params.id;

  useEffect(() => {
    getAuditionVedio(aud_id);
    getAcceptedVideo(aud_id);
    getRejectedVideo(aud_id);
  }, [aud_id]);

  const getAuditionVedio = (aud_id) => {
    axios.get(`/api/audition-admin/audtion-videos/${aud_id}`).then((res) => {
      if (res.data.status === 200) {
        let video = res.data.audition_videos;
        setAuditionVideos(video);
        // console.log('Audition Id',aud_id);
      }
    });
  };

  const getAcceptedVideo = (aud_id) => {
    axios.get(`/api/audition-admin/accepted-videos/${aud_id}`).then((res) => {
      if (res.data.status === 200) {
        let video = res.data.accepted_videos;
        setAcceptedVidoes(video);
      }
    });
  };

  const getRejectedVideo = (aud_id) => {
    axios.get(`/api/audition-admin/rejected-videos/${aud_id}`).then((res) => {
      if (res.data.status === 200) {
        let video = res.data.rejected_videos;
        setRejectedVidoes(video);
      }
    });
  };

  function handleSelectVideo(participant_id) {
    setClickVideoLink(participant_id);
    setAcceptVideo(1);
    console.log("Video Clicked", participant_id);
  }

  // show reject comment form
  const handleDeclineInput = () => {
    setDeclineInput(!declineInput);
    setRejectvideo(1);
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
    formData.append("participant_id", clickVideoLink);
    formData.append("accept", acceptVideo);
    formData.append("reject", rejectVideo);
    formData.append("comments", comments);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`api/audition-admin/filter-video/submit`, formData)
        .then((res) => {
          console.log("data", res.data);
          if (res.data.status === 200) {
            getAuditionVedio(aud_id);
            getAcceptedVideo(aud_id);
            swal("Success", res.data.message, "success");
            setComments(" ");
            setAcceptVideo(0);
            setRejectvideo(0);
            setDeclineInput(false);
            // history.push(`/audition-admin/audition/pending`);
          } else if (res.data.status === 422) {
            setErrorList({
              ...error_list,
              error_list: res.data.validation_errors,
            });
          } else {
            console.log("Exception Error : ", res.data.message);
            // swal("Error", res.data.message, "error");
          }
        });
    });
  };

  // send manager admin 

  const sendManagerAdmin = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("audition_id", aud_id);
    formData.append("send_manager_admin", 1);
    

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`api/audition-admin/send-manager-admin`, formData)
        .then((res) => {
          console.log("data", res.data);
          if (res.data.status === 200) {
            swal("Success", res.data.message, "success");
           
            // history.push(`/audition-admin/audition/pending`);
          } else {
            setErrorList({
              ...error_list,
              error_list: res.data.validation_errors,
            });
          } 
        });
    });
  }

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

  return (
    <div>
      <div className="videoSliderBorder d-flex justify-content-center">
        <div className="videoSliderStyle py-5 px-3">
          <div>
            <h2 className="text-warning"> Video Filtering </h2>

            <Slider {...settings}>
              {audition_videos?.map((video, i) => (
                <div className="">
                  <div
                    className="videos bg-success p-4 mx-4"
                    onClick={() => handleSelectVideo(video.id)}
                    key={video.id}
                  >
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
                  onClick={submitFiltervideo}
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

          {declineInput ? (
            <div className="row mt-4">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control input-gray"
                  placeholder="Comment"
                  onChange={handleComment}
                />
              </div>
              <div className="col-md-1">
                <span
                  className="form-control btn btn-warning"
                  onClick={submitFiltervideo}
                >
                  Done
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="my-4">
        <div className="filterVideoBorder d-flex justify-content-center">
          <div className="filteredVideoWidth py-5 px-2">
            <h2 className="text-warning">Filtered Video</h2>
            <Slider {...settings2}>
              {acceptedVideos?.map((video, i) => (
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

            <div
              // onClick={() => {
              //   history.push("/audition-admin/audition/audition-video-show");
              // }}
              className="d-flex justify-content-center mt-4"
            >
              <span className="btn btn-warning w-25" onClick={sendManagerAdmin}>
                <b>Send to Manager Admin</b>
              </span>
            </div>

            
          </div>
        </div>
      </div>

      <div className="my-4">
        <div className="filterVideoBorder d-flex justify-content-center">
          <div className="filteredVideoWidth py-5 px-2">
            <h2 className="text-warning">Rejected Video</h2>
            <Slider {...settings2}>
              {rejecteddVideos?.map((video, i) => (
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

            <div
              // onClick={() => {
              //   history.push("/audition-admin/audition/audition-video-show");
              // }}
              className="d-flex justify-content-center mt-4"
            >
              
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuditionVideo;
