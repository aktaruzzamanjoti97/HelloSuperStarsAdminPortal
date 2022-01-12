import React from "react";
// import "./StarVideoLearnig.css";
import balhasan from "../../../../../assets/images/meetupEvent/balhasan.png";
import Chat from "../../../../../assets/images/meetupEvent/chat.png";
import bubbleChat from "../../../../../assets/images/meetupEvent/bubble-chat 1.png";
import person from "../../../../../assets/images/meetupEvent/picci.png";
import person2 from "../../../../../assets/images/meetupEvent/chulboro.png";
import person3 from "../../../../../assets/images/meetupEvent/mofiz.png";
import ChatIcon from "../../../../../assets/images/LearningSession/new-message 1.png";


import Slider from "react-slick";
const StarVideoLearnig = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: false,
  };
  return (
    <div className="main-div-star">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card my-3 bg-warning balCard">
              <img src={balhasan} className="img-fluid" alt="" />
              <img
                src={Chat}
                alt=""
                className="img-fluid bottomleft-balhasan"
              />
            </div>
          
            <div className="card messsage-card">
          <div className="container-fluid custom-chat-container">

              <img src={ChatIcon} alt="" className="pt-3" />
            
          </div>
        </div>
          
          </div>

          <div className="col-md-4 ">
            <div className="card  my-3 chatting-card text-light">
              <div className="card-body ">
                <h4>
                  <img src={bubbleChat} className="img-fluid mx-1" alt="" />
                  Comments
                </h4>

                <div id="maincontainer">
                  <div id="childcontainer">
                    <div className="d-flex mb-3">
                      <img
                        src={person2}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person3}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person2}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person2}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person3}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person2}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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
                      <img
                        src={person2}
                        alt=""
                        height="40px"
                        width="40px"
                        className="chat-person-name"
                      />
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

export default StarVideoLearnig;
