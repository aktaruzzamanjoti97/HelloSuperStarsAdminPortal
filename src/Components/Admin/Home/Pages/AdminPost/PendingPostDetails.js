import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import clock from '../../../../../assets/images/meetupEvent/clock.png'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import axios from "axios";
import "./SuperStarContent.css";
import { Markup } from 'interweave';
import moment from 'moment';
import Nav from './Nav';



const PendingPostDetails = (props) => {

    const history = useHistory();

    const [event, setEvent] = useState('');



    useEffect(() => {
        let isMounted = true;

        const event_id = props.match.params.id;

        axios.get(`/api/admin/simple_post/pending/${event_id}`).then(res => {

            if (isMounted) {
                if (res.data.status === 200) {
                    setEvent(res.data.post);
                }
            }
        });

    }, [props.match.params.id, history]);



    return (
        <>
            <div className="AS">





                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card event-card">
                                <img src={`http://localhost:8000/${event.image}`} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>





                    <div className="row my-4">
                        <div className="col-md-12">
                            <div className="card event-card2 shadow">
                                <div className="card-body">
                                    <h5 className="text-light p-2">{event.title}    <sub className='text-warning'>(offline)</sub></h5>
                                    <p className='text-light'>
                                        <Markup content={event.description} />
                                    </p>
                                    <p className="text-light fw-bold">
                                        {moment(event.date).format('LL')} | {moment(event.start_time, "HH:mm:ss").format("hh:mm A")}-{moment(event.end_time, "HH:mm:ss").format("hh:mm A")}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>




                    <div className="card event-card2">
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={clock} className="img-fluid p-3" alt="" />
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <div>
                                    <h2 className='text-warning'>Event Details submitted</h2>
                                    <p className='text-light'>
                                        {event.status === 1 ? (<span className="fw-bold">Already Published</span>) : event.star_approval === 1 ? (<span className="fw-bold">Waiting for &nbsp; Manager Admin Approval</span>) : (<span className="fw-bold">Waiting for &nbsp; Star & Manager Admin Approval</span>)}
                                        &nbsp;
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4" style={{ borderLeft: "1px dashed yellow" }}>

                                <h5 className='text-light text-center my-3'>Status</h5>
                                <div className='d-flex justify-content-center align-items-center '>
                                    <div style={{ width: 150, height: 150 }}>
                                        {event.status === 1 ?
                                            (
                                                <CircularProgressbarWithChildren value={100} styles={buildStyles({ pathColor: `gold` })}>

                                                    {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong className='text-light'>100% complete</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            ) : event.star_approval === 1 ?
                                                (
                                                    <CircularProgressbarWithChildren value={50} styles={buildStyles({ pathColor: `gold` })}>

                                                        {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                                        <div style={{ fontSize: 12, marginTop: -5 }}>
                                                            <strong className='text-light'>50% complete</strong>
                                                        </div>
                                                    </CircularProgressbarWithChildren>
                                                ) :
                                                (
                                                    <CircularProgressbarWithChildren value={0} styles={buildStyles({ pathColor: `gold` })}>

                                                        {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                                        <div style={{ fontSize: 12, marginTop: -5 }}>
                                                            <strong className='text-light'>0% complete</strong>
                                                        </div>
                                                    </CircularProgressbarWithChildren>
                                                )
                                        }
                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>

                </div>




            </div>
        </>
    );
};

export default PendingPostDetails;
