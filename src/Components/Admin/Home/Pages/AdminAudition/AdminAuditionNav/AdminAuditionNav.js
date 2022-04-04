import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import Live from '../../../../../../assets/images/instagram-live 1.png';
import Pending from '../../../../../../assets/images/pending 2.png';
import Add from '../../../../../../assets/images/UpcomingEvent/add 1.png';
import axios from "axios";

const AdminAuditionNav = () => {

    const [pedingAudition,setPendingAudition] = useState([]);
    const [liveAudition,setLiveAudition] = useState([]);

    useEffect(() => {
        axios.get("/api/admin/audition/pendings").then((res) => { 
          if (res.data.status === 200) {

              console.log('pending audtition',res.data.pending_auditions)
            setPendingAudition(res.data.pending_auditions);

          }
        });
        axios.get("/api/admin/audition/live").then((res) => { 
            if (res.data.status === 200) {
console.log('live audtition',res.data.liveAuditions)
                setLiveAudition(res.data.liveAuditions);
  
            }
          });
    
      }, []);

      function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
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
                                        <small className="ad-card-small">{pad(liveAudition.length)}</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <Link to='/superstar-admin/audition/live'>
                            <button className="card-footer Souvenir-button  w-100 "
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"> Live Audition
                            </button>
                        </Link>
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
                                        <small className="ad-card-small">{pad(pedingAudition.length)}</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <Link to='/superstar-admin/audition/pending'>
                            <button className="card-footer Souvenir-button  w-100 "
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"> Pending Audition
                            </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAuditionNav;