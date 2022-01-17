import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import LiveNow from "./Content/LiveNow";
import Live from "../../../../../assets/images/instagram-live 1.png";
import clock from '../../../../../assets/images/meetupEvent/clock.png'
import Approved from "../../../../../assets/images/approved.png";
import Pending from "../../../../../assets/images/pending 2.png";
import Add from "../../../../../assets/images/UpcomingEvent/add 1.png";
import axios from "axios";
import "./SuperStarContent.css";
import { Markup } from 'interweave';
import moment from 'moment';
import Nav from './Nav';

const LiveChatPendingDetails = (props) => {

  const history = useHistory();

  const [event, setEvent] = useState('');

 

  useEffect(() => {
    let isMounted = true;

    const event_id = props.match.params.id;

    axios.get(`/api/admin/livechat_event_details/${event_id}`).then(res =>{
    
        if(isMounted)
        {
            if(res.data.status === 200)
            {
                setEvent(res.data.event);
            }
        }
    });

}, [props.match.params.id, history]);



  return (
    <>
      <div className="AS">

      
        <Nav></Nav>

        

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card event-card">
                     <img src={`http://localhost:8000/${event.banner}`} alt="" className="img-fluid" />
                     
                    </div>
                </div>
            </div>





            <div className="row my-4">
                <div className="col-md-12">
                    <div className="card event-card2 shadow">
                     <div className="card-body">
                     <h5 className="text-light p-2">{event.title}    <sub className='text-warning'>(offline)</sub></h5>
                <p className='text-light'>
                    <Markup content={event.description}/>
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
           <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={clock} className="img-fluid p-3" alt="" />
             </div>
             <div className="col-md-6 d-flex align-items-center">
         <div>
         <h2 className='text-warning'>Event Details submitted</h2>
            <p className='text-light'>Waiting for &nbsp;
            { event.star_approve_status === 1 ? (<span className="fw-bold">Manager Admin</span>) : (<span className="fw-bold">SuperStar</span>) }
            &nbsp; Approval
            </p>
         </div>/login
             </div>
           </div>
     
       </div>
    
        </div>

          

       
      </div>
    </>
  );
};

export default LiveChatPendingDetails;
