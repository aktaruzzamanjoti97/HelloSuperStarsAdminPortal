import React, { useState, useEffect } from "react";

import cup from "../../../../../../../../assets/images/pending 3.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import EnterImage from "../../../../../../../../assets/images/unsplash_hUHzaiAHuUc.png";
import EventsNav from "./EventsNav";
import axios from "axios";


const EventRequestApproval = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/audition-admin/audition/request").then((res) => {
      if (res.data.status === 200) {
        setEvents(res.data.event);
        console.log("Requested event", res.data.event);
      }
    });
  }, []);

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
      <div className="AS">
        <EventsNav />

        <div className="liveMeetupBorder my-5">
          <div className="d-flex px-4 pt-3">
            <div className="faTrophy">
              {" "}
              <img src={cup} alt="" />
            </div>
            <h4 className="mx-3 text-white p-2">Pending Event</h4>
          </div>

          <div className="pb-3">
            <div className="slick-parent d-flex justify-content-center">
              <Slider className="slider-width" {...settings}>
                {events.map((event) => (
                  <Link
                    to={`/audition-admin/audition/event/create-event/${event.slug}`}
                    className="Link"
                  >
                    <div className="p-3">
                      <div className="card bg-dark completedMeetupBlack GoldBorder">
                        <div className="card m-2 BGBlue p-5">
                            <img
                              src={event.banner ? `http://localhost:8000/${event.banner}` : EnterImage}
                              className="img-fluid p-2 ImgBlue"
                              alt=""
                              style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                        <div className="p-3">
                          <center>
                            <h5 className="text-white text-center">
                              {event.title}
                            </h5>
                            <p className="text-secondary">
                                {event.description}
                            </p>
                            <button className="btn PTBDn w-100">Action</button>
                          </center>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default EventRequestApproval;
