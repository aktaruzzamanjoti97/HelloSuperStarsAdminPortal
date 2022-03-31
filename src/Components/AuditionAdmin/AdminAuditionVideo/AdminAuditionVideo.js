import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import decline from "../../../assets/images/declined.png";
import sign from "../../../assets/images/sign.png";
import "./AdminAuditionVideo.css";
import { fakeVideoData } from "./fakeVideoData";
import axios from "axios";
const AdminAuditionVideo = (props) => {
  let history = useHistory();
  const [audition, setAudition] = useState([]);
  const [declineInput, setDeclineInput] = useState(false)

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

  const [clickVideoLink, setClickVideoLink] = useState('');

  console.log('Click video', clickVideoLink);
  
  const [multiSelectArrays, setMultiSelectArrays] = useState([]);

  function handleSelectVideo(participant_id) {
    // if (!clickVideoLink.includes(audition.participant[index])) {
    //   setClickVideoLink([...clickVideoLink, audition.participant[index]]);
    // }

    setClickVideoLink(participant_id);

  }

  console.log(clickVideoLink);

  function clickMultipleSelectVideo() {
    setMultiSelectArrays(clickVideoLink);
  }

  console.log(multiSelectArrays);

  const handleDeclineInput = () => {
    setDeclineInput(!declineInput)
  }

  return (
    <div>
      <div className="videoSliderBorder d-flex justify-content-center">
        <div className="videoSliderStyle py-5 px-3">
          <div>
            <h2 className="text-warning"> Video Filtering </h2>

            <Slider {...settings}>
              {audition.participant?.map((video, i) => (
                <div className="">
                  <div
                    className="videos bg-success p-4 mx-4"
                    onClick={() => handleSelectVideo(video.id)}
                    key={video.id}
                  >
                    <video width="630" controls>
                      <source
                        src={
                          audition.video != null
                            ? `http://localhost:8000/${audition.video}`
                            : "https://youtu.be/dgfTiONcnTc"
                        }
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              ))}
              
            </Slider>

            <div className="my-3">
              <span
                onClick={() => clickMultipleSelectVideo()}
                className="buttonStyle"
                type="button"
              >
                <img className="img-fluid" width="40px" src={sign} alt="" />
              </span>

              <button onClick={handleDeclineInput} className="ms-3 buttonStyle" type="button">
                <img className="img-fluid" width="40px" src={decline} alt="" />
              </button>
            </div>
          </div>

          {
            declineInput ? (
              <div className="row mt-4">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control input-gray"
                placeholder="Comment"
              />
            </div>
            <div className="col-md-1">
              <button className="form-control btn btn-warning">Done</button>
            </div>
          </div>
            ) : null
          }

         
        </div>
      </div>

      <div className="my-4">
        <div className="filterVideoBorder d-flex justify-content-center">
          <div className="filteredVideoWidth py-5 px-2">
            <h2 className="text-warning">Filtered Video</h2>
            <Slider {...settings2}>
              {multiSelectArrays.map((video) => (
                <div key={video.id} className="p-2">
                  <ReactPlayer className="img-fluid" url={video.link} />
                </div>
              ))}
            </Slider>

            <div
              onClick={() => {
                history.push("/audition-admin/audition/audition-video-show");
              }}
              className="d-flex justify-content-center mt-4"
            >
              <button className="btn btn-warning w-25">
                <b>Open to Vote</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuditionVideo;
