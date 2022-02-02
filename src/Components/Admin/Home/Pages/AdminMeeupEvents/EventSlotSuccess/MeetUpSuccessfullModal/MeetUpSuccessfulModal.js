import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import rightSign from '../../../../../../../assets/images/rightSign1.png';
import './MeetUpSuccessfulModal.css';

const MeetUpSuccessfulModal = (props) => {
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
                    <div className="text-center">
                        <h4 className="text-white fw-bold">Event Status</h4>
                        <img className="img-fluid" src={rightSign} alt="" />
                        <h1 className="successfulText fw-bolder">Successful</h1>
                        <p className="successfulText">Did the program ended up successfully</p>
                        <button className="btn btnSuccessful fw-bold mb-3">Successful</button>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    );
};

export default MeetUpSuccessfulModal;