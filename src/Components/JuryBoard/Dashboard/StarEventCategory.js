import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useHistory, useParams } from 'react-router-dom';
import { fakeScheduleData } from './fakeScheduleData';

const StarEventCategory = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [showSemicolon, setShowSemicolon] = useState(false);

    useEffect(() => {
        setInterval(() => {
            const now = moment();
            const then = moment('2023-02-20 12:12:12', 'YYYY-MM-DD hh:mm:ss');
            const countdown = moment(then - now);
            setDays(countdown.format('D'));
            setHours(countdown.format('HH'));
            setMinutes(countdown.format('mm'));
            setSeconds(countdown.format('ss'));
        }, 1000);
    }, []);



    return (
        <>
            <div>

                <div className="row">
                    {
                        fakeScheduleData.map(singleData => (
                            <div className="col-md-4 my-3 col-12">
                                <Card className="cardBorderListSchedule">
                                    <Link to='/superstar/event-category/join' className='Link'>
                                    <div>
                                        <div className="img-fluid" style={{ backgroundImage: `url(${singleData.banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'blur(2px)', backgroundPosition: 'center', height: '250px' }}>
                                        </div>

                                        <div className="bg-up-text">
                                            <h3  className="text-center">{singleData.pOfL}</h3>
                                        </div>
                                    </div>
                                    <Card.Body className='listScheduleBorder'>

                                        <div className="row">
                                            <div className="col-md-6 justify-content-center">
                                                <div className="purposeOfLiveTime d-flex justify-content-center">

                                                    <div className="timer-container">
                                                        <div className="d-flex">
                                                            <small className="timer mx-1">
                                                                {days}
                                                                <span>d</span>
                                                            </small>
                                                            {/* <small className="semicolon">:</small> */}
                                                            <small className="timer mx-1">
                                                                {hours}
                                                                <span>h</span>
                                                            </small>
                                                            {/* <small className="semicolon">:</small> */}
                                                            <small className="timer">
                                                                {minutes}
                                                                <span>m</span>
                                                            </small>
                                                            {/* <small className="semicolon">:</small>  */}
                                                            <small className="timer mx-1">
                                                                {seconds}
                                                                <span>s</span>
                                                            </small>

                                                        </div>




                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex justify-content-center">
                                                <div className="d-flex totalPeople">
                                                    <h6 className="mx-2">{singleData.total}</h6>
                                                    <i class="fas fa-user-friends"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    </Link>
                                </Card>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
};


export default StarEventCategory;
