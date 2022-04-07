import React, { useEffect, useState } from 'react'
// import FanGroupNav from './FanGroupNav'
import { Link, useParams } from "react-router-dom";
import LivePng from "../../../../../assets/images/iconFan/Group850.png";
import './FanLive.css'
import backImg from '../../../../../assets/images/Fanbase-img/Fanbasebanner.jpg'
import axios from 'axios';

const FanGroupLive = () => {
  let {slug} = useParams();

  const [fanDetails, setFanDetails] = useState('');
  
  useEffect(() => {

    axios.get(`/api/star/fan/group/details/${slug}`).then(res => {
      if (res.data.status === 200) {
        console.log('partha ', res.data);

        setFanDetails(res.data.fanDetails);

      }
    });

  }, []);


  return (
    <>
      <div className="ms-4">
      {/* <FanGroupNav/> */}

      <div className="mt-2 mb-3">
        <div className="d-flex mt-4">
          <img
            width="38px"
            className="img-fluid text-white"
            src={LivePng}
            alt=""
          />
          <h3 className="text-light mx-2">Live Fan Group</h3>
        </div>

        <div className="row my-3">
          <div className="col-md-9">
            
            <div className=" TextPo">
               <img src={`http://localhost:8000/${fanDetails.banner}`} alt=""  className='bgBlurDivLive'/>

              <Link to={`/superstar/fan-group/home/${slug}`}>
                <button className="btn btn-warning enterBtn fw-bold py-2 px-4 m-5 bottom-rightIMJ ">
                  Enter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default FanGroupLive
