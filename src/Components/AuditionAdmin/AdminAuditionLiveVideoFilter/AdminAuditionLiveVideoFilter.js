import React from 'react';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import liveVideoPng from '../../../assets/images/liveVideoUpload.PNG';
import roundSubmissionPlay from '../../../assets/images/ShakibPlayVideoGreetings.png';
import './AdminAuditionLiveVideoFilter.css';

const AdminAuditionLiveVideoFilter = () => {
    let history = useHistory();

    const handleClick =() => {
        history.push('/audition-admin/audition/audition-video')
    }

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

    return (
        <div className="">
            <div className="liveFilterImage">
                <img src={liveVideoPng} className="img-fluid w-100" alt="" />
            </div>

            <div className="d-flex justify-content-between bg-dark p-3 my-4 rounded-3">
                <h3 className="text-light mx-4">Guitar for the beginners - Round 1</h3>
                <i className="fa-solid fa-angles-down text-warning videoFilterIcon"></i>
            </div>

            <div className='bg-dark p-3'>
                <div>
                    <div className="d-flex p-1">
                        <i className="fa-solid fa-video mx-2 text-warning videoFilterIcon"></i>
                        <h3 className="text-warning mx-3">Round 1 Submission</h3>
                    </div>
                </div>




                <div className="slick-parent d-flex justify-content-center">
                    <Slider className="slider-width" {...settings}>



                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="completedMeetupBlack">
                                <img src={roundSubmissionPlay} className="img-fluid w-100" alt="" style={{ height: '250px' }} />
                            </div>
                        </div>

                    </Slider>
                </div>

                <div className='d-flex justify-content-end my-3'>
                    <button onClick={handleClick} className="btn btn-info px-5">
                        <i className="fa-solid fa-filter text-light filterIcon"></i> <span className="filterTxt text-light">Filter</span>
                    </button>
                    <button className="btn btn-light px-5 mx-3">
                        <i className="fa-solid fa-angles-right text-primary filterIcon"></i> <span className="filterTxt text-primary">Next round</span>
                    </button>
                </div>





            </div>

        </div>
    );
};

export default AdminAuditionLiveVideoFilter;