import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import Slider from "react-slick";
import "./SuperStarContent.css";
import moment from 'moment';

const ApprovedPost = () => {
  let history = useHistory();

  const joinLive = (room_id) => {
    history.push({
        pathname: '/superstar/videocall',
        search:  `id=${room_id}`
    });
  }

  const [events, setEvents] = useState([]);

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
  // Fetch Approved LiveChat
  useEffect(() => {

    axios.get(`/api/star/learning_session/approved`).then((res) => {

      if (res.status === 200) {
        setEvents(res.data.post);
      }
      
    });

   

    console.log();
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
            <h4 className="mx-3 text-white p-2">Approved Learning Session</h4>
          </div>

          <div className="pb-3">
            <div className="slick-parent d-flex justify-content-center">
              <Slider className="slider-width" {...settings}>
                {events.map((event, index) => (
                  <div className="p-3">
                    <div className="completedMeetupBlack">
                      <img
                        src={`http://localhost:8000/${event.banner}`}
                        className="img-fluid"
                        alt=""
                        style={{ height: "200px" }}
                      />
                      <div className="p-3">
                        <div className="d-flex justify-content-between">

                        <Link className="Link"
                        target="_blank"
                            to={
                                {pathname: '/superstar/videocall',
                                search:  `id=${event.room_id}`}
                            }
                          >
                            <h5 className="text-white text-ellipsis">{event.title}</h5>
                          </Link>
                          {/* <Link
                            to={`/superstar-admin/approved-livechat/${event.id}`} style={{ textDecoration: 'none' }}
                          >
                            <h5 className="text-white text-ellipsis">{event.title}</h5>
                          </Link> */}

                          {/* <a target="_blank" href="https://angularhttp-c976c.web.app/?id=-MwLqWCE8jYIdPF9GH5v" style={{ textDecoration: 'none' }}>
                          <h5 className="text-white text-ellipsis">{event.title}</h5>
                          </a> */}


                          {/* <h5 className="text-white text-ellipsis Link" style={{ cursor: 'pointer' }} onClick={() => joinLive(event.room_id)}>{event.title} + {event.room_id}</h5> */}



                        </div>

                        <p className="text-secondary">
                          {moment(event.date).format('LL')} <br></br>
                          {moment(event.start_time, "HH:mm:ss").format("hh:mm A")}-{moment(event.end_time, "HH:mm:ss").format("hh:mm A")}
                        </p>
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

export default ApprovedPost;
