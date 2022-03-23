import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import MeetupImage1 from '../../../assets/images/MeetupImages/unsplash_MXbM1NrRqtI.png';
import RadisonBlue from '../../../assets/images/MeetupImages/unsplash_QdAAasrZhdk.png';
import LeMerridian from '../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png';
import Session from '../../../assets/images/MeetupImages/unsplash_YC8qqp50BdA.png'
import EnterImage from '../../../assets/images/enter 1.png'

const CompleteAuditionSlider = () => {


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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Fetch Stars Added By Admin
   

    return (
        <div>

            <div className="slick-parent d-flex justify-content-center">
                <Slider className="slider-width" {...settings}>



                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src="" className="img-fluid" alt="" style={{ height: '200px' }} />
                                <div className="p-3">
                                    <div className="d-flex justify-content-between">
                                        {/* <Link to={`/audition-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                                            <h5 className="text-white">title</h5>
                                        {/* </Link> */}
                                        <img className="img-fluid" src="" alt="" />
                                    </div>

                                    <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and
                                    </p>
                                </div>

                            </div>
                        </div>

              


                </Slider>
            </div>


        </div>
    );
};

export default CompleteAuditionSlider;