import React, { useState, useEffect, useRef  } from 'react';
import "./RegisterUser.css";
import fatema from "../../../../../../assets/images/AdminLiveProfile/cx.webp";
import enjoy from '../../../../../../assets/images/AdminLiveProfile/abc.jpg';
import axios from "axios";
import { useHistory} from 'react-router-dom';
import moment from 'moment'

import swal from 'sweetalert';

import RegisterLeftCard from "./component/RegisterLeftCard";

const RegisterUser = (props) => {
  const [showItem, setShowItem] = useState(false);
  const [registeredLiveChat, setRegisteredLiveChat] = useState([]);

  const history = useHistory();
  let img_src = '';

  function handleClick() {
    setShowItem(true);
  }

  useEffect(() => {
    let isMounted = true;

    const live_chat_id = props.match.params.live_chat_id;

    axios.get(`/api/admin/registeredUserList/${live_chat_id}`).then(res =>{

        if(isMounted)
        {
            if(res.data.status === 200)
            {
              setRegisteredLiveChat(res.data.registeredLiveChats);
              // console.log(res.data.registeredLiveChats);
            }
        }           
    });

}, [props.match.params.star_id, history]);


var viewRegisteredUserList = null

viewRegisteredUserList = 
registeredLiveChat.map( (item, index) => {
    // if(item.user.image) {
    //   img_src = "http://localhost:8000/"+item.user.image
    // }else{
      img_src = fatema
    // }
  return ( 
  
    <tr>
      <th scope="row">
        <img src={img_src} alt="imgBaseURL" className="rounded-circle register-user-img" />
        <span> {item.user.first_name} {item.user.last_name}</span>
      </th>
      <th>{moment(item.live_chat_start_time).format('h:mm A')}</th>
      <th>{Math.abs(new Date(item.live_chat_end_time)  - new Date(item.live_chat_start_time)) / 60000} Minute(s)</th>
      <th>
        <button className="btn call-btn" onClick={handleClick}>
          <span>
            <i className="fas fa-video"></i>
          </span>
          Call
        </button>
      </th>
    </tr>
  )
});

  return (
    <div className="row ">
      <div className="col-md-8 ">
        <div className="table-info ">
          <h5 className="text-warning text-center">Registered Users</h5>
          <table className="table text-light">
            <tbody>
              
              {viewRegisteredUserList}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-md-4 ">
        {showItem ? (
        // video work start here
        <div className="card right-live-card-bg my-2 w-75 mx-auto bg-dark">
          <div className="content">
            <img src={enjoy} alt="" className='img-fluid icons-videos' />
            <button className='btn'> <i className="fas fa-clock"></i>4:40</button>
          </div>
        <div className="card-body">
        <div className="container text-center bg-dark p-2 icons-videos">
          <button className='btn btn-warning text-light btn-rounded'><i className="fas fa-microphone fa-2x"></i></button>
          <button className='mx-2 btn btn-warning text-light p-2 btn-rounded'><i className="fas fa-video fa-2x"></i></button>
          <button className='btn btn-warning text-light btn-rounded'><i className="fas fa-times fa-2x"></i></button>
        </div>
        </div>
        </div>
        ) : (
          <RegisterLeftCard data={props.match.params.live_chat_id} />
        )}
      </div>
    </div>
  );
};

export default RegisterUser;
