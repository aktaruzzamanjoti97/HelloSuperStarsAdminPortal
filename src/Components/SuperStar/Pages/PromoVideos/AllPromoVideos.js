import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import LiveNow from "./Content/LiveNow";
import Nav from "./Nav";
import axios from "axios";
import Slider from "react-slick";
import "./SuperStarContent.css";
import moment from 'moment';
import ReactPlayer from "react-player";

const AllPromoVideos = () => {
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

  const history = useHistory();

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

    axios.get(`/api/star/promoVideo/all`).then((res) => {

      if (res.data.status === 200) {
        setEvents(res.data.promoVideos);
      }
      
    });

    console.log();
  }, []);

 


  return (
    <>
      <div className="AS">
        <Nav></Nav>


        {events.length > 0 ? <div className="liveMeetupBorder my-5">
          <div className="d-flex px-4 pt-3">
            <div className="faTrophy">
              <i class="fas fa-trophy"></i>
            </div>
            <h4 className="mx-3 text-white p-2">All Promo Videos</h4>
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
                          {/*<Link*/}
                          {/*  to={`/superstar/post/${event.id}`} style={{ textDecoration: 'none' }}*/}
                          {/*>*/}
                          {/*  */}
                          {/*</Link>*/}
                        <h5 className="text-white">{event.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div> : <div className="container-fluid">
        {/*   <div className="card bg-dark" style={{ border: "2px solid yellow" }}>

            <div className="card-body">
              <h5 className="text-light"> <img src={LiveIcon} alt="" className="img-fluid mx-2" /> Live Chat profile</h5>
              <div className="container text-center">
                <i style={{ color: '#ffc107' }} class="fas fa-box-open fa-4x my-2"></i>
                <h2 className="fw-bold text-light">No Data here</h2>
                <h5 className="text-light my-3">Create Default LiveChat Profile Now!</h5>
                <p className=" my-2 text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <Link to="/superstar-admin/live-chat/profile/create">
                <button className="btn btn-warning px-5 py-2 mb-5">Create Now</button>
                </Link>
                

              </div>
            </div>
          </div> */}
        </div>}
      </div>
    </>
  );
};

export default AllPromoVideos;
