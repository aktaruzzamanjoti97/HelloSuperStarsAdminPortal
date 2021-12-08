import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import group228 from '../../../../../../assets/images/Group 228.png';
import './CongratulationModal.css';

const CongratulationModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ backgroundColor: '#000000', border: '1px solid #DDA336' }}>
                <div className="d-flex justify-content-end">
                    <Button className="continue-button" onClick={props.onHide}>X</Button>
                </div>

                <div className="row">
                    <div className="col-md-7 text-white">
                        <h2>Congratulations</h2>
                        <h1>Dear Superstar</h1>
                        <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate?</p>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={group228} alt="" />
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <Button className="w-25 continue-button"><b className="text-black">Continue</b></Button>
                </div>
            </Modal.Body>

        </Modal>
    );
};

export default CongratulationModal;