import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import avatarImage from '../../../../../../assets/images/profileAvatar/Avater.png';
import './AddSuperStarModal.css';


const AddSuperStarModal = (props) => {

    const [file, setFile] = useState('');

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const handleClick =(e)=>{
        e.preventDefault()
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            // className="modalBg"  
            centered>

            <Modal.Body className="modalBg">
                <div className="d-flex justify-content-end">
                    <Button onClick={props.onHide}>X</Button>
                </div>

                <div>
                    <h1 className="text-center text-white">Star Profile Registration</h1>
                </div>
                <div className="">
                    <form>
                        <div className="row">
                            <div className="form-group mb-3">
                                <div className="row mx-auto mb-3">
                                    <div className="d-flex justify-content-center">
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div>
                                                        <big style={{ color: '#f5e445' }} htmlFor="">Star Name</big>
                                                        <input type="text" className="form-control reply-control input-overlay" />
                                                    </div>
                                                    <div className="my-2">
                                                        <big style={{ color: '#f5e445' }} htmlFor="">Description</big>
                                                        <textarea type="text" className="form-control reply-control input-overlay" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="avatar-img my-3 text-center">
                                                        <img
                                                            src={file === "" ? avatarImage : file}
                                                            className="img-fluid avatar-img-src"
                                                            alt="profile-pic"
                                                        />
                                                    </div>
                                                    <div className="upload-input text-center my-2">
                                                        <div className="parent-div">
                                                            <button className="btn btn-dark btn-upload">
                                                                Upload Profile Picture
                                                            </button>
                                                            <input type="file" className="btn" onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mx-auto my-3">

                                    <div className="d-flex justify-content-center align-items-center">
                                        <div>
                                            <big style={{ color: '#f5e445' }}>Preferable Time</big>
                                            <div className="col-md-6 mt-1">
                                                <div className="d-flex text-white">
                                                    <div className="mx-1">
                                                        <label htmlFor="date">Date</label>
                                                        <input type="date" name="date" className="form-control reply-control input-overlay" />
                                                    </div>
                                                    <div className="mx-1">
                                                        <label htmlFor="from">From</label>
                                                        <input type="time" name="date" className="form-control reply-control input-overlay" />
                                                    </div>
                                                    <div className="mx-1">
                                                        <label htmlFor="to">To</label>
                                                        <input type="time" name="date" className="form-control reply-control input-overlay" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="row mx-auto my-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-8">
                                            <big style={{ color: '#f5e445' }} htmlFor="">Terms and Conditions</big>
                                            <textarea type="text" className="form-control reply-control input-overlay" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row mx-auto my-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-8">
                                            <big style={{ color: '#f5e445' }} htmlFor="">Star Profile File</big>
                                            <input type="file" className="form-control reply-control input-overlay" />
                                        </div>
                                    </div>

                                </div>

                                <div className="row mx-auto my-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-8">
                                            <big style={{ color: '#f5e445' }} htmlFor="">Star Profile File</big>
                                            <input type="file" className="form-control reply-control input-overlay" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button onClick={(e) => handleClick(e)} type="submit" className=" btn btn-warning w-25">Save</button>
                        </div>

                    </form>
                </div>
            </Modal.Body>

            {/* <Modal.Body className="addSuperStar-modal">
                <h1>This is Joti</h1>
                <div className="starRegistration">
                    <div className="d-flex justify-content-end">
                        <Button onClick={props.onHide}>Close</Button>
                    </div>
                    <h1 className="text-center">Star Profile Registration</h1>
                    <div className="starRegistrationBorder">
                        <form>
                            <div className="row">
                                <div className="form-group mb-3">
                                    <div className="row mx-auto mb-3">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <div>
                                                            <big style={{ color: '#f5e445' }} htmlFor="">Star Name</big>
                                                            <input type="text" className="form-control reply-control input-overlay" />
                                                        </div>
                                                        <div className="my-2">
                                                            <big style={{ color: '#f5e445' }} htmlFor="">Description</big>
                                                            <textarea type="text" className="form-control reply-control input-overlay" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="avatar-img my-3 text-center">
                                                            <img
                                                                src={file === "" ? avatarImage : file}
                                                                className="img-fluid avatar-img-src"
                                                                alt="profile-pic"
                                                            />
                                                        </div>
                                                        <div className="upload-input text-center my-2">
                                                            <div className="parent-div">
                                                                <button className="btn btn-dark btn-upload">
                                                                    Upload Profile Picture
                                                                </button>
                                                                <input type="file" className="btn" onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row mx-auto my-3">

                                        <div className="d-flex justify-content-center align-items-center">
                                            <div>
                                                <big style={{ color: '#f5e445' }}>Preferable Time</big>
                                                <div className="col-md-4 mt-1">
                                                    <div className="d-flex">
                                                        <div className="mx-1">
                                                            <label htmlFor="date">Date</label>
                                                            <input type="date" name="date" className="form-control reply-control input-overlay" />
                                                        </div>
                                                        <div className="mx-1">
                                                            <label htmlFor="from">From</label>
                                                            <input type="time" name="date" className="form-control reply-control input-overlay" />
                                                        </div>
                                                        <div className="mx-1">
                                                            <label htmlFor="to">To</label>
                                                            <input type="time" name="date" className="form-control reply-control input-overlay" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row mx-auto my-3">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="col-md-6">
                                                <big style={{ color: '#f5e445' }} htmlFor="">Terms and Conditions</big>
                                                <textarea type="text" className="form-control reply-control input-overlay" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mx-auto my-3">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="col-md-6">
                                                <big style={{ color: '#f5e445' }} htmlFor="">Star Profile File</big>
                                                <input type="file" className="form-control reply-control input-overlay" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mx-auto my-3">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="col-md-6">
                                                <big style={{ color: '#f5e445' }} htmlFor="">Star Profile File</big>
                                                <input type="file" className="form-control reply-control input-overlay" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className=" btn btn-warning w-25">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
            </Modal.Body> */}
        </Modal>
    );
};

export default AddSuperStarModal;