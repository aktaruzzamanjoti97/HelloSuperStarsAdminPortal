import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import invitationImg from "../../../../../assets/images/iconFan/invitation2.png";
import starImg from "../../../../../assets/images/starImg/shah-rukh-khan-01.webp";
// import "./FanGroupInvitation.css";
import { Markup } from 'interweave';
import moment from 'moment';

const InvitationDetails = () => {
  let { slug } = useParams();

  const [fanDetails, setFanDetails] = useState('');
  const [starDetails, setStarDetails] = useState('');

  console.log("fanDetails ", fanDetails)
  console.log("starDetails ", starDetails)

    useEffect(() => {

        axios.get(`/api/star/fan/group/details/${slug}`).then(res => {
          if (res.data.status === 200) {
            console.log( res.data);

            setFanDetails(res.data.fanDetails);
            setStarDetails(res.data.starId);
    
          }
        });
    
    }, []);

  return (
    <>
    <div className="container">
      <div className="d-flex mb-3">
        <img width="36px" src={invitationImg} alt="" />
        <h3 className="text-light mx-2">Fan Group Invitation</h3>
      </div>

      <div className="invitationBg d-flex justify-content-center align-items-center">
        <div>
          <h1 className="invitationHeader text-center fw-bold">Invitation</h1>

          <div className="">
            <div className="d-flex justify-content-center">
              <img className="img-fluid starImg me-4" src={`http://localhost:8000/${starDetails.image}`} alt="" />
              <div className="vertical-line"></div>
              <div className="ms-4">
                <p className="shahrukhTxt text-light">{starDetails.first_name} {starDetails.last_name}</p>
                <p className="bollywoodTxt text-light">Bollywood</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 g-5">
                <div className="text-light">
                  <h3 className="fw-bold">{ fanDetails.group_name}</h3>
                  <p className="loremDammy">
                  <Markup content= {fanDetails.description}/>
                  </p>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="text-center">
              <p className="loremDammy">
                Starts at <span>{moment(fanDetails.start_date).format('LL')}</span>{" "}
                <span className="vertical-line2 mx-3"></span> Ends at{" "}
                <span>{moment(fanDetails.end_date).format('LL')}</span>
              </p>
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btnDlt text-warning fw-bold">
                Ignore
              </button>
              <button className="btn btnDlt text-warning fw-bold">Edit</button>

              <button className="btn actDlt text-dark fw-bold">Accept</button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default InvitationDetails
