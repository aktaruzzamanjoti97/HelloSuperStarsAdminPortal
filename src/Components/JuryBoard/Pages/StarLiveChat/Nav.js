import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Approve from '../../../../assets/images/approved.png'
import Pending from '../../../../assets/images/pending 2.png'
import Add from '../../../../assets/images/UpcomingEvent/add 1.png'
import axios from "axios";

export default function Nav() {

    const [approved,setApproved]=useState('');
  const [pending,setPeding]=useState('');

  //Fetch Approved LiveChat
  useEffect(() => {
    axios.get(`/api/star/live_chat/count`).then((res) => {
      if (res.status === 200) {
        setApproved(res.data.approved);
        setPeding(res.data.pending);

        console.log(res.data.pending)
      }
    });

    console.log();
  }, []);


    return (
        <>

<div className="mb-3 row">

<div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
    <div className="card livechat-card SH-CARD-TSX">
        <div className="card-body  align-items-center">
            <center>
                <tr>
                    <td className="livechat-card-td">
                        <img src={Approve} className="livechat-card-img-top" alt="..." />
                    </td>
                    <td className="livechat-card-td">
                        <small className="livechat-card-small">{approved}</small>
                    </td>
                </tr>
            </center>
        </div>
        <Link to='/superstar/live-chat/' className="card-footer livechat-card-footer"><button className="livechat-card-footer" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Approved
        </button></Link>
    </div>
</div><br/>
<div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
    <div className="card livechat-card SH-CARD-TSX">
        <div className="card-body  align-items-center">
            <center>
                <tr>
                    <td className="livechat-card-td">
                        <img src={Pending} className="livechat-card-img-top" alt="..." />
                    </td>
                    <td className="livechat-card-td">
                        <small className="livechat-card-small">{pending}</small>
                    </td>
                </tr>
            </center>
        </div>
        <Link to='/superstar/live-chat/pending-session' className="livechat-card-footer"><button className="card-footer livechat-card-footer" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Pending
        </button></Link>
    </div>
</div><br/>
<div title="Live Now" className="col-md-3 align-items-center justify-content-center ">
    <div className="card livechat-card SH-CARD-TSX">
        <div className="card-body  align-items-center">
            <center>
                <tr>
                    <td className="livechat-card-td">
                        <img src={Add} className="livechat-card-img-top" alt="..." />
                    </td>
                    <td className="livechat-card-td">
                        <small className="livechat-card-small"></small>
                    </td>
                </tr>
            </center>
        </div>
        <Link to='/superstar/live-chat/add-session' className="livechat-card-footer"><button className="card-footer livechat-card-footer" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Add Session
        </button></Link>
    </div>
</div>
</div>
            
        </>
    )
}


