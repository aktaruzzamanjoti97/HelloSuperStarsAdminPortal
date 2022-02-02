import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import Iframe from 'react-iframe';
import "./StarVideoChat.css";
// import balhasan from "../../../../../src/assets/images/meetupEvent/balhasan.png";
// import Chat from "../../../../../src/assets/images/meetupEvent/chat.png";
import bubbleChat from "../../../../../src/assets/images/meetupEvent/bubble-chat 1.png";
import person from "../../../../../src/assets/images/meetupEvent/picci.png";
import person2 from "../../../../../src/assets/images/meetupEvent/chulboro.png";
import person3 from "../../../../../src/assets/images/meetupEvent/mofiz.png";
import message from "../../../../../src/assets/images/meetupEvent/message.png";
import axios from "axios";
import { Col, Nav, Row, Tab } from 'react-bootstrap';

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
          <div className="card-body">
            <div className="row">

              <div className="col-4 d-flex align-items-center">
                <img src={message} alt="" height="60px" width="60px" />
              </div>

              <div className="col-4 d-flex justify-content-center align-items-center ">
                <div className="text-center">
                  <div className="btn btn-warning">
                    <i class="fas fa-microphone fa-2x"></i>
                  </div>
                  <div className="btn btn-warning mx-2">
                    <i class="fa fa-video-camera fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="btn btn-warning">
                    <i class="fas fa-times-circle fa-2x"></i>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center ">
                <div className="text-center">
                  <div className="btn btn-warning">
                    <span><i class="fas fa-times-circle fa-2x"></i></span><span>00:58:34</span>
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
                <span> <img src={bubbleChat} className="img-fluid-Tab mx-2" alt="" /></span>
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
            <Tab.Pane eventKey="first">
              fewtrret
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              eterter
            </Tab.Pane>
          </Tab.Content>

        </Tab.Container>

        <div className="card  my-3 chatting-card text-light">
          <div className="card-body ">
            <h4>
              <img src={bubbleChat} className="img-fluid mx-1" alt="" />
              Comments
            </h4>
            <div id="maincontainer">
              <div id="childcontainer">
                <div className="d-flex mb-3">
                  <img src={person} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samsul Haque
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Vai swing er beper tah abar bolen!
                    </small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img src={person2} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samshu alom
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Kops vai! wish me luck
                    </small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <img src={person3} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Asaduzzaman
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      How are you bro!{" "}
                    </small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <img src={person2} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samshu alom
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Kops vai! wish me luck
                    </small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <img src={person} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samsul Haque
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Vai swing er beper tah abar bolen!
                    </small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img src={person2} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samshu alom
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Kops vai! wish me luck
                    </small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <img src={person3} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Asaduzzaman
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      How are you bro!{" "}
                    </small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <img src={person2} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samshu alom
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Kops vai! wish me luck
                    </small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img src={person} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samsul Haque
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Vai swing er beper tah abar bolen!
                    </small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img src={person2} alt="" height="40px" width="40px" className="chat-person-name" />
                  <div className="live-info">
                    <h6 className="mx-2 my-0  p-0 chat-person-name">
                      Samshu alom
                    </h6>
                    <small className="mx-2 my-0 p-0 text-muted fw-bold">
                      Kops vai! wish me luck
                    </small>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
);
};

export default StarVideoChat;