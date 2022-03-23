import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Bang from '../../../../../assets/images/Fanbase-img/9.png';
import Session from "../../../../../assets/images/email.png";

const HomeFanLive = () => {
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


    <div className="pb-3">

        <div className="slick-parent d-flex justify-content-center">
            <Slider className="slider-width" {...settings}>

                <div className="col-md-3">
                    <Link to='/superstar/fan-group-live' className='LinkEventSchedule'>
                    <div className="card bg-dark my-3 card-dashbord">
                        <div className="card-body containerFan">
                            <img src={Bang} className="BangFan" alt="" />

                            <img src={Session} className="centeredFanIcon" alt="" />
                            <div class="centeredImgC fw-bold  mt-2 centeredFanITn">23</div>
                            <div class="centeredFanIText">Slaman Vs Shah Rukh</div>

                        </div>
                        <div className="d-flex justify-content-center ApprovedFan">
                            <p className="fw-bold mt-4">22.03.22 to 25.03.22</p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to='/superstar/fan-group-live' className='LinkEventSchedule'>
                    <div className="card bg-dark my-3 card-dashbord">
                        <div className="card-body containerFan">
                            <img src={Bang} className="BangFan" alt="" />

                            <img src={Session} className="centeredFanIcon" alt="" />
                            <div class="centeredImgC fw-bold  mt-2 centeredFanITn">23</div>
                            <div class="centeredFanIText">Slaman Vs Shah Rukh</div>

                        </div>
                        <div className="d-flex justify-content-center ApprovedFan">
                            <p className="fw-bold mt-4">22.03.22 to 25.03.22</p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to='/superstar/fan-group-live' className='LinkEventSchedule'>
                    <div className="card bg-dark my-3 card-dashbord">
                        <div className="card-body containerFan">
                            <img src={Bang} className="BangFan" alt="" />

                            <img src={Session} className="centeredFanIcon" alt="" />
                            <div class="centeredImgC fw-bold  mt-2 centeredFanITn">23</div>
                            <div class="centeredFanIText">Slaman Vs Shah Rukh</div>

                        </div>
                        <div className="d-flex justify-content-center ApprovedFan">
                            <p className="fw-bold mt-4">22.03.22 to 25.03.22</p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to='/superstar/fan-group-live' className='LinkEventSchedule'>
                    <div className="card bg-dark my-3 card-dashbord">
                        <div className="card-body containerFan">
                            <img src={Bang} className="BangFan" alt="" />

                            <img src={Session} className="centeredFanIcon" alt="" />
                            <div class="centeredImgC fw-bold  mt-2 centeredFanITn">23</div>
                            <div class="centeredFanIText">Slaman Vs Shah Rukh</div>

                        </div>
                        <div className="d-flex justify-content-center ApprovedFan">
                            <p className="fw-bold mt-4">22.03.22 to 25.03.22</p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to='/superstar/fan-group-live' className='LinkEventSchedule'>
                    <div className="card bg-dark my-3 card-dashbord">
                        <div className="card-body containerFan">
                            <img src={Bang} className="BangFan" alt="" />

                            <img src={Session} className="centeredFanIcon" alt="" />
                            <div class="centeredImgC fw-bold  mt-2 centeredFanITn">23</div>
                            <div class="centeredFanIText">Slaman Vs Shah Rukh</div>

                        </div>
                        <div className="d-flex justify-content-center ApprovedFan">
                            <p className="fw-bold mt-4">22.03.22 to 25.03.22</p>
                        </div>
                    </div>
                    </Link>
                </div>

            </Slider>
        </div>
    </div>

</>
);
};

export default HomeFanLive