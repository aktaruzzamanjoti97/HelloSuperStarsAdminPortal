import React, { useState, useEffect, useRef  } from 'react';
import { Link, useHistory} from 'react-router-dom';
import axios from "axios";

import ReactToPrint from 'react-to-print';

import backgroundBanner from '../../../../../../assets/images/backGroundBanner.png'
import helloSuperStarLogo from '../../../../../../assets/images/helloSuperStar.png';
import footerPhoto from '../../../../../../assets/images/24783.jpg';
import qrCode from '../../../../../../assets/images/qrCode.png'
import { Markup } from 'interweave';

const AdminJuryAgreementPaper = () => {




    return (
        <div className="superStarPrint">
        <div className="d-flex">
            <div className="col-md-11 overFlowHidden">
            <div className="my-3 superStarBackground">
            <div className="superStar-container">
                <div className="d-flex justify-content-end">

                    <div>
                        <div className="d-flex justify-content-end">
                            <img className="img-fluid" src={backgroundBanner} width="200" height="250" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="superStarLogo2">
                        <img className="" width="200" height="200" src={helloSuperStarLogo} alt="" />
                    </div>
                </div>
                <div>
                    <div className="my-5 superStarHeadingStyle">
                        <h5 className="my-2 text-center">Dear,</h5>
                        <h1 className="my-2 text-center">Monir Hossain</h1>
                    </div>

                    <h4 className="my-5 text-center">Welcome to Hello Superstar</h4>

                    

                    <div className="my-2 text-center">
                        <Markup content="" />
                    </div>
                </div>

                <div className="my-5 text-center">
                    <img width="140" src={qrCode} alt="" />
                   <h4>DFDFDFDF</h4>
                </div>

                <div>
                    <img className="img-fluid footerImage w-100" src={footerPhoto} alt="" />
                </div>
            </div>
        </div>
            </div>
            <div className="col-md-1">
                <div className="bottom-cross d-flex justify-content-end">
                    <Link to="/superstar-admin/superstars">
                        <button className="btn btn-danger m-3">X</button>
                    </Link>
                </div>

                <div className="me-3">
                    <button className="btn btn-warning mb-4 w-100">
                        <i className="fas fa-print mx-1"></i>
                        Print
                    </button> <br />

                    <button className="btn btn-success w-100 mb-3">
                        <a href="/images/myw3schoolsimage.jpg" download></a>
                        Download
                    </button>
                </div>

              


            </div>
        </div>
    </div>
    );
};

export default AdminJuryAgreementPaper;