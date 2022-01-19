import React from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import star from '../../../../../../src/assets/images/helloSuperStar.png'
// const percentage = 66;
const LiveChatSchedule2 = () => {

    return (
        <div className='container-fluid my-2'>
            <div className="d-flex justify-content-between">
                <h5 className='text-light'>Schedules</h5>
                <div className="btn btn-warning px-4 py-1"><span className='fw-bold'>+</span> New Schedule</div>
            </div>
            <div className="card bg-dark my-3">
                <div className="card-body container-fluid">


                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="text-light">January-15 days to go</h5>
                            <div className="row mt-4">
                                <div className="col-2">
                                    <p className='text-muted fw-bold'>Date</p>
                                </div>
                                <div className="col-10">
                                    <p className="text-light">5th January 2021</p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-2">
                                    <p className='text-muted fw-bold'>From</p>
                                </div>
                                <div className="col-10">
                                    <p className="text-light">6:50PM</p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-2">
                                    <p className='text-muted fw-bold'>To</p>
                                </div>
                                <div className="col-10">
                                    <p className="text-light">6:00</p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-2">
                                    <p className='text-muted fw-bold'>Target</p>
                                </div>
                                <div className="col-10">
                                    <p className="text-light">6 call</p>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-2">
                                    <p className='text-muted fw-bold'>Assurance</p>
                                </div>
                                <div className="col-10">
                                    <p className="text-light">I am "Mr stack" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, pariatur?</p>
                                </div>
                            </div>
                            <button className="btn btn-warning px-4 py-1">Edit</button>
                            <button className="btn btn-outline-warning px-4 py-1 ms-5">Delete</button>
                        </div>
                        <div className="col-md-4" style={{ borderLeft: "1px dashed yellow" }}>

                            <h5 className='text-light text-center my-3'>Status</h5>
                            <div className='d-flex justify-content-center align-items-center '>
                                <div style={{ width: 200, height: 200 }}>
                                    <CircularProgressbarWithChildren value={50} styles={buildStyles({


                                        // Colors
                                        pathColor: `gold`,

                                    })}>

                                        <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" />
                                        <div style={{ fontSize: 12, marginTop: -5 }}>
                                            <strong className='text-light'>50% complete</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                    <p className='text-warning text-center my-2'>Approve by Sakib Al Hasan</p>
                                </div>

                            </div>


                            <div>


                                <div className="p-5 text-center">
                                    <button className="btn" style={{ background: 'gray' }}>Create Event</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LiveChatSchedule2;