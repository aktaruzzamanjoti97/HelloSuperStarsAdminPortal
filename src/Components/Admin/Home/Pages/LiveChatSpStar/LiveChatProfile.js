import React, { useState, useEffect } from "react";

import live from "../../../../../assets/images/AdminLiveProfile/live 1.png";
import liveperson from "../../../../../assets/images/AdminLiveProfile/video-chat.png";
import discount from "../../../../../assets/images/AdminLiveProfile/discount 1.png";
import price from "../../../../../assets/images/AdminLiveProfile/calendar.png";
import clock from "../../../../../assets/images/AdminLiveProfile/clock.png";
import '../../../../../assets/CSS/LiveChatProfie.css'
import axios from "axios";
import { Markup } from "interweave";


const LiveChatProfile = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {


          axios.get(`/api/admin/livechat_event_profile`).then(res =>{
    
            if(res.data.status === 200)
            {
                setEvents(res.data.event);
            }
          });

      
    }, []);

  return (
    <div>
      <div className="card liveChatCard m-4 ">
        <div className="card-body">
          <div className="card-title text-light">
            <img src={live} alt="" className="img-fluid mx-2" />

            <span> Live Chat profie</span>
          </div>

          <div className="row py-2">
            <div className="col-5">
              <div className="">
                <img
                  src={liveperson}
                  alt=""
                  className="img-fluid live-person"
                />
              </div>
            </div>
            <div className="col-7">
              <h4 className="text-light">Instructions</h4>
              <p className="text-light">
                {events.title}
              </p>

              <p className="text-light">
                <Markup content={events.description} />
              </p>

              <div className=" down-content d-flex p-1 mt-5">
                <img src={discount} className="img-fluid" alt="" />
                <div className="live-content">
                  <span className="text-light">Cost per minute</span>
                  <br></br>
                  <span className="fw-bold text-warning">{events.cost} BDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-btn d-flex m-4">
        <div className="d-flex down-content-btn">
          <span>
            <img src={price} alt="" />
          </span>
          <div className="price-content mx-2">
            <span className="text-light">Date</span>
            <br></br>
            <span className="fw-bold text-warning">21th November</span>
          </div>
        </div>
        <div className="d-flex mx-4 down-content-btn">
          <span>
            <img src={clock} alt="" />
          </span>
          <div className="price-content mx-2">
            <span className="text-light">Time</span>
            <br></br>
            <span className="fw-bold text-warning">21th November</span>
          </div>
        </div>
      </div>

      <div className="down-modify-button mt-5 m-4">
        <button className="btn btn-warning px-5 fw-bold text-light">
          Edit
        </button>
        <button className="btn text-warning px-5 mx-3 modify-btn-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default LiveChatProfile;
