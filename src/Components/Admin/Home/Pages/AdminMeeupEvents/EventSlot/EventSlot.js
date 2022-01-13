import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import "./EventSlot.css";
import vector from "../../../../../../assets/images/meetupEvent/Vector.png";
import hotel from "../../../../../../assets/images/meetupEvent/unsplash_MXbM1NrRqtI.png";
import clock from "../../../../../../assets/images/meetupEvent/clock-icon.png";
import first from "../../../../../../assets/images/meetupEvent/1.png";
import second from "../../../../../../assets/images/meetupEvent/2.png";
import third from "../../../../../../assets/images/meetupEvent/3.png";
import axios from "axios";
import { Markup } from 'interweave';
import moment from 'moment'

const EventSlot = (props) => {

  const history = useHistory();

  const [event, setEvent] = useState('');
  const [slot, setSlot] = useState([]);
  const [count, setCount] = useState('');
  const [emptySlot, setEmptySlot] = useState('');

  useEffect(() => {
    let isMounted = true;

    const event_id = props.match.params.id;

    axios.get(`/api/admin/meetup_event_details/${event_id}`).then(res =>{
    
        if(isMounted)
        {
            if(res.data.status === 200)
            {
                setEvent(res.data.meetup);
            }
        }
    });

    axios.get(`/api/admin/meetup_event_slots/${event_id}`).then(res =>{

          if(res.data.status === 200)
          {
              setSlot(res.data.meetup);
              setCount(res.data.count);
              setEmptySlot(res.data.empty_slot);
          }

          

    });

    

}, [props.match.params.id, event.id, history]);


  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card event-card">
            <img src={`http://localhost:8000/${event.banner}`} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-8 mb-2">
          <div className="card event-card2 shadow">
            <div className="card-body">
              <h5 className="text-light p-2">
                {event.title}
                <sub className="text-warning">(offline)</sub>
              </h5>
              <p className="text-light">
                <Markup content={event.description} />
              </p>
              <p className="text-light fw-bold">
                    {moment(event.date).format('LL')} | {moment(event.start_time, "HH:mm:ss").format("hh:mm A")}-{moment(event.end_time, "HH:mm:ss").format("hh:mm A")} 
                </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card event-card2 shadow">
            <div className="p-3">
              <p className="text-light">
                <img src={clock} alt="Pineapple" />
                Remaining time
                <h6 className="mx-3 text-warning py-4">02 Day 20 hour 20min</h6>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-12">
          <div className="card bg-dark solt-card">
            <div className="card-body">
              <h3 className="text-warning">
                <img src={vector} alt="clock" className="mx-2"></img>
                Slots <sub>({count}/{event.total_seat})</sub>
              </h3>
              <div className="row my-3">

              {slot.map((user, index) => (
                <div className="col-md-2 col-sm-3 ">
                  <p className="sold-small-card fw-bold">
                    <img src={`http://localhost:8000/${user.user?.image}`}  className="img-fluid mx-2 p-1" alt="" style={{ height: '70px' }}/>
                    {user.user?.first_name} {user.user?.last_name}
                  </p>
                </div>
              ))}


                

              {console.log(emptySlot)}

              {[...Array(emptySlot)].map((user, index) => (
                <div className="col-md-2 col-sm-3 ">
                  <div className="card py-3 mb-2 uncomplete ">
                    <div className="card-body"></div>
                  </div>
                </div>
                ))}


                


                
              </div>
            </div>
          </div>
        </div>

        <div className="btns my-3">
          <Link to='/superstar-admin/eventsuccess'>
          <button className="btn uncomplete text-black fw-bold py-2">Meetup Successful</button>
          </Link>
          
          <button  className="btn uncomplete text-black mx-4 fw-bold py-2">Report Issue</button>
        </div>
      </div>
    </div>
  );
};

export default EventSlot;
