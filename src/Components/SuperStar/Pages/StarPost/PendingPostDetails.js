import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import clock from '../../../../assets/images/meetupEvent/clock.png'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import axios from "axios";
import "./SuperStarContent.css";
import { Markup } from 'interweave';
import moment from 'moment';
import Nav from './Nav';
import swal from 'sweetalert';



const PendingPostDetails = (props) => {

  const history = useHistory();

  const [event, setEvent] = useState('');

 

  useEffect(() => {
    let isMounted = true;

    const event_id = props.match.params.id;

    axios.get(`/api/star/simple_post/pending/${event_id}`).then(res =>{
    
        if(isMounted)
        {
            if(res.data.status === 200)
            {
                setEvent(res.data.post);
            }
        }
    });

}, [props.match.params.id, history]);

const handleClick = () => {

    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.get(`/api/star/approve_post/${event.id}`).then(res => {
                if(res.data.status === 200)
                {
                  swal("Success",res.data.message,"success");
                  history.push('/superstar/post/approved');
                }
        });
    });

}



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
           <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src={clock} className="img-fluid p-3" alt="" />
             </div>
             <div className="col-md-4 d-flex align-items-center">
         <div>
         <h2 className='text-warning'>Event Details submitted</h2>
            <p className='text-light'>Waiting for &nbsp;
            { event.star_approval === 1 ? (<span className="fw-bold">Manager Admin</span>) : (<span className="fw-bold">SuperStar</span>) }
            &nbsp; Approval
            </p>
         </div>
             </div>

             <div className="col-md-4" style={{ borderLeft: "1px dashed yellow" }}>

                            <h5 className='text-light text-center my-3'>Status</h5>
                            <div className='d-flex justify-content-center align-items-center '>
                                <div style={{ width: 150, height: 150 }}>
                                {event.star_approval === 1 ? 
                                (
                                    <CircularProgressbarWithChildren value={50} styles={buildStyles({pathColor: `gold`})}>

                                        {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                        <div style={{ fontSize: 12, marginTop: -5 }}>
                                            <strong className='text-light'>50% complete</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                ):
                                <CircularProgressbarWithChildren value={0} styles={buildStyles({pathColor: `gold`})}>

                                        {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                        <div style={{ fontSize: 12, marginTop: -5 }}>
                                            <strong className='text-light'>0% complete</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                }
                                </div>

                            </div>


                          
                        </div>

           </div>
     
       </div>

       <div className="mt-3">
                {/* <Link to='/superstar/dashboard'>
                    <button className='btn MEN-X fw-bold'>Approve </button>
                </Link> */}

                {event.status === 0 ? (
                    <>
                    <button className='btn MEN-X fw-bold' onClick={handleClick}>Approve </button>
                    
                    <button className='btn MEN-Y text-warning fw-bold mx-3'>Decline</button>
                
                <Link to={`/superstar/live-chat/edit-session/${event.id}`}>
                  <button className='btn MEN-Y text-warning fw-bold px-3'>Edit</button>
                </Link>
                    </>
                    
                    
                ) : ''}
                

                
                
            </div>
    
        </div>


        

          

       
      </div>
    </>
  );
};

export default PendingPostDetails;
