import React, { useState, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import Live from '../../../assets/images/instagram-live 1.png';
import Pending from '../../../assets/images/pending 2.png';
import Add from '../../../assets/images/UpcomingEvent/add 1.png';
import axios from "axios";

const AdminAuditionNav = () => {

    const [live,setLive] = useState('');
    const [pending,setPending] = useState('');

    useEffect(() => {
        axios.get('/api/audition-admin/audition/status').then((res) => {
          if (res.data.status === 200) {
            setLive(res.data.live);
            setPending(res.data.pending);
            console.log(res.data.pending);
          }
        });
        console.log();
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
                                        <small className="ad-card-small">{pad(live)}</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <NavLink to='/audition-admin/audition/live'>
                            <button className="card-footer Souvenir-button  w-100 "
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"> Live Audition
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
                                        <small className="ad-card-small">{pad(pending)}</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <NavLink to='/audition-admin/audition/pending'>
                            <button className="card-footer Souvenir-button  w-100 "
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"> Pending Audition
                            </button></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAuditionNav;