import React from "react";
import { Link } from "react-router-dom";
import invitationImg from "../../../../../assets/images/iconFan/invitation2.png";
import starImg from "../../../../../assets/images/starImg/shah-rukh-khan-01.webp";
// import "./FanGroupInvitation.css";

const InvitationDetails = () => {
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
              <img className="img-fluid starImg me-4" src={starImg} alt="" />
              <div className="vertical-line"></div>
              <div className="ms-4">
                <p className="shahrukhTxt text-light">Shahrukh Khan</p>
                <p className="bollywoodTxt text-light">Bollywood</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 g-5">
                <div className="text-light">
                  <h3 className="fw-bold">Shahrukh fanbase VS Star Name</h3>
                  <p className="loremDammy">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur sunt dolore nemo tenetur, cumque sequi itaque
                    voluptatibus? Eveniet, molestias corrupti maiores, dolorum
                    culpa, similique a ea quo eos error ipsum?
                  </p>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="text-center">
              <p className="loremDammy">
                Starts at <span>12 Feb 2022</span>{" "}
                <span className="vertical-line2 mx-3"></span> Ends at{" "}
                <span>12 April 2022</span>
              </p>
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btnDlt text-warning fw-bold">
                Ignore
              </button>
              <Link to='/superstar/fan-group-invitation/edit'><button className="btn btnDlt text-warning fw-bold">Edit</button></Link>

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
