import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './AddSuperStar.css';
import { Link } from 'react-router-dom';
import AddUser from '../../../../../assets/images/AddUser/AddUser.png'
import './AddSuperStar.css'
// import { dummyData } from '../../../../../dummyData/dummyData';
// import SuperstarList from './SupestarList/SuperstarList';
import purnima from '../../../../../assets/images/SuperStar/purnima.jpg'
import ferdous from '../../../../../assets/images/SuperStar/ferdous.jpg'
import mukesh from '../../../../../assets/images/SuperStar/mukesh-ambani.jpg'
import AddSuperStarModal from './AddSuperStarModal/AddSuperStarModal';


const AddSuperStar = () => {

    const [file, setFile] = useState('');

    const [modalShow, setModalShow] = useState(false);

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    };



    return (
        <>
            <div>
                <Card className="border border-warning" style={{ width: '12rem', background: '#343434' }}>
                    <Card.Body>
                        <div className="avatar-img my-3 text-center">
                            <img
                                src={file === "" ? AddUser : file}
                                className="img-fluid avatar-img-src"
                                alt="profile-pic"
                            />
                        </div>
                        <div className="text-center my-2">
                            <div className="parent-div">
                                <button onClick={() => setModalShow(true)} className="btn btn-warning btn-upload">
                                    Add New
                                </button>
                                {/* <input type="file" className="btn" onChange={handleChange} /> */}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <AddSuperStarModal show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div>

            <div style={{ background: '#343434' }} className="border border-warning mt-4">
                {/* <div className="row">
                   {
                       dummyData.map(star => <SuperstarList star={star}/>)d
                   }
               </div> */}
                <div className="d-flex p-4">
                    <Card className="border border-warning mx-3" style={{ width: '12rem', background: '#000000' }}>
                        <Card.Body>
                            <div className="avatar-img my-3 text-center">
                                <img
                                    src={purnima}
                                    className="img-fluid avatar-img-src"
                                    alt="profile-pic"
                                />
                            </div>
                            <div className="text-center my-2">
                                <h5 className="text-white">Purnima</h5>
                                <p className="text-white">Actress</p>
                                <div className="parent-div">
                                    <Link to='/superstar-admin/superstars/details'><button className="btn btn-warning btn-upload">
                                        <i class="fas fa-calendar-day mx-2"></i>
                                        Details
                                    </button></Link>
                                   
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="border border-warning mx-3" style={{ width: '12rem', background: '#000000' }}>
                        <Card.Body>
                            <div className="avatar-img my-3 text-center">
                                <img
                                    src={purnima}
                                    className="img-fluid avatar-img-src"
                                    alt="profile-pic"
                                />
                            </div>
                            <div className="text-center my-2">
                                <h5 className="text-white">Purnima</h5>
                                <p className="text-white">Actress</p>
                                <div className="parent-div">
                                    <Link to='/superstar-admin/superstars/details'><button className="btn btn-warning btn-upload">
                                        <i class="fas fa-calendar-day mx-2"></i>
                                        Details
                                    </button></Link>
                                    
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="border border-warning mx-3" style={{ width: '12rem', background: '#000000' }}>
                        <Card.Body>
                            <div className="avatar-img my-3 text-center">
                                <img
                                    src={mukesh}
                                    className="img-fluid avatar-img-src"
                                    alt="profile-pic"
                                />
                            </div>
                            <div className="text-center my-2">
                                <h5 className="text-white">Mukesh Ambani</h5>
                                <p className="text-white">Bussinessman</p>
                                <div className="parent-div">
                                    <Link to='/superstar-admin/superstars/details'><button className="btn btn-warning btn-upload">
                                        <i class="fas fa-calendar-day mx-2"></i>
                                        Details
                                    </button></Link>
                                   
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default AddSuperStar;