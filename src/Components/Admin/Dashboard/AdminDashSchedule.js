import axios from "axios";
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Slider from "react-slick";
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

const history = useHistory();
const [schedule, setSchedule] = useState([]);


useEffect(() => {

    axios.get("/api/admin/schedule_list").then(res => {
        if(res.data.status === 200)
        {
            setSchedule(res.data.schedule);

            console.log(res.data.schedule);
        }
    });

}, []);


    



return (
<>
    <div className="slick-parent d-flex justify-content-center">
        <Slider className="slider-width" {...settings}>

        {schedule.map((schedule, index) => (
            <div className="col-md-3">
                
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSchedule" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">25</div>
                        </center>
                    </div>
                    <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                    <div className="d-flex justify-content-center PendingAdSchedule">
                        <p className="fw-bold text-dark mt-4">{moment(schedule.date).format('LL')}</p>
                    </div>
                    </Link>
                </div>
                
            </div>
        ))}

            

            <div className="col-md-3">
                <Link to='/superstar-admin/event-date' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSchedule" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">25</div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center ApprovedAdSchedule">
                        <p className="fw-bold mt-4">February , 2022</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to='/superstar-admin/event-date' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSchedule" alt="" />
                            <div class="centeredImgC fw-bold  mt-2">23</div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center ApprovedAdSchedule">
                        <p className="fw-bold mt-4">March , 2021</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to='/superstar-admin/event-date' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSchedule" alt="" />
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
                <Link to='/superstar-admin/event-date' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body">
                        <center>
                            <img src={Session} className="img-fluid ADImgSchedule" alt="" />
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