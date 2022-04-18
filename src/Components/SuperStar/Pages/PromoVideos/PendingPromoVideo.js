import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import LiveNow from "./Content/LiveNow";
import Live from "../../../../assets/images/instagram-live 1.png";
import Approved from "../../../../assets/images/approved.png";
import Pending from "../../../../assets/images/pending 2.png";
import Add from "../../../../assets/images/UpcomingEvent/add 1.png";
import LiveIcon from '../../../../assets/images/AdminLiveProfile/live 1.png'
import axios from "axios";
import Slider from "react-slick";
import "./SuperStarContent.css";
import Nav from "./Nav";
import moment from "moment";
import ReactPlayer from "react-player";
import swal from "sweetalert";

const PendingPromoVideo = () => {

  const history = useHistory()

  const [loading, setLoading] = useState(true);
  const [pendingLiveChatNumber, setPendingLiveChatNumber] = useState([]);

  const [events, setEvents] = useState([]);


  const handleClick = (id) => {

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/star/promoVideo/approved/${id}`).then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          history.push("/superstar/live/promoVideo");
        }
      });
    });
  };

  const decline =(id) => {

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/star/promoVideo/decline/${id}`).then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          history.push("/superstar/live/promoVideo");
        }
      });
    });
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

  // useEffect(() => {

  //     axios.get(`/api/admin/livechat`).then(res =>{

  //       if(res.status === 200)
  //       {
  //         setPendingLiveChatNumber(res.data.pendingLiveChatNumber);
  //       }
  //       setLoading(false);
  //     });
  // }, []);

  // Fetch Approved LiveChat
  
  useEffect(() => {
    axios.get(`/api/star/promoVideo/pending`).then((res) => {
      if (res.data.status === 200) {
        setEvents(res.data.promoVideos);
      }
    });

  }, []);

  return (
    <>
      <div className="AS">
        <Nav></Nav>

        <div className="liveMeetupBorder my-5">
          <div className="d-flex px-4 pt-3">
            <div className="faTrophy">
              <i class="fas fa-trophy"></i>
            </div>
            <h4 className="mx-3 text-white p-2">Pending Promo Videos</h4>
          </div>

          <div className="pb-3">
            <div className="slick-parent d-flex justify-content-center">
              <Slider className="slider-width" {...settings}>
                {events.map((event, index) => (
                  <div className="p-3">
                    <div className="completedMeetupBlack">
                      <video width="312" controls>
                        <source
                            src={
                              event.video_url != null
                                  ? `http://localhost:8000/${event.video_url}`
                                  : "https://youtu.be/dgfTiONcnTc"
                            }
                            type="video/mp4"
                        />
                      </video>
                      <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <h5 className="text-white">{event.title}</h5>
                        </div>
                        <button className="btn MEN-X fw-bold" onClick={()=>handleClick(event.id)}>
                  Approved
                </button>

                <button className="btn MEN-Y text-warning fw-bold mx-3" onClick={()=>decline(event.id)}>
                  Decline
                </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingPromoVideo;
