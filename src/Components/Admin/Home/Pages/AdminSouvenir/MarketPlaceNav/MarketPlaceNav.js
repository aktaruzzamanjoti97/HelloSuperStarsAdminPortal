import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Add from '../../../../../../assets/images/Souvenir/add .png';
import Unsold from '../../../../../../assets/images/Souvenir/packages.png';
import pendingMarket from '../../../../../../assets/images/pending 2.png';
import axios from 'axios';

const MarketPlaceNav = () => {

    
    const [approvedCount, setApprovedCount] = useState('');
    const [pendingCount, setPendingCount] = useState('');
    
    useEffect(() => {


          axios.get(`/api/admin/marketplace/product-list/approved`).then(res => {

            if(res.data.status === 200)
            {
                setApprovedCount(res.data.approvedCount);
            }
          });


          axios.get(`/api/admin/marketplace/product-list/pending`).then(res => {
            if(res.data.status === 200)
            {
              setPendingCount(res.data.pendingCount);
            }
          });
    
    }, []);


    return (
        <>
            <div className="mb-3 row">

                <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
                    <div className="card meetupCard">
                        <div className="card-body  align-items-center">
                            <center>
                                <tr>
                                    <td className="ad-card-td">
                                        <img src={pendingMarket} width="75px" className="ad-card-img-top" alt="..." />
                                    </td>
                                    <td className="ad-card-td">
                                        <small className=" fw-bold Sigma">{pendingCount}</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <Link to={{pathname: "/superstar-admin/souvenir/product-list/pending" }} className=""><button className="card-footer Souvenir-button  w-100 "
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"> Pending Souvenir
                        </button></Link>
                    </div>
                </div>

               

                <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
                    <div className="card meetupCard">
                        <div className="card-body  align-items-center">
                            <center>
                                <tr>
                                    <td className="ad-card-td">
                                        <img src={Unsold} className="ad-card-img-top" alt="..." />
                                    </td>
                                    <td className="ad-card-td">
                                        <small className=" fw-bold Unsold">{approvedCount}</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <Link  to= {{pathname: "/superstar-admin/souvenir/product-list/approved" }} className="">
                            <button className="card-footer Souvenir-button  w-100 "
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"> Approved Products List
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
                                        <small className=" fw-bold"></small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <Link to='/superstar-admin/souvenir/add-products-marketPlace' className=""><button className="card-footer Souvenir-button  w-100 "
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"> Add products
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarketPlaceNav; 