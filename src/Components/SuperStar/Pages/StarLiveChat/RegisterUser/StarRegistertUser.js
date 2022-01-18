import React, { useState, useEffect } from "react";
import "./StarRegistertUser.css";
import fatema from "../../../../../assets/images/AdminLiveProfile/cx.webp";
import enjoy from '../../../../../assets/images/AdminLiveProfile/abc.jpg';
import axios from "axios";
import { useHistory} from 'react-router-dom';
import moment from 'moment';
import Iframe from 'react-iframe';
import ReactPlayer from "react-player";

import StarRegisterLeftCard from "./component/StarRegisterLeftCard";
import { Markup } from "interweave";

const StarRegisterUser = (props) => {
  const [showItem, setShowItem] = useState(false);
  const [registeredLiveChat, setRegisteredLiveChat] = useState([]);
  const [event, setEvent] = useState('');

  const history = useHistory();
  let img_src = '';

  function handleClick() {
    setShowItem(true);
  }

  useEffect(() => {
    let isMounted = true;

    const live_chat_id = props.match.params.id;

    axios.get(`/api/registeredUserList/${live_chat_id}`).then(res =>{

        if(isMounted)
        {
            if(res.data.status === 200)
            {
              setRegisteredLiveChat(res.data.registeredLiveChats);
              setEvent(res.data.event);
              console.log(res.data.event);
            }
        }           
    });

}, [props.match.params.id, history]);


var viewRegisteredUserList = null

viewRegisteredUserList = 
registeredLiveChat.map( (item, index) => {
    // if(item.user.image) {
    //   img_src = "http://localhost:8000/"+item.user.image
    // }else{
      img_src = fatema
    // }
  return ( 
  
    <tr>
      <th scope="row">
        <img src={img_src} alt="imgBaseURL" className="rounded-circle register-user-img" />
        <span> {item.user?.first_name} {item.user?.last_name}</span>
      </th>
      <th>{moment(item.live_chat_start_time).format('h:mm A')}</th>
      <th>{Math.abs(new Date(item.live_chat_end_time)  - new Date(item.live_chat_start_time)) / 60000} Minute(s)</th>
      <th>
        <button className="btn call-btn" onClick={handleClick}>
          <span>
            <i className="fas fa-video"></i>
          </span>
          Call
        </button>
      </th>
    </tr>
  )
});

  return (
    <div className="row ">
      <div className="col-md-6 ">
        <div className="table-info ">
          <h5 className="text-warning text-center">Registered Users</h5>
          <table className="table text-light">
            <tbody>
              
              {viewRegisteredUserList}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-md-6 ">
        {showItem ? (
        // video work start here
        <div className="card right-live-card-bg my-2 w-75 mx-auto bg-dark">
          
          <Iframe url="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8"
            width="100%"
            height="700px"
            id="myId"
            allow="camera;microphone"
            className="myClassname"
            display="initial"
            position="relative"/>

        </div>
        ) : (
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
        />

        <div className="card-body">
          <h5 className="card-title text-warning">Instruction</h5>
          <p className="card-text text-light">
            <Markup content={event.description}/>
          </p>
          <div className="time-table d-flex  ">
            <span className="clock">
              <i className="fas fa-calendar-week fa-3x p-2"></i>
            </span>
            <div className="other mx-1 p-2">
              <span className="text-light">{event.title}</span>
              <br></br>
              <span className="text-warning date-font">{moment(event.date).format('LL')}</span>
            </div>
          </div>

          <div className="time-table2 d-flex  my-3">
            <span className="clock">
              <i className="fas fa-clock  fa-3x p-2"></i>
            </span>
            <div className="other mx-1 p-2">
              <span className="text-light">Time</span>
              <br></br>
              <span className="text-warning date-font">{moment(event.start_time).format('h:mm A')}-{moment(event.end_time).format('h:mm A')}</span>
            </div>
          </div>

          <div className="time-table3 d-flex  my-3">
            <span className="clock">
              <i className="fas fa-dollar-sign fa-3x p-2"></i>
            </span>
            <div className="other mx-1 p-2">
              <span className="text-light">Cost per minute</span>
              <br></br>
              <span className="text-warning date-font">{event.fee} BDT</span>
            </div>
          </div>
        </div>
      </div>
        )}
        
      </div>
    </div>
  );
};


export default StarRegisterUser;
