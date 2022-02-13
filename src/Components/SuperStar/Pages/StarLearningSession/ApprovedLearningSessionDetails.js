import React, { useState, useEffect } from 'react';
import Banner from "../../../../assets/images/LearningSession/LearningS.png";

import calendar from "../../../../assets/images/Souvenir/calendar.png";
import Clock from "../../../../assets/images/Souvenir/clock.png";


import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Markup } from 'interweave';
import moment from 'moment';

const AppLearnSessionTime = (props) => {

    const [event, setEvent] = useState('');

    useEffect(() => {
        let isMounted = true;
    
        const event_id = props.match.params.id;
    
        axios.get(`/api/star/learning_session/pending/${event_id}`).then(res =>{
        
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setEvent(res.data.event);
                }
            }
        });
    
    }, [props.match.params.id]);

    return (
        <>
            <div className="card m-3">
                <img src={Banner} alt="" className="Banner-Auditions" />
                <div class="centered ">
                    <div className="MENbtn d-flex ">
                        <div className="btn-l-1">
                            <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                                2
                            </button>{" "}
                            <br />
                            <span className="mx-2 text-light">hours</span>
                        </div>
                        <div className="btn-l-1">
                            <button className="None-Btn">-</button>
                        </div>
                        <div className="btn-l-1">
                            <button className="btn btn-light mx-2 MENbtn-text fw-bold">
                                30
                            </button>{" "}
                            <br />
                            <span className="mx-2 text-light">minutes</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-3 d-flex Audition-Main">
                <div className="mt-4 mb-5 ">
                    <h4 className="text-light fw-bold  mb-4 ">{event.title}</h4>
                    <p className="text-light ">
                        <Markup content={event.description}></Markup>
                    </p>
                    
                    <br />
                    <div className=" col-12 BTN-x-P">
                        <div className="d-flex  buTon-EMN py-2 p-3">
                            <div className=" mx-3 mt-2">
                                <span className="text-light">
                                    {" "}
                                    <img src={calendar} alt="" className="PriceTage" />
                                </span>
                            </div>
                            <div className=" mx-1">
                                <span className="text-light">Start</span>
                                <br></br>
                                <span className="text-warning BtnTextNMP fw-bold">
                                    
                                    {moment(event.date).format('LL')}
                                </span>
                            </div>
                        </div>

                        <div className="d-flex buTon-EMN py-2 p-3 ">
                            <div className=" mx-3 mt-2">
                                <span className="text-light">
                                    {" "}
                                    <img src={Clock} alt="" className="PriceTage" />
                                </span>
                            </div>
                            <div className=" mx-1">
                                <span className="text-light">End</span>
                                <br></br>
                                <span className="text-warning BtnTextNMP fw-bold">
                                {moment(event.start_time, "HH:mm:ss").format("hh:mm A")} - {moment(event.end_time, "HH:mm:ss").format("hh:mm A")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Link to={`/superstar/learning-session/join/${event.id}`} className='Link'>
                            <Button className="btn bg-warning text-black fw-bold" style={{ width: "100px" }}  >
                                Join
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppLearnSessionTime;
