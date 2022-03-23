import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Bang from '../../../../../assets/images/Fanbase-img/9.png';
import Session from "../../../../../assets/images/email.png";
import FanGroupNav from "../FanGroupNav";
import axios from "axios";
import moment from 'moment';

const AcceptedFan = () => {
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

    const [allFanAccept, setAllFanAccept] = useState([]);

    useEffect(() => {

        axios.get("/api/star/fan/group/starlist/status").then(res => {
          if (res.data.status === 200) {
            console.log( res.data);

            setAllFanAccept(res.data.starApproved);
    
          }
        });
    
    }, []);

    return (
        <>

            <FanGroupNav />

            <div className="liveMeetupBorder my-5">
                <div className="d-flex px-4 pt-3">
                    <div className="faTrophy"><i class="far fa-calendar-alt"></i></div>
                    <h4 className="mx-3 text-white p-2">Accepted</h4>
                    <span className="mx-3 text-white py-2 mt-1"><i class="fas fa-square squareAFan"></i> &nbsp;
                        Approved</span>
                    {/* <span className="mx-3 text-white py-2 mt-1"><i class="fas fa-square squareASchePen"></i> &nbsp;
                Pending</span> */}
                </div>

                <div className="pb-3">

                    <div className="slick-parent d-flex justify-content-center">
                        <Slider className="slider-width" {...settings}>

                        
                        {allFanAccept.map((fangroup, index) => (
                            <div className="col-md-3">
                                <Link to='/superstar/fan-group-live' className='LinkEventSchedule'>
                                    <div className="card bg-dark my-3 card-dashbord">
                                        <div className="card-body containerFan">
                                            <img src={`http://localhost:8000/${fangroup.banner}`} className="img-fluid" alt="" />

                                            <img src={Session} className="img-fluid ADImgSchedule centeredFanIcon" alt="" />
                                            <div class="centeredImgC fw-bold  mt-2 centeredFanITn">23</div>
                                            <div class="centeredFanIText">{ fangroup.group_name }</div>

                                        </div>
                                        <div className="d-flex justify-content-center ApprovedFan">
                                            <p className="fw-bold mt-4">{moment(fangroup.start_date).format('LL')} to {moment(fangroup.end_date).format('LL')}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        </Slider>
                    </div>
                </div>
                {/* <center>
            <Link to='/superstar-admin/dashboard'><Button className='btn bg-warning mt-3 mb-3 fw-bold text-dark '> View
                All</Button></Link>
        </center> */}

            </div>

        </>
    );
};

export default AcceptedFan