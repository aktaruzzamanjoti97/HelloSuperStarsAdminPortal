import React from "react";
import "./AdminVideoChat.css";
import balhasan from "../../../../../../assets/images/meetupEvent/balhasan.png";
import Message from "../../../../../../assets/images/meetupEvent/message.png";
import bubbleChat from "../../../../../../assets/images/meetupEvent/bubble-chat 1.png";
import person from "../../../../../../assets/images/meetupEvent/picci.png";
import person2 from "../../../../../../assets/images/meetupEvent/chulboro.png";
import person3 from "../../../../../../assets/images/meetupEvent/mofiz.png";
import message from "../../../../../../assets/images/meetupEvent/New folder/Vector.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";


const AdminVideoChat = () => {
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
                    <Link to='/superstar-admin/video-chat-message' ><img src={Message} alt="" className="img-fluid MSGIcon-VC mx-3 mb-2" /></Link>
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
                                    <img src={message} alt="" height="40px" width="40px" className="chat-person-name" />
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
        <div className="card messsage-card">
            <div className="container-fluid custom-chat-container">
                <Slider {...settings} className="text-light p-2">
                    <div>
                        <img src={message} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                    <div>
                        <img src={person2} alt="" height="60px" width="60px" className="chat-person-name" />
                    </div>
                </Slider>
            </div>
        </div>
    </div>
</div>
);
};

export default AdminVideoChat;