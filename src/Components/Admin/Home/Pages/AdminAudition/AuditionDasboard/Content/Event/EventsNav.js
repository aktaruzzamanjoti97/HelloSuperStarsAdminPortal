import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Live from '../../../../../../../../assets/images/instagram-live 1.png';
import Pending from '../../../../../../../../assets/images/pending 2.png';
import RequestPng from '../../../../../../../../assets/images/Request.png';
import './Events.css'

const EventsNav = () => {
    const [color, setColor] = React.useState("green");

    function changeColor() {
      console.log("click");
      setColor("red");
    }
return (
<>



    <div className=" row ">
        

        <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
            <div className="card meetupCard">
                <div className="card-body  align-items-center">
                    <center>
                        <tr>
                            <td className="ad-card-td">
                                <img src={Live} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                                <small className="ad-card-small "><b><h3>01</h3></b></small>
                            </td>
                        </tr>
                    </center>
                </div>
                <NavLink to='/audition-admin/audition/event' exact style={isActive => ({
    backgroundColor: isActive ? "gold" : ""
  })}>
                <button activeClassName='active' className="card-footer Souvenir-button AudioSA w-100 " data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Live Audition
                </button>
                </NavLink>
            </div>
        </div><br />

        

        <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
            <div className="card meetupCard">
                <div className="card-body  align-items-center">
                    <center>
                        <tr>
                            <td className="ad-card-td">
                                <img src={Pending} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                                <small className="ad-card-small"><b><h3>01</h3></b></small>
                            </td>
                        </tr>
                    </center>
                </div>
                
                <NavLink to='/audition-admin/audition/event/pending' style={isActive => ({
    backgroundColor: isActive ? "gold" : ""
  })}>
                <button className="card-footer Souvenir-button AudioSAA  w-100 " data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Pending Event
                </button>
                </NavLink>
            </div>
        </div> <br/>

        <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
            <div className="card meetupCard">
                <div className="card-body  align-items-center">
                    <center>
                        <tr>
                            <td className="ad-card-td">
                                <img src={RequestPng} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                                <small className="ad-card-small"><b><h3>01</h3></b></small>
                            </td>
                        </tr>
                    </center>
                </div>
                
                <NavLink to='/audition-admin/audition/event/request-approve' style={isActive => ({
    backgroundColor: isActive ? "gold" : ""
  })}>
                <button className="card-footer Souvenir-button AudioSA  w-100 " data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Request For Approval
                </button>
                </NavLink>
            </div>
        </div><br />

    </div>
</>
)
}

export default EventsNav