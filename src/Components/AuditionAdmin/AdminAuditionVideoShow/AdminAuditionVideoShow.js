import React from "react";
import "./AdminAudtionVideoShow.css";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import finalRoundVideo from "../../../assets/images/finalRoundPageImg1.png";
import ArijitSingh from "../../../assets/images/ArijitSingh.png";
import nineFive from "../../../assets/images/nineFive.png";
import Shakib from "../../../assets/images/Cricket.png";
import shahrukh from "../../../assets/images/shahruk-khan.jpg";
import momotaz from "../../../assets/images/Momotaz.jpg";
import Team from "../../../assets/images/team.png";
import Hand from "../../../assets/images/raise-hand.png";
import bubbleChat from "../../../assets/images/meetupEvent/bubble-chat 1.png";
import person from "../../../assets/images/meetupEvent/picci.png";
import person2 from "../../../assets/images/meetupEvent/chulboro.png";
import person3 from "../../../assets/images/meetupEvent/mofiz.png";
import message from "../../../assets/images/meetupEvent/New folder/Vector.png";

const AdminAuditionVideoShow = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
      <div className="adminAuditionVideoBorder">
        <div className="row">
          <div className="col-md-8">
            <div className="container">
              <h4 className="text-light my-2">Habibur Rahman</h4>
              <div className="img-content my-3">
                {/* <img className="img-fluid w-100" src={finalRoundVideo} alt="" />
                 */}{" "}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=GcRKREorGSc"
                  width="100%"
                  height="50vh"
                />
                <div className="bottom-center-content">
                  <div className="row">
                    <div className="col-6 text-light">
                      <div className="card opacity-75 content-team-card">
                        <div className="card-body d-flex justify-content-around">
                          <img
                            src={Team}
                            alt=""
                            className="img-fluid mx-2"
                            height="20px"
                            width="30px"
                          />
                          <h3 className="text-danger team-num">28.6</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-light">
                      <div className="card opacity-75 content-team-card">
                        <div className="card-body d-flex justify-content-around">
                          <img
                            src={Hand}
                            alt=""
                            className="img-fluid mx-2"
                            height="20px"
                            width="30px"
                          />
                          <h3 className="text-danger team-num">3200</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="arijitPicCover mb-3">
                <div className="row">
                  <div className="col-md-2">
                    <img src={ArijitSingh} alt="" />
                  </div>
                  <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div className="ms-3 text-white">
                      <h1>
                        <b>Arijit Singh</b>
                      </h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Possimus quidem laboriosam perspiciatis ipsam iure
                        excepturi?
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={nineFive} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5 px-4">
            <div className="card chatting-card text-light">
              <div className="card-body chatting-card{" >
                <h4>
                  <img src={bubbleChat} className="img-fluid mx-1" alt="" />
                  Comments
                </h4>

                <div id="maincontainer">
                  <div id="childcontainer">
                    <div className="d-flex mb-3">
                      <img
                        src={message}
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
      <div className="finalRound my-4">
        <div className="d-flex justify-content-center">
          <div className="finalRoundWidth">
            <div className="py-3">
              <Slider {...settings}>
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="90%"
                    height="100%"
                  />
                </div>
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="90%"
                    height="100%"
                  />
                </div>
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="90%"
                    height="100%"
                  />
                </div>
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="90%"
                    height="100%"
                  />
                </div>
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="90%"
                    height="100%"
                  />
                </div>
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="90%"
                    height="100%"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAuditionVideoShow;
