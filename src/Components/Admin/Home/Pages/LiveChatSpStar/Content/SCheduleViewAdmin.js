import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import azhari from "../../../../../../assets/images/instagram-live 1.png";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import moment from 'moment'


const SCheduleViewAdmin = () => {
    const location = useLocation();
    let history = useHistory();
 
    var txt=false;
    const [date, setDate] = useState(null);
    const [liveChats, setliveChats] = useState([]);
   
    useEffect(() => {
        setDate(location.state.date);
        setliveChats(location.state.liveChats);

    }, [location]);

    

  var viewLiveChats = null

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
              <br/><small style={{ color: 'goldenrod',fontSize:'12px'  }}> {moment(item.start_time).format('LT')} - {moment(item.end_time).format('LT')}</small>
            </h5>
            <p>{item.banner}</p>
            
          </div>
      
          <div className="text-center">
            <Link to={`/superstar-admin/live-chat/registeruser/${item.id}`} ><button className=" btn-primary">View</button></Link>
          </div> 
        </div>
      </div> 


    )
  });

  return (
    <>
      {
        liveChats.length < 1 ? 
        (
          <div className="">
            <div className="greetingsHeight d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <div className="box-open">
                        <i style={{ color: '#ffc107' }} class="fas fa-box-open"></i>
                    </div>

                    <div className="text-white">
                        <h3>No Live Chat Registration in this Date</h3>
                        <p><big>Create Default Greeting Profile Now</big></p>
                        <p className="text-muted"><small>A default greetings profile will enable the users <br /> to
                            understand and apply  for greeting videos</small></p>
                    </div>

                    <Link to="/superstar-admin/live-chat/add-session"><button className="btn btn-warning mt-2 w-50">Create New</button></Link>

                </div>
            </div>
          </div>
        ) 
        : 
        (
          <div className="card ad-card Card-sp-ds-xs">
            <div className="row">
              {viewLiveChats}
            </div>
          </div>
        )
      }


      
    </>
  );
};

export default SCheduleViewAdmin
