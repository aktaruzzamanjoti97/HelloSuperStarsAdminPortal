import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import azhari from "../../../../../../assets/images/instagram-live 1.png";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from 'moment'

const ScheduleView = () => {
  const location = useLocation();
var txt=false;
  const [date, setDate] = useState(null);
  const [liveChats, setliveChats] = useState([]);
  useEffect(() => {
    
      setDate(location.state.date);
      setliveChats(location.state.liveChats);
      // console.log(liveChats);
      // console.log(date);

  }, [location]);
  // const check = () => {
  //   // setDate(1);
  //   // setliveChats(2);

  //   console.log(liveChats);
  //   console.log(date);
  // }

  console.log(liveChats.length);

  var viewLiveChats = null

  if(liveChats){
    
  }
  viewLiveChats = 
  liveChats.map( (item, index) => {
    return ( 
      <div className="col-md-4 mb-3" >
        <div className="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
          <div className="text-center">
            <img
              src={azhari}
              className="card-img-top img-fluid rounded-circle"
              style={{ height: "100px", width: "100px" }}
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center text-light">
              {item.title}
              <br/><small style={{ color: 'goldenrod',fontSize:'12px'  }}> {moment(item.start_time).format('LT')} - {moment(item.end_time).format('LT ps')}</small>
            </h5>
            <p>{item.banner}</p>
            
          </div>
      
          <div className="text-center">
            <Link to='registeruser'><button className=" btn-primary">View</button></Link>
            {/*<button className=" btn-primary" onClick={check}>View</button>*/}
          </div> 
        </div>
      </div> 
    )
  });

  return (
    <>
      <div className="card ad-card Card-sp-ds-xs">
        <div className="row">
        {viewLiveChats}
        </div>
      </div>
    </>
  );
};


export default ScheduleView
