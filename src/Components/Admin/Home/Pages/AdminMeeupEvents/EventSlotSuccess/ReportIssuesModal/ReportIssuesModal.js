import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReportIssuesModal.css';

const ReportIssuesModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="meetUpSuccessModal"
                dialogClassName="meetUpModalSuccess"
            >

                <Modal.Body>
                    <div className="d-flex justify-content-end">
                        <Button className="btnBackgroundRemove" onClick={props.onHide}> <i className="text-warning fas fa-times-circle"></i></Button>

                    </div>
                    <div className="m-3">
                        <h4 className="successfulText">Report</h4>
                        <div class="select">
                            <select>
                                <option value="1">Superstar Schedule crashed</option>
                                <option value="2">No JS</option>
                                <option value="3">Nice!</option>
                            </select>
                        </div>

                        <textarea placeholder="" className="descriptionBox mt-3" name="" id="" cols="30" rows="4"></textarea>

                        <div className="d-flex justify-content-between mt-3">
                            <div className="d-flex">
                                <label class="container-checkbox">One
                                    <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                </label>
                                <p className="text-white">Notify users</p>
                            </div>
                            <button className="btn btnSuccessful fw-bolder w-25">
                                Send
                            </button>
                        </div>
                    </div>

                    {/* <div className="text-center">
                        <h4 className="text-white fw-bold">Event Status</h4>
                        <img className="img-fluid" src={rightSign} alt="" />
                        <h1 className="successfulText fw-bolder">Successful</h1>
                        <p className="successfulText">Did the program ended up successfully</p>
                        <button className="btn btnSuccessful fw-bold mb-3">Successful</button>
                    </div> */}


                </Modal.Body>
            </Modal>
        </>
    );
};

export default ReportIssuesModal;