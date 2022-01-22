import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import './LearningSession.css'
import LeMerridian from "../../../../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png";
import Session from "../../../../../../assets/images/email.png";

const RequestLearnSlide = () => {
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
return (
<>
    <div className="slick-parent d-flex justify-content-center">
        <Slider className="slider-width" {...settings}>
            <div className="col-md-3">
                <Link to='/superstar/learning-session/request/event' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <center>
                            <img src={Session} className="img-fluid MessageIcon" alt="" />
                            <div class="centeredImgC fw-bold">23</div>
                        </center>
                        <div className="d-flex justify-content-between">
                            <img src={LeMerridian} alt="Snow" className='ImgSMeet' />
                            <div class="top-left-SAch">
                                <span>
                                    <h5 className="mt-2 text-warning">Raddussond Blue</h5>
                                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                </Link>
            </div>

            <div className="col-md-3">
                <Link to='/superstar/learning-session/request/event' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <center>
                            <img src={Session} className="img-fluid MessageIcon" alt="" />
                            <div class="centeredImgC fw-bold">23</div>
                        </center>
                        <div className="d-flex justify-content-between">
                            <img src={LeMerridian} alt="Snow" className='ImgSMeet' />
                            <div class="top-left-SAch">
                                <span>
                                    <h5 className="mt-2 text-warning">Raddussond Blue</h5>
                                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                </Link>
            </div>

            <div className="col-md-3">
                <Link to='/superstar/learning-session/request/event' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <center>
                            <img src={Session} className="img-fluid MessageIcon" alt="" />
                            <div class="centeredImgC fw-bold">23</div>
                        </center>
                        <div className="d-flex justify-content-between">
                            <img src={LeMerridian} alt="Snow" className='ImgSMeet' />
                            <div class="top-left-SAch">
                                <span>
                                    <h5 className="mt-2 text-warning">Raddussond Blue</h5>
                                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to='/superstar/learning-session/request/event' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <center>
                            <img src={Session} className="img-fluid MessageIcon" alt="" />
                            <div class="centeredImgC fw-bold">23</div>
                        </center>
                        <div className="d-flex justify-content-between">
                            <img src={LeMerridian} alt="Snow" className='ImgSMeet' />
                            <div class="top-left-SAch">
                                <span>
                                    <h5 className="mt-2 text-warning">Raddussond Blue</h5>
                                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to='/superstar/learning-session/request/event' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <center>
                            <img src={Session} className="img-fluid MessageIcon" alt="" />
                            <div class="centeredImgC fw-bold">23</div>
                        </center>
                        <div className="d-flex justify-content-between">
                            <img src={LeMerridian} alt="Snow" className='ImgSMeet' />
                            <div class="top-left-SAch">
                                <span>
                                    <h5 className="mt-2 text-warning">Raddussond Blue</h5>
                                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </Slider>
    </div>
</>
);
};

export default RequestLearnSlide;