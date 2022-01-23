import React from 'react'
import './LearningSession.css'
import MeetPic from "../../../../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png";
import Meet from "../../../../../../assets/images/team.png";
import { Link } from 'react-router-dom';

const RequestLearnEvent = () => {
return(
<>
    <div className="col-md-12 ">
        <div className="d-flex pt-3">
            <div className="faTrophy"><i class="fas fa-trophy"></i></div>

            <h4 className="mx-3 text-warning p-2">Event Learning Session  
                <span className='text-success'> || </span> 
                <span className='text-light SpanText_l'>2nd Feb 2022 </span>
            </h4>

        </div>

        <div className="row">

            <div className="col-md-3">
                <Link to='/superstar/learning-session/request/approved' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">

                        <div className="d-flex justify-content-between">
                            <div className="d-flex col-md-4 mx-2">
                                <img src={Meet} className="img-fluid MeetIp" alt="" />
                            </div>
                            <div className="d-flex col-md-8">
                                <div class=" mt-3 MeetText">
                                    <span className='fw-bold text-warning MeetupT'>10:00 AM - 10:30 AM</span> <br />
                                    <span className='text-light MeetupTp'>Member 20</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <img src={MeetPic} alt="Snow" className='ImgSMeet' />
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
                <Link to='/superstar/learning-session/request/approved' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">

                        <div className="d-flex justify-content-between">
                            <div className="d-flex col-md-4 mx-2">
                                <img src={Meet} className="img-fluid MeetIp" alt="" />
                            </div>
                            <div className="d-flex col-md-8">
                                <div class=" mt-3 MeetText">
                                    <span className='fw-bold text-warning MeetupT'>10:00 AM - 10:30 AM</span> <br />
                                    <span className='text-light MeetupTp'>Member 20</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <img src={MeetPic} alt="Snow" className='ImgSMeet' />
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
                <Link to='/superstar/learning-session/request/approved' className='LinkEventSchedule'>
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">

                        <div className="d-flex justify-content-between">
                            <div className="d-flex col-md-4 mx-2">
                                <img src={Meet} className="img-fluid MeetIp" alt="" />
                            </div>
                            <div className="d-flex col-md-8">
                                <div class=" mt-3 MeetText">
                                    <span className='fw-bold text-warning MeetupT'>10:00 AM - 10:30 AM</span> <br />
                                    <span className='text-light MeetupTp'>Member 20</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <img src={MeetPic} alt="Snow" className='ImgSMeet' />
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

        </div>

    </div>
</>
)
};

export default RequestLearnEvent;