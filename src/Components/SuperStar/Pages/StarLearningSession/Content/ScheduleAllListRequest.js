import React from 'react'

import MeetupImage1 from "../../../../../assets/images/MeetupImages/unsplash_MXbM1NrRqtI.png";
import LeMerridian from "../../../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png";
import Session from "../../../../../assets/images/MeetupImages/unsplash_YC8qqp50BdA.png";
import EnterImage from "../../../../../assets/images/enter 1.png";
import { Link } from 'react-router-dom';

const ScheduleAllListRequest = () => {
return (
<>
    <div className="col-md-12 ">
        <div className="d-flex pt-3">
            <div className="faTrophy"><i class="fas fa-trophy"></i></div>
            <h4 className="mx-3 text-white p-2">Requested Learning Session ( Schedule )</h4>
        </div>

        <div className="row">

            <div className="col-md-3">
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <img src={Session} className="img-fluid" alt="" />
                        <div className="d-flex justify-content-between">
                            <span>
                                <h5 className="text-white mt-2">Raddusson Blue</h5>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                            </span>
                            <img className="img-fluid mt-2" src={EnterImage} alt="" style={{ width:"20px", height:"20px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <img src={Session} className="img-fluid" alt="" />
                        <div className="d-flex justify-content-between">
                            <span>
                                <h5 className="text-white mt-2">Raddusson Blue</h5>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                            </span>
                            <img className="img-fluid mt-2" src={EnterImage} alt="" style={{ width:"20px", height:"20px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <img src={Session} className="img-fluid" alt="" />
                        <div className="d-flex justify-content-between">
                            <span>
                                <h5 className="text-white mt-2">Raddusson Blue</h5>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                            </span>
                            <img className="img-fluid mt-2" src={EnterImage} alt="" style={{ width:"20px", height:"20px" }}  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <img src={Session} className="img-fluid" alt="" />
                        <div className="d-flex justify-content-between">
                            <span>
                                <h5 className="text-white mt-2">Raddusson Blue</h5>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                            </span>
                            <img className="img-fluid mt-2" src={EnterImage} alt="" style={{ width:"20px", height:"20px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card bg-dark my-3 card-dashbord">
                    <div className="card-body mb-2 text-black">
                        <img src={Session} className="img-fluid" alt="" />
                        <div className="d-flex justify-content-between">
                            <span>
                                <h5 className="text-white mt-2">Raddusson Blue</h5>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and</p>
                            </span>
                            <img className="img-fluid mt-2" src={EnterImage} alt="" style={{ width:"20px", height:"20px" }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</>
)
}

export default ScheduleAllListRequest