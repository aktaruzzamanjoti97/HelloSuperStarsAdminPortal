import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import LiveNow from './Content/StarLiveNow'
import Live from '../../../../assets/images/instagram-live 1.png'
import Pending from '../../../../assets/images/pending 2.png'
import Add from '../../../../assets/images/UpcomingEvent/add 1.png'
import axios from "axios";

const LiveChatContent = () => {
    const [loading, setLoading] = useState(true);
    const [pendingLiveChatNumber, setPendingLiveChatNumber] = useState([]);

    useEffect(() => {
    

        axios.get(`/api/livechat`).then(res =>{

          if(res.status === 200)
          {
            setPendingLiveChatNumber(res.data.pendingLiveChatNumber);
          }
          setLoading(false);
        });
    }, []);


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
                                    <img src={Live} className="ad-card-img-top" alt="..." />
                                </td>
                                <td className="ad-card-td">
                                    <small className="ad-card-small">01</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <Link to='/super-star/live-chat/' className="card-footer ad-card-footer"><button className="ad-card-footer" data-bs-toggle="collapse"
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
                                    <img src={Pending} className="ad-card-img-top" alt="..." />
                                </td>
                                <td className="ad-card-td">
                                    <small className="ad-card-small">{pendingLiveChatNumber}</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <Link to='/super-star/live-chat/pending-session' className="ad-card-footer"><button className="card-footer ad-card-footer" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Pending
                    </button></Link>
                </div>
            </div><br/>
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
                    <Link to='/super-star/live-chat/add-session' className="ad-card-footer"><button className="card-footer ad-card-footer" data-bs-toggle="collapse"
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