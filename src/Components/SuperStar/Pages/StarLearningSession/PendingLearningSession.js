import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import LearnSessionNaveStar from './LearnSessionNaveStar'
import moment from "moment";
import axios from "axios";

const PendingLearningSession = () => {
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
    axios.get(`/api/star/learning_session/pending`).then((res) => {
      if (res.status === 200) {
        setEvents(res.data.post);
      }
    });

    console.log();
  }, []);

  return (
    <>
    <div className="AS">
        <LearnSessionNaveStar></LearnSessionNaveStar>

        <div className="liveMeetupBorder my-5">
          <div className="d-flex px-4 pt-3">
            <div className="faTrophy">
              <i class="fas fa-trophy"></i>
            </div>
            <h4 className="mx-3 text-white p-2">Pending Learning Session</h4>
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
                          <Link
                            to={`/superstar/learning-session/pending/${event.id}`} style={{ textDecoration: 'none' }}
                          >
                            <h5 className="text-white">{event.title}</h5>
                          </Link>
                        </div>

                        <p className="text-secondary">
                        {moment(event.date).format('LL')} <br></br>{moment(event.start_time, "HH:mm:ss").format("hh:mm A")}-{moment(event.end_time, "HH:mm:ss").format("hh:mm A")} 
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
  )
}

export default PendingLearningSession
