import React, { useState, useEffect } from "react";
import fatema from "../../../../assets/images/AdminLiveProfile/cx.webp";
import { useHistory} from 'react-router-dom';
import moment from 'moment';
import Iframe from 'react-iframe';
import ReactPlayer from "react-player";

import { Markup } from "interweave";
import './AdminVideoJoin.css'

const AdminVideoJoin = (props) => {
const [showItem, setShowItem] = useState(false);
const [registeredLiveChat, setRegisteredLiveChat] = useState([]);
const [event, setEvent] = useState('');

const history = useHistory();

function handleClick() {
setShowItem(true);
}


return (
<div className="row ">
  <div className="col-md-6 ">
    <div className="table-info ">
      <h5 className="text-warning text-center">Registered Users</h5>
      <table className="table text-light">
        <tbody>

          <tr>
            <th scope="row">
              <img src={fatema} alt="imgBaseURL" className="rounded-circle register-user-img" />
              <span> Shakib All Hasan</span>
            </th>
            <th>11:50 PM</th>
            <th>5 mn</th>
            <th>
              {/* <button className="btn call-btn" onClick={handleClick}>
                <span>
                  <i className="fas fa-video"></i>
                </span>&nbsp;
                Call
              </button> */}
            </th>
          </tr>

        </tbody>
      </table>
    </div>
  </div>

  <div className="col-md-6 ">
    {showItem ? (
    // video work start here
    <div className="card right-live-card-bg my-2 w-75 mx-auto bg-dark">

      <Iframe url="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8" width="100%"
        height="700px" id="myId" allow="camera;microphone" className="myClassname" display="initial"
        position="relative" />

    </div>
    ) : (
    <div className="card right-card-live mx-auto my-2">
      {/* <img className="card-img-top" src={sakib} alt="sakib img" />
      */}
      <ReactPlayer url="https://youtu.be/dgfTiONcnTc" playing={false} volume={1} width="100%" height="320px"
        style={{ margin: "0 auto" }} />

      <div className="card-body">
        <h5 className="card-title text-warning">Instruction</h5>
        <p className="card-text text-light">
          <Markup content={event.description} />
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
            <span className="text-warning date-font">3465</span>
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

export default AdminVideoJoin