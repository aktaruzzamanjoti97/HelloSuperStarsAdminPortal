import React, { useState, useEffect } from "react";
import MeetupImage1 from "../../../../../../assets/images/MeetupImages/unsplash_MXbM1NrRqtI.png";
import RadisonBlue from "../../../../../../assets/images/MeetupImages/unsplash_QdAAasrZhdk.png";
import LeMerridian from "../../../../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png";
import Session from "../../../../../../assets/images/MeetupImages/unsplash_YC8qqp50BdA.png";
import EnterImage from "../../../../../../assets/images/enter 1.png";
import DefaultBanner from "../../../../../../assets/images/Auditions/default.jpg";
import { Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { Markup } from "interweave";
import AdminAuditionNav from "../AdminAuditionNav/AdminAuditionNav";

const PendingAuditionSlider = (props) => {
  
  const [pendingAuditions, setPendingAudition] = useState([]);

  useEffect(()=>{
axios.get(`/api/admin/audition/pendings`).then((res)=>{
  if(res.status === 200){

      setPendingAudition(res.data.pending_auditions)
  }
})
  },[]);

  const handlePending = () => {
      // history.push('/superstar-admin/audition/create-event')
  }
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
    <div>
      <div>
        <div className="slick-parent d-flex justify-content-center">
          <Slider className="slider-width" {...settings}>
            {pendingAuditions.map((pending, index) => (
              <>
                <div className="p-3" style={{ cursor: "pointer" }}>
                  <div className="completedMeetupBlack">
                    <img
                      src={
                        pending.banner == null
                          ? DefaultBanner
                          : `http://localhost:8000/${pending.banner}`
                      }
                      className="img-fluid w-100"
                      alt=""
                      style={{ height: "200px" }}
                    />
                    <div className="p-3">
                      <div className="d-flex justify-content-between">
                          <h5 className="text-white">{pending.title}</h5>
                        <img className="img-fluid" src={EnterImage} alt="" />
                      </div>

                      <p className="text-secondary">
                        <Markup content={pending.description}></Markup>
                      </p>

                      
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>
  );

};

export default PendingAuditionSlider;
