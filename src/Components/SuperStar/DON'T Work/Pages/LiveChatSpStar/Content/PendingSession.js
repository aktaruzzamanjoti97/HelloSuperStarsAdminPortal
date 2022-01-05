import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";


import azhari from "../../../../../../assets/images/starProfile/profile-azhari.png";
import vedioImage from "../../../../../../assets/images/instagram-live 1.png";
import { useHistory } from 'react-router-dom';
import axios from "axios";
const PendingSessions = () => {
  const [pendingLiveChatNumber, setPendingLiveChatNumber] = useState([]);
  const [pendingLiveChat, setPendingLiveChat] = useState([]);
 
    useEffect(() => {
      getAllPending()
    }, [])
  
  function getAllPending() {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.get(`/api/pendingLiveChat`).then(res => {
                if(res.data.status === 200)
                {
                  setPendingLiveChat(res.data.pendingLiveChats)
                  setPendingLiveChatNumber(res.data.pendingLiveChatNumber)
                  console.log(res.data.pendingLiveChats);
                }
        });
    });
    }

    const GetPendingLiveChatId = (e) => {
      let id =e.target.value
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/approveLiveChat/${id}`).then(res => {
                    if(res.data.status === 200)
                    {
                      getAllPending()
                     
                    }
            });
        });
  }
  
  const deletePendingEvents = (e) => {
    let id = e.target.value
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/approveLiveChat/${id}`).then(res => {
                    if(res.data.status === 200)
                    {
                      getAllPending()
                     
                    }
            });
        });
    
  }
  


    const pendingLiveChats = pendingLiveChat.map((item,i) => {
      return (
        <div className="col-md-4 mb-4" >
        <div className="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
          <div className="text-center">
            <img
              src={vedioImage}
              className="card-img-top img-fluid rounded-circle"
              style={{ height: "100px", width: "100px" }}
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center text-light">
              {item.title}
            </h5>
          </div>
     
          <div className="text-center">
          <button className=" btn-danger" value={item.id}  onClick={deletePendingEvents} >Reject</button>
          <button className=" btn-success mx-2 " value={item.id}  onClick={GetPendingLiveChatId} >Approve</button>
          <Link to={`/superstar/live-chat/pedning-session/view/${item.id}`}><button className=" btn-primary">View</button></Link>
        </div>
        </div>
      </div>
      )
    
    })
  return (
    <>
      <div className="card ad-card Card-sp-ds-xs">
      
          <div className="row">
          {pendingLiveChats}
          
          </div>
        </div>
    </>
  );
};

export default PendingSessions;
