import React from 'react';
import { Link } from 'react-router-dom';
import Total from '../../../../../assets/images/Souvenir/sigma.png';
import Sold from '../../../../../assets/images/Souvenir/sold.png';
import Unsold from '../../../../../assets/images/Souvenir/packages.png';
import Add from '../../../../../assets/images/Souvenir/add .png';
import pending from '../../../../../assets/images/pending 2.png';

const SuperstarSouvenirNav = () => {
    return (
        <div className="mb-3 row">

        <div title="Live Now" className="col-md-2 align-items-center justify-content-center Souvenir-bt ">
            <div className="card meetupCard">
                <div className="card-body  align-items-center">
                    <center>
                        <tr>
                            <td className="ad-card-td">
                                {/* <img src={Total} className="ad-card-img-top" alt="..." /> */}
                                <img src={pending} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                    
                                <small className=" fw-bold Sigma">00</small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar-admin/souvenir' className=""><button className="card-footer Souvenir-button  w-100 "
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
                                <img src={Sold} className="ad-card-img-top" alt="..." />
                            </td>
                            <td className="ad-card-td">
                        
                                <small className=" fw-bold Sold thirty">30</small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar-admin/souvenir' className=""><button className="card-footer Souvenir-button  w-100 "
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne"> Sold products
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
                                <small className=" fw-bold Unsold">03</small>
                            </td>
                        </tr>
                    </center>
                </div>
                <Link to='/superstar-admin/souvenir' className=""><button className="card-footer Souvenir-button  w-100 "
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne"> Unsold products
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
                <Link to='/superstar/souvenir/add-products' className=""><button className="card-footer Souvenir-button  w-100 "
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne"> Add products
                </button></Link>
            </div>
        </div>
    </div>
    );
};

export default SuperstarSouvenirNav;