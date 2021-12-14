import React, { useState, useEffect, useRef  } from 'react';
import ReactPlayer from "react-player";
import axios from "axios";
import { useHistory} from 'react-router-dom';
import moment from 'moment'

export default function RegisterLeftCard(props) {
  const history = useHistory();
  const [liveChat, setLiveChat] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const live_chat_id = props.data;
    console.log(live_chat_id);
    axios.get(`/api/admin/sinlgeLiveChat/${live_chat_id}`).then(res =>{

        if(isMounted)
        {
            if(res.data.status === 200)
            {
              setLiveChat(res.data.liveChat);
              console.log(res.data.liveChat);
            }
        }           
    });

}, [props.data, history]);

    return (
        <div className="card right-card-live mx-auto my-2">
        {/* <img className="card-img-top" src={sakib} alt="sakib img"  />
         */}
        <ReactPlayer
          url="https://youtu.be/dgfTiONcnTc"
          playing={false}
          volume={1}
          width="100%"
          height="320px"
          style={{ margin: "0 auto" }}
          onReady={() => console.log("ready now")}
        />

        <div className="card-body">
          <h5 className="card-title text-warning">Instruction</h5>
          <p className="card-text text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            minus inventore? Libero asperiores aliquid dolorum?
          </p>
          <p className="text-light">Lorem ipsum dolor sit amet.</p>

          <div className="time-table d-flex  ">
            <span className="clock">
              <i className="fas fa-calendar-week fa-3x p-2"></i>
            </span>
            <div className="other mx-1 p-2">
              <span className="text-light">{liveChat.title}</span>
              <br></br>
              <span className="text-warning date-font">{moment(liveChat.live_chat_start_time).format('LL')}</span>
            </div>
          </div>

          <div className="time-table2 d-flex  my-3">
            <span className="clock">
              <i className="fas fa-clock  fa-3x p-2"></i>
            </span>
            <div className="other mx-1 p-2">
              <span className="text-light">Time</span>
              <br></br>
              <span className="text-warning date-font">{moment(liveChat.live_chat_end_time).format('h:mm A')}-{moment(liveChat.live_chat_start_time).format('h:mm A')}</span>
            </div>
          </div>

          <div className="time-table3 d-flex  my-3">
            <span className="clock">
              <i className="fas fa-dollar-sign fa-3x p-2"></i>
            </span>
            <div className="other mx-1 p-2">
              <span className="text-light">Cost per minute</span>
              <br></br>
              <span className="text-warning date-font">1200 BDT</span>
            </div>
          </div>
        </div>
      </div>
    )
}
