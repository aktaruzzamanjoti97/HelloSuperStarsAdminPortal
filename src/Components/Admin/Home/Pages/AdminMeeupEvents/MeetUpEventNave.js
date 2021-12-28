import React from 'react';
import { Link } from 'react-router-dom'
import Live from '../../../../../assets/images/instagram-live 1.png'
import Pending from '../../../../../assets/images/pending 2.png'
import Add from '../../../../../assets/images/UpcomingEvent/add 1.png'

const MeetUpEventNave = () => {

return (
<>
    <div className="mb-3 row">

        <div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
            <div className="card ad-card SH-CARD-TSX">
                <div className="card-body  align-items-center">
                    <center>
                        <tr>
                            <td className="ad-card-td">
                                <img src={Live} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                                <small className="ad-card-small">01</small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar-admin/meetup-events' className="card-footer ad-card-footer"><button
                    className="ad-card-footer" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne"> Live Meet Up
                </button></Link>
            </div>
        </div><br />

        <div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
            <div className="card ad-card SH-CARD-TSX">
                <div className="card-body  align-items-center">
                    <center>
                        <tr>
                            <td className="ad-card-td">
                                <img src={Pending} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                                <small className="ad-card-small">00</small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar-admin/pending-meetup' className="ad-card-footer"><button
                    className="card-footer ad-card-footer" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne"> Pending Meet Up
                </button></Link>
            </div>
        </div>
        <div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
            <div className="card ad-card SH-CARD-TSX">
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
                <Link to='/superstar-admin/add-meetup' className="ad-card-footer"><button
                    className="card-footer ad-card-footer" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne"> Add Meet Up
                </button></Link>
            </div>
        </div>
    </div>
</>
)
}

export default MeetUpEventNave