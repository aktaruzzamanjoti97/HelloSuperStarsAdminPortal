import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import LiveNow from './Content/StarLiveNow'
import Live from '../../../../assets/images/instagram-live 1.png'
import Pending from '../../../../assets/images/pending 2.png'
import Add from '../../../../assets/images/UpcomingEvent/add 1.png'
import Slider from "react-slick";
import moment from "moment";
import axios from "axios";
import Nav from "./Nav";

const LiveChatContent = () => {
    const [loading, setLoading] = useState(true);
    const [pendingLiveChatNumber, setPendingLiveChatNumber] = useState([]);

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

        axios.get(`/api/star/approvedLiveChat`).then(res => {
            if(res.data.status === 200)
            {
            setEvents(res.data.approveLiveChats)
            setPendingLiveChatNumber(res.data.pendingLiveChatNumber)
            console.log(res.data.pendingLiveChats);
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
            <h4 className="mx-3 text-white p-2">Approved Live Chat Events</h4>
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
                            to={`/superstar/live-chat/approved-session/details/${event.id}`} style={{ textDecoration: 'none' }}
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

export default LiveChatContent