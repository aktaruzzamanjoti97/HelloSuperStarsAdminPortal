import React, { useState, useEffect  } from 'react';
import { Button, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import MeetupImage1 from '../../../../../../../assets/images/MeetupImages/unsplash_MXbM1NrRqtI.png';
import RadisonBlue from '../../../../../../../assets/images/MeetupImages/unsplash_QdAAasrZhdk.png';
import LeMerridian from '../../../../../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png';
import Session from '../../../../../../../assets/images/MeetupImages/unsplash_YC8qqp50BdA.png'
import EnterImage from '../../../../../../../assets/images/enter 1.png'
import './CompletedEventSliders.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const CompletedEventSliders = () => {

    const [meetupEvents, setMeetupEvents] = useState([]);

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

    // // Fetch Stars Added By Admin
    // useEffect(() => {

    //     axios.get(`/api/admin/meetup_event/approved`).then(res =>{

    //       if(res.status === 200)
    //       {
    //         setMeetupEvents(res.data.meetup);
    //         //console.log(res.data.category);
    //       }
    //     });

    // }, []);

    return (
        <div>

            <div className="slick-parent d-flex justify-content-center">
                <Slider className="slider-width" {...settings}>

                {/* {meetupEvents.map((event, index) => ( */}
                    
                    <div className="p-3">
                        <div className="completedMeetupBlack">
                            <img src={EnterImage} className="img-fluid" alt="" style={{ height: '200px' }} />
                            <div className="p-3">
                                <div className="d-flex justify-content-between">
                                    {/* <Link to={`/superstar-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                                        <h5 className="text-white">Title</h5>
                                    {/* </Link> */}
                                    <img className="img-fluid" src={EnterImage} alt="" />
                                </div>

                                <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and
                                </p>
                            </div>

                        </div>
                    </div>
                    
                {/* ))} */}
                

                </Slider>
            </div>

            
        </div>
    );
};

export default CompletedEventSliders;