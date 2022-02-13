import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import LiveNow from "./Content/LiveNow";
import axios from "axios";
import "./SuperStarContent.css";
import { Markup } from 'interweave';
import moment from 'moment';
import Nav from './Nav';
import AddSession from './Content/AddSession';

const LiveChatApprovedDetails = (props) => {

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

        

        <LiveNow></LiveNow>

          

       
      </div>
    </>
  );
};

export default LiveChatApprovedDetails;
