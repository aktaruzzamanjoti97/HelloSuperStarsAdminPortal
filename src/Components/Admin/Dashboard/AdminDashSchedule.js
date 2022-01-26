import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import LeMerridian from "../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png";
import Session from "../../../assets/images/email.png";

const AdminDashSchedule = () => {
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
                <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSched" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">23</div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center PendingAdSchedule">
                        <p className="fw-bold text-dark mt-4">January , 2022</p>
                    </div>
                </div>
                </Link>
            </div>

            <div className="col-md-3">
                <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSched" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">23</div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center ApprovedAdSchedule">
                        <p className="fw-bold mt-4">February , 2022</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSched" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">23</div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center ApprovedAdSchedule">
                        <p className="fw-bold mt-4">March , 2022</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSched" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">23</div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center ApprovedAdSchedule">
                        <p className="fw-bold mt-4">April , 2022</p>
                    </div>
                </div>
                </Link>
            </div>

            <div className="col-md-3">
                <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSched" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">23</div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center PendingAdSchedule">
                        <p className="fw-bold mt-4">May , 2022</p>
                    </div>
                </div>
                </Link>
            </div>

        </Slider>
    </div>
</>
);
};

export default AdminDashSchedule;