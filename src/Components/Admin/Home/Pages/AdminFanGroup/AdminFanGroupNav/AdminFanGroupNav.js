import React from 'react';
import { Link } from 'react-router-dom';
import pendingMarket from '../../../../../../assets/images/pending 2.png';
import Add from '../../../../../../assets/images/Souvenir/add .png';
import Unsold from '../../../../../../assets/images/Souvenir/packages.png';

const AdminFanGroupNav = () => {
    return (
        <div className="mb-3 row">

            <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
                <div className="card meetupCard p-3">
                    <div className="card-body d-flex justify-content-center  align-items-center">

                        <tr className="d-flex">
                            <td className="ad-card-td d-flex justify-content-center align-items-center">
                                <img src={pendingMarket} width="75px" className="ad-card-img-top blur" alt="..." />
                            </td>
                            <td className="ad-card-td d-flex flex-column">
                                <small className='text-light'>Pending</small>
                                <small className=" fw-bold Sigma">01</small>
                            </td>
                        </tr>

                    </div>
                    <Link to='/superstar-admin/pending-fan-group'>
                        <button className="btn btn-warning w-100">Check Status</button>
                    </Link>

                    {/* <Link to={{ pathname: "/superstar-admin/souvenir/product-list/pending" }} className=""><button className="card-footer Souvenir-button  w-100 "
                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne"> Pending Souvenir
                    </button></Link> */}
                </div>
            </div>



            <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
                <div className="card meetupCard p-3">
                    <div className="card-body d-flex justify-content-center  align-items-center">
                        <center>
                            <tr className='d-flex'>
                                <td className="ad-card-td d-flex justify-content-center align-items-center">
                                    <img src={Unsold} className="ad-card-img-top" alt="..." />
                                </td>
                                <td className="ad-card-td d-flex flex-column">
                                    <small className="text-light">invitation</small>
                                    <small className=" fw-bold Unsold">04</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <button className="btn btn-warning">Check Status</button>
                    {/* <Link to={{ pathname: "/superstar-admin/souvenir/product-list/approved" }} className="">
                        <button className="card-footer Souvenir-button  w-100 "
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"> Approved Products List
                        </button></Link> */}
                </div>
            </div>

            <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
                <div className="card meetupCard p-3">
                    <div className="card-body d-flex justify-content-center  align-items-center">
                        <center>
                            <tr className="d-flex">
                                <td className="ad-card-td  d-flex justify-content-center align-items-center">
                                    <img src={Add} className="ad-card-img-top" alt="..." />
                                </td>
                                <td className="ad-card-td d-flex flex-column">
                                    <small className="text-light">Create</small>
                                    <small className=" fw-bold Unsold">New</small>
                                </td>
                            </tr>
                        </center>
                    </div>
                    <Link to='/superstar-admin/create-fan-group'> <button className="btn btn-warning w-100">Create New</button></Link>

                    {/* <Link to='/superstar-admin/souvenir/add-products-marketPlace' className=""><button className="card-footer Souvenir-button  w-100 "
                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne"> Add products
                    </button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default AdminFanGroupNav;