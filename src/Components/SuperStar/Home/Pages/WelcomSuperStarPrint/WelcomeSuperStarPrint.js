import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeSuperStar from '../WelcomeSuperstar/WelcomeSuperstar';
import './WelcomeSuperStarPrint.css'

const WelcomeSuperStarPrint = () => {
    return (
        <div className="superStarPrint">
            <div className="d-flex">
                <div className="col-md-11 overFlowHidden">
                    <WelcomeSuperStar />
                </div>
                <div className="col-md-1">
                    <div className="bottom-cross d-flex justify-content-end">
                        <Link to="/superstar-admin/superstars">
                            <button className="btn btn-danger m-3">X</button>
                        </Link>
                    </div>

                    <div className="me-3">
                        <button className="btn btn-warning mb-4 w-100">
                            <i class="fas fa-print mx-1"></i>
                            Print
                        </button> <br />

                        <button className="btn btn-success w-100 mb-3">
                            <a href="/images/myw3schoolsimage.jpg" download></a>
                        {/* <i class="fas fa-download"></i> */}
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSuperStarPrint;