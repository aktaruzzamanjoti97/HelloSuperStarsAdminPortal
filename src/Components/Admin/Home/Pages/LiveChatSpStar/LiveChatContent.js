import React from 'react'
import { Link } from 'react-router-dom'
import LiveNow from './Content/LiveNow'
import Star from '../../../../../assets/images/star.png'

const LiveChatContent = () => {
return (
<>
    <div className="AS">
        <div className="mb-3 row">

            <div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
                <div className="card ad-card SH-CARD-TSX">
                    <div className="card-body  align-items-center">
                        <center>
                            <tr>
                                <td className="ad-card-td">
                                    <img src={Star} className="ad-card-img-top" alt="..." />
                                </td>
                                <td className="ad-card-td">
                                    <small className="ad-card-small">01</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <Link to='/superstar-admin/live-chat/' className="card-footer ad-card-footer"><button className="ad-card-footer" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Live Now
                    </button></Link>
                </div>
            </div><br/>
            <div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
                <div className="card ad-card SH-CARD-TSX">
                    <div className="card-body  align-items-center">
                        <center>
                            <tr>
                                <td className="ad-card-td">
                                    <img src={Star} className="ad-card-img-top" alt="..." />
                                </td>
                                <td className="ad-card-td">
                                    <small className="ad-card-small">01</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <Link to='/superstar-admin/live-chat/add-session' className="ad-card-footer"><button className="card-footer ad-card-footer" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Add Session
                    </button></Link>
                </div>
            </div>
        </div>
        <LiveNow />
    </div>
</>
)
}

export default LiveChatContent