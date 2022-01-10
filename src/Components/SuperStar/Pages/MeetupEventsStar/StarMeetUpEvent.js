import React, { useState, useEffect } from 'react';
import Banner from '../../../../assets/images/meetupEvent/BannerMeet.png'
import calendar from '../../../../assets/images/meetupEvent/calendar.png'
import Clock from '../../../../assets/images/meetupEvent/clock-icon.png'
import { Link, useHistory} from 'react-router-dom';
import './StarMeetUpE.css'
import axios from "axios";
import { Markup } from 'interweave';
import moment from 'moment';
import swal from 'sweetalert';


const StarMeetUpEvent = (props) => {

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
    

    const approveHadler = (e) => {
        
        axios.get(`/api/star/meetup_event/set_approve/${event.id}`).then(res => {
          if(res.data.status === 200)
          {
            swal("Success",res.data.message,"success");
            history.push('/superstar/meetup-events/approved');
          }
          else
          {
            swal("Warning",res.data.message,"Warning");
          }
        });
      }


return (
<>
    <div className="card m-3">
        <img src={Banner} alt="" className='Banner-SME' />
    </div>

    <div className='m-3 mt-4 mb-5 Mde-Nt'>
        <h4 className='text-light fw-bold  mb-4 '>
            {event.title} <small className='text-warning Small-EV '>({event.meetup_type})</small>
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
    <div className="m-3">
        {/* <Link to='/superstar/dashboard'>
        <button className='btn MEN-X fw-bold'>Approve </button>
        </Link> */}
        { event.star_approval === 1 ? (<button className='btn MEN-X fw-bold'>Approved </button>) : (<button className='btn MEN-X fw-bold' onClick={approveHadler}>Approve </button>) }
        
        <button className='btn MEN-Y text-warning fw-bold mx-3'>Decline</button>

    </div>

</>
)
}

export default StarMeetUpEvent