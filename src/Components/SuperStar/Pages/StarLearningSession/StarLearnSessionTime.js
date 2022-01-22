import React from "react";
import Banner from "../../../../assets/images/LearningSession/LearningS.png";

import calendar from "../../../../assets/images/Souvenir/calendar.png";
import Clock from "../../../../assets/images/Souvenir/clock.png";

import Spotlight from "../../../../assets/images/Auditions/spotlight.png";
import Unsplash from "../../../../assets/images/Auditions/unsplash.png";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const StarLearnSessionTime = () => {
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
                    <h4 className="text-light fw-bold  mb-4 ">Piano Learning Session</h4>
                    <p className="text-light ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                    <p className="text-light ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>{" "}
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
                                    21st November{" "}
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
                                    10:00 PM - 11:00 PM
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Link to="/superstar/learning-session/request-learning-session">
                            <Button className="btn bg-warning text-black fw-bold" style={{ width: "100px" }}  >
                                Approved
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StarLearnSessionTime;
