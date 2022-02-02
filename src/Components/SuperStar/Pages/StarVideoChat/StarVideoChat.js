import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

import Iframe from 'react-iframe';
import { Nav, Tab } from 'react-bootstrap';
import StarComments from './StarComments';
import "./StarVideoChat.css";

import User from "../../../../assets/images/user1.png";
import bubbleChat from "../../../../../src/assets/images/meetupEvent/bubble-chat 1.png";
import message from "../../../../../src/assets/images/meetupEvent/message.png";
import Clock from "../../../../assets/images/clock.png";

import axios from "axios";
import StarUserPortal from './StarUserPortal';

const StarVideoChat = (props) => {
  

const history = useHistory();

const [event, setEvent] = useState('');

useEffect(() => {
let isMounted = true;

const event_id = props.match.params.id;

axios.get(`/api/star/meetup_event_details/${event_id}`).then(res =>{

if(isMounted)
{
if(res.data.status === 200)
{
setEvent(res.data.meetup);
console.log(res.data.meetup);
}
}
});

}, [props.match.params.id, history]);

return (
<div className="main-div-star">

  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
        <div className="card my-3 bg-warning balCard">
          <Iframe url={event.event_link} width="100%" height="600hv" id="myId" allow="camera;microphone"
            className="myClassname bg-dark" display="initial" position="relative" />
        </div>

        <div className="card bg-dark">
          <div className="mx-2 my-2">
            <div className="row">

              {/* <div className="col-4 d-flex align-items-center">
                <img src={message} alt="" className='btn ' />
              </div> */}

              <div className="col-4 d-flex align-items-center">
                <div className="text-center">
                  <div className="btn ">
                  <img src={message} alt="" className='' width={40} />
                  </div>
                </div>
              </div>

              <div className="col-4 d-flex justify-content-center align-items-center ">
                <div className="text-center">
                  <div className="btn btn-warning">
                    <i class="fas fa-microphone"></i>
                  </div>
                  <div className="btn btn-warning mx-2">
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                  </div>
                  <div className="btn btn-warning">
                    <i class="fas fa-times-circle"></i>
                  </div>
                </div>
              </div>
              
              <div className="col-4 d-flex justify-content-end align-items-center ">
                <div className="text-center">
                  <div className="btn text-warning ">
                  <span><img src={Clock} alt="" className='' width={25} /></span>&nbsp; &nbsp;
                  <span className='fw-bold'>01:03:59</span>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>




      <div className="col-md-4  my-3">

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="d-flex TabCom ">
            <div className="TabBtn1 w-100 px-2">
              <Nav.Link eventKey="first" className='btn fw-bold text-dark bg-warning'>
                <span> <img src={User} className="img-fluid-Tab mx-2" alt="" /></span>
                <span>User Portal</span>
              </Nav.Link>
            </div>
            <div className="TabBtn2 w-100  px-2">
              <Nav.Link eventKey="second" className='btn fw-bold text-light bg-success'>
                <span> <img src={bubbleChat} className="img-fluid-Tab mx-2" alt="" /></span>
                <span>Comments</span>
              </Nav.Link>
            </div>
          </div>

          <Tab.Content>

            {/* Tab || User Portal  */}
            <Tab.Pane eventKey="first">
              <StarUserPortal/>
            </Tab.Pane>

            {/* Tab || Comments  */}
            <Tab.Pane eventKey="second">
             <StarComments/>
            </Tab.Pane>

          </Tab.Content>

        </Tab.Container>

      </div>
    </div>

  </div>
</div>
);
};

export default StarVideoChat;