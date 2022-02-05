import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import StarPendingSessions from "./Content/StarPendingSession";
import axios from "axios";
import Slider from "react-slick";
import moment from "moment";
import Nav from "./Nav";
import { Markup } from "interweave";
import clock from "../../../../assets/images/meetupEvent/clock.png";
import flag from '../../../../assets/images/Auditions/flag.png'
import finish from '../../../../assets/images/Auditions/finish.png'
import swal from 'sweetalert';


const StarPendingContentDetails = (props) => {
  const history = useHistory();

  const [event, setEvent] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const event_id = props.match.params.id;

    axios.get(`/api/star/livechat_event_details/${event_id}`).then((res) => {
      if (isMounted) {
        if (res.data.status === 200) {
          setEvent(res.data.event);
        }
      }
    });
  }, [props.match.params.id, history]);



  const handleClick = () => {

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/star/approveLiveChat/${event.id}`).then(res => {
                    if(res.data.status === 200)
                    {
                      swal("Success",res.data.message,"success");
                      history.push('/superstar/live-chat');
                    }
            });
        });
    
  }

  return (
    <>
      <div className="AS">
        <Nav></Nav>

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

            <div className="card event-card2 col-md-6">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img src={clock} className="img-fluid p-3" alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                    <h2 className="text-warning">Event Details submitted</h2>
                    <p className="text-light">
                      Waiting for &nbsp;
                      {event.star_approve_status === 1 ? (
                        <span className="fw-bold">Manager Admin</span>
                      ) : (
                        <span className="fw-bold">SuperStar</span>
                      )}
                      &nbsp; Approval
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-12">
              <div className="card event-card2 shadow">
                <div className="card-body">
                  <h5 className="text-light p-2">
                    {event.title} <sub className="text-warning">(offline)</sub>
                  </h5>
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

          <div className="row">

          <div className=" col-12 BTN-x-P">
                <div className="d-flex  buTon-EMN py-2 p-3">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={flag} alt="" className='PriceTage' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light">Date</span>
                        <br></br>
                        <span className="text-warning BtnTextNMP fw-bold">
                        {moment(event.date).format('LL')} 
                        </span>
                    </div>
                </div>

                <div className="d-flex buTon-EMN py-2 p-3 ">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={finish} alt="" className='PriceTage' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light">Time</span>
                        <br></br>
                        <span className="text-warning BtnTextNMP fw-bold">
                        {moment(event.start_time, "HH:mm:ss").format("hh:mm A")}-{moment(event.end_time, "HH:mm:ss").format("hh:mm A")} 
                        </span>
                    </div>
                </div>

            </div>
            <div className="mt-3">
                {/* <Link to='/superstar/dashboard'>
                    <button className='btn MEN-X fw-bold'>Approve </button>
                </Link> */}


                <button className='btn MEN-X fw-bold' onClick={handleClick}>Approve </button>

                <button className='btn MEN-Y text-warning fw-bold mx-3'>Decline</button>
                
                <Link to={`/superstar/live-chat/edit-session/${event.id}`}>
                  <button className='btn MEN-Y text-warning fw-bold px-3'>Edit</button>
                </Link>
                
            </div>

          </div>


        </div>
      </div>
    </>
  );
};
export default StarPendingContentDetails;
