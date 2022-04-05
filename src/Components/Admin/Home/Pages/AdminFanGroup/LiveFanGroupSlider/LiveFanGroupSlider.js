import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Session from "../../../../../../assets/images/email.png";
import EnterImage from "../../../../../../assets/images/enter 1.png";
import bannerVs from "../../../../../../assets/images/bannerVs.png";
import "./LiveFanGroupSlider.css";
import moment from "moment";
import {useHistory} from 'react-router';
import { Link } from "react-router-dom";

const LiveFanGroupSlider = () => {
  const [fanLiveGroup, setFanLiveGroup] = useState([]);

  console.log('fanLiveGroup', fanLiveGroup);

  let history = useHistory();

  const handleClick = () => {
    history.push('/superstar-admin/fangroup/view')
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

  // Fetch Stars Added By Admin
  useEffect(() => {
    axios.get(`/api/admin/fan/group/adminlist/status`).then((res) => {
      if (res.status === 200) {
        setFanLiveGroup(res.data.fanLiveGroup);
        //console.log(res.data.category);
      }
    });
  }, []);

  return (
    <div>
      <div className="slick-parent d-flex justify-content-center">
        <Slider className="slider-width" {...settings}>
          {fanLiveGroup.map((liveFan, index) => (
            <div className="p-3">
              <div className="completedMeetupBlack">
                <div className="card-body">
                  <center className="d-flex justify-content-center align-items-center">
                    <img
                      src={Session}
                      className="img-fluid ADImgSchedule"
                      style={{ width: "100px" }}
                      alt=""
                    />
                    <div class="centeredImgCl fw-bold mt-4 ms-3">25</div>
                  </center>
                </div>

                <img
                  src={`http://localhost:8000/${liveFan.banner}`}
                  className="img-fluid"
                  alt=""
                  style={{ height: "200px" }}
                />
                <div className="p-3 ApprovedAdSchedule">
                  {/* <div className="d-flex justify-content-center ApprovedAdSchedule">
                        <p className="fw-bold mt-4">February , 2022</p>
                    </div> */}
                  <div className="d-flex justify-content-center">
                    <h5 className="fw-bolder mt-4">{moment(liveFan.start_date).format('LL')} To {moment(liveFan.end_date).format('LL')}</h5>

                    <Link to={`/superstar-admin/fangroup/view/${liveFan.slug}`}>
                    <img
                      className="img-fluid mx-2 mt-2"
                      src={EnterImage}
                      alt=""
                    />
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LiveFanGroupSlider;
