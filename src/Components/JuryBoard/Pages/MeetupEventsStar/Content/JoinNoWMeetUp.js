import React, { useState, useEffect } from 'react';
import Banner from '../../../../../assets/images/meetupEvent/unsplash_smgTvepind4.png'
import './JoinNowMeetUp.css'
import calendar from '../../../../../assets/images/meetupEvent/calendar.png'
import Clock from '../../../../../assets/images/meetupEvent/clock-icon.png'
import { Link, useHistory} from 'react-router-dom';
import axios from "axios";
import { Markup } from 'interweave';
import moment from 'moment';


const JoinNoWMeetUp = (props) => {

    const history = useHistory();

    const [event, setEvent] = useState('');

    useEffect(() => {
        let isMounted = true;

        const event_id = props.match.params.id;

        axios.get(`/api/star/meetup_event_details/${event_id}`).then(res =>{
        
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setEvent(res.data.meetup);
                }
            }
        });

    }, [props.match.params.id, history]);


return (
<>
    <div className="card m-3">
        <img src={Banner} alt="" className='Banner-SME-b' />
        <div class="centered ">
            <div className="MENbtn d-flex ">
                <div className="btn-l-1"><button className='btn btn-light mx-2 MENbtn-text fw-bold'>2</button> <br />
                    <span className='mx-2 text-light'>hours</span></div>
                <div className="btn-l-1"><button className='None-Btn'>-</button></div>
                <div className="btn-l-1"><button className='btn btn-light mx-2 MENbtn-text fw-bold'>30</button> <br />
                    <span className='mx-2 text-light'>minutes</span></div>
            </div>
        </div>
    </div>

    <div className='m-3 mt-4 mb-5'>
        <h4 className='text-light fw-bold  mb-4 '>
            {event.title}
        </h4>
        <p className='text-light '>
            <Markup content={event.description}/>
        </p>
    </div>

    <div className="m-3 col-12 BTN-x-P ">
        <div className="d-flex p-2 buTon-EMN">
            <div className=" mx-3 mt-2">
                <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
            </div>
            <div className=" mx-1">
                <span className="text-light">Date</span>
                <br></br>
                <span className="text-warning BtnTextNMP fw-bold">{moment(event.date).format('LL')}</span>
            </div>
        </div>

        <div className="d-flex p-2 buTon-EMN ">
            <div className=" mx-3 mt-2">
                <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
            </div>
            <div className=" mx-1">
                <span className="text-light">Time</span>
                <br></br>
                <span className="text-warning BtnTextNMP fw-bold">{moment(event.start_time, "HH:mm:ss").format("hh:mm A")} - {moment(event.end_time, "HH:mm:ss").format("hh:mm A")}</span>
            </div>
        </div>
    </div>

    {event.meetup_type === 'Online' ? (
        <div className="m-3">
        <Link to={`/superstar/star-video-chat/${event.id}`}>
        <button className='btn text-warning  MEN-Join fw-bold'>Join Now</button>
        </Link>
    </div>
    ) : ''}


    

</>
)
}

export default JoinNoWMeetUp