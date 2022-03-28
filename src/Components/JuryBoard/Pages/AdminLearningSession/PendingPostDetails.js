import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import clock from '../../../../assets/images/meetupEvent/clock.png'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import axios from "axios";
import "./SuperStarContent.css";
import { Markup } from 'interweave';
import moment from 'moment';
import Nav from './Nav';
import swal from "sweetalert";



const PendingPostDetails = (props) => {

  const history = useHistory();

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

}, [props.match.params.id, history]);


const handleClick = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/star/approve_learning_session/${event.id}`).then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          history.push("/superstar/learning-session/approved");
        }
      });
    });
  };



  return (
    <>
      <div className="AS">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card event-card">
                <img
                  src={`http://localhost:8000/${event.banner}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-12">
              <div className="card event-card2 shadow">
                <div className="card-body">
                  
                  <p className="text-light">
                    <Markup content={event.description} />
                  </p>
                  <p className="text-light fw-bold">
                    {moment(event.date).format("LL")} |{" "}
                    {moment(event.start_time, "HH:mm:ss").format("hh:mm A")}-
                    {moment(event.end_time, "HH:mm:ss").format("hh:mm A")}
                  </p>
                </div>
              </div>
            </div>
          </div>

       

          <div className="mt-3">
            {/* <Link to='/superstar/dashboard'>
                    <button className='btn MEN-X fw-bold'>Approve </button>
                </Link> */}

            {event.star_approval === 0 ? (
              <>
                <button className="btn MEN-X fw-bold" onClick={handleClick}>
                  Approve{" "}
                </button>

                <button className="btn MEN-Y text-warning fw-bold mx-3">
                  Decline
                </button>

                <Link to={`/superstar/live-chat/edit-session/${event.id}`}>
                  <button className="btn MEN-Y text-warning fw-bold px-3">
                    Edit
                  </button>
                </Link>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingPostDetails;
