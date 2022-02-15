import React from 'react';
import { Link } from 'react-router-dom';
import Live from '../../../../assets/images/instagram-live 1.png';
import Pending from '../../../../assets/images/pending 2.png';
import Add from '../../../../assets/images/UpcomingEvent/add 1.png';
// import './MeetUpEventNave.css';

const LearnSessionNaveStar = () => {

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
                                <small className="ad-card-small">00</small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar/learning-session'><button className="card-footer Souvenir-button  w-100 "
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne"> Approved Learning Session
                </button></Link>
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
                                <small className="ad-card-small">01</small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar/learning-session/request'>
                    <button className="card-footer Souvenir-button  w-100 "
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne"> Requested Learning Session
                </button></Link>
            </div>
        </div>
        <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
            <div className="card meetupCard">
                <div className="card-body  align-items-center">
                    <center>
                        <tr>
                            <td className="ad-card-td">
                                <img src={Add} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                                <small className="ad-card-small"></small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar/learning-session/schedule'> <button className="card-footer Souvenir-button  w-100 "
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne"> Add Schedule
                </button></Link>
            </div>
        </div>
    </div>
</>
)
}

export default LearnSessionNaveStar
