import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Banner from '../../../../assets/images/meetupEvent/unsplash_smgTvepind4.png'
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


const StarApprovedContentDetails = (props) => {
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

        <div className="container-fluid">
          

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
                <Link to={`/superstar/live-chat/schedule-list/${event.id}`}>
                    <button className='btn MEN-X fw-bold'>Join Now</button>
                </Link>
            </div>

          </div>


        </div>
      </div>
    </>
  );
};
export default StarApprovedContentDetails;
