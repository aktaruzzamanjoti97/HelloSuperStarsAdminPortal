import React, { useState } from 'react';
import './HelloSuperStarShakib.css'
import helloShakibPagePhoto from '../../../../../assets/images/Group 227.png';
import CongratulationModal from './CongratulationModal/CongratulationModal';

const HelloSuperStarShakib = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="helloShakib">

            <div className="d-flex justify-content-center align-items-center">
                <div className="helloShakib-border">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <div className="mb-4">
                                        <h2 style={{ color: '#e7a725', fontWeight: 'bold' }}>Hello</h2>
                                        <h1 className="superStarName">Shakib Al Hasan</h1>
                                    </div>
                                    <div className="d-flex">
                                        <div style={{ color: '#FFCB5E' }} className="list-unstyled mx-2">
                                            <li><p>Data 1</p></li>
                                            <li><p>Data 2</p></li>
                                            <li><p>Data 3</p></li>
                                            <li><p>Data 4</p></li>
                                        </div>

                                        <div className="vl mx-2">

                                        </div>

                                        <div style={{ color: '#FFCB5E' }} className="list-unstyled mx-3">
                                            <li><p>Previously entered data</p></li>
                                            <li><p>Previously entered data</p></li>
                                            <li><p>Previously entered data</p></li>
                                            <li><p>Previously entered data</p></li>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="secondCol">
                                    <img className="img-fluid" src={helloShakibPagePhoto} alt="" />
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <button type="button" className="btn btn-secondary w-25 me-3">Edit</button>

                                    <button onClick={() => setModalShow(true)} type="button" className="btn btn-warning w-25 ms-3">Next</button>

                                    <CongratulationModal show={modalShow}
                                        onHide={() => setModalShow(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HelloSuperStarShakib;