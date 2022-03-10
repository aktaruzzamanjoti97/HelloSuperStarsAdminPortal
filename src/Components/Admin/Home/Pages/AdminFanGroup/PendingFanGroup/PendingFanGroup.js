import React from 'react';
import Ayushman from '../../../../../../assets/images/AyshmanKhurana.webp';
import Salman from '../../../../../../assets/images/SalmanKhan.jpg';
import './PendingFanGroup.css';

const PendingGroup = () => {
    return (
        <div className="container">
            <div>

            </div>
            <div className="row">
                <div className="col-md-8 text-light">
                    <h2>Shahrukh Fanbase vs Star Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus repellat, accusantium est vitae perspiciatis accusamus vel molestias enim. Natus quibusdam deleniti dignissimos aperiam adipisci unde, reprehenderit eius quisquam exercitationem.</p>
                </div>
                <div className="col-md-3 estimateSection d-flex justify-content-between">
                    <div>
                        <p className="text-muted">Estimate Start</p>
                        <big className="text-warning fw-bold">10-12-2022</big>
                    </div>
                    <div>
                        <p className="text-muted">Estimate End</p>
                        <big className="text-warning fw-bold">12-12-2022</big>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 mx-2 bgStar">

                    <img className='img-fluid w-100' src={Ayushman} alt="" />
                    <big>Auyshman Khurana</big>
                    <small>Status: <i>Pending</i></small>
                    <button className='btn btn-secondary'>Render Group</button>

                </div>

                <div className="col-md-2 mx-2 bgStar">

                    <img className='img-fluid w-100' src={Salman} alt="" />
                    <big>Salman Khan</big>
                    <small>Status: <i>Pending</i></small>
                    <button className='btn btn-secondary'>Render Group</button>

                </div>
            </div>
        </div>
    );
};

export default PendingGroup;