import React from 'react';
import Ayushman from '../../../../../../assets/images/AyshmanKhurana.webp';
import Salman from '../../../../../../assets/images/SalmanKhan.jpg';
import FanGroup from '../../../../../../assets/images/fanGroup/Maskgroup.png'
import './PendingFanGroup.css';

const PendingGroup = () => {
    return (
        <div className="container">
            <div className="pendingGroupFan">
                <img src={FanGroup} alt="" />
                
            </div>
            <div className="row">
                <div className="col-md-8 text-light">
                    <h2>Shahrukh Fanbase vs Star Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus repellat, accusantium est vitae perspiciatis accusamus vel molestias enim. Natus quibusdam deleniti dignissimos aperiam adipisci unde, reprehenderit eius quisquam exercitationem.</p>
                </div>
                <div className="col-md-4">
                    <div className='d-flex estimateSection justify-content-between m-3 p-4'>
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
            </div>
            <div className="row">
                <div className="col-md-2 mx-2">
                    <div className="bgStar">
                        <img className='img-fluid w-100' src={Ayushman} alt="" />
                        <div className='m-2'>
                            <p> <big className='text-light'>Auyshman Khurana</big></p>
                            <p><small><span className="text-secondary">Status</span>: <i className='text-muted'>Pending</i></small></p>
                            <button className='btn btn-secondary'>Render Group</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mx-2">
                    <div className="bgStar">
                        <img className='img-fluid w-100' src={Salman} alt="" />
                        <div className='m-2'>
                            <p> <big className='text-light'>Auyshman Khurana</big></p>
                            <p><small><span className="text-secondary">Status</span>: <i className='text-muted'>Pending</i></small></p>
                        </div>

                        <button className='btn btn-secondary'>Render Group</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingGroup;