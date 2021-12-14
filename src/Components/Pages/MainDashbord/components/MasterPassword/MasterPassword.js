import React from 'react';
import { Modal } from 'react-bootstrap';
import './MasterPassword.css';

const MasterPasswordModal = (props) => {
    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
            </Modal>
            <Modal.Body className="masterPasswordModal">
                <button className="RightSlotBtn " onClick={props.onHide}>X</button>
                <div className="container">
                  
                    <form className="p-3">
                        
                        <div className="form-group row my-3">
                            <h5  className="col-sm-3 col-form-label col-form-label-sm text-light">
                                Enter Master Password
                            </h5>
                            <div className="col-sm-4">
                                <input type="password" className="form-control form-control-sm account-input-style reply-control" />
                            </div>


                        </div>


                        <div className="d-flex">
                            <div className="col-sm-3 me-5">
                                <button type="password" className="form-control form-control-sm account-input-style btn btn-warning">Submit</button>
                            </div>


                            <div className="col-sm-3">
                                <button type="submit" className="form-control form-control-sm account-input-style btn btn-secondary">Reset</button>
                            </div>
                        </div>

                    </form>
               

                    {/* <div className="row">
                        <div className="mt-4">
                            <h3 className="text-warning">Enter Master Password</h3>
                            <input type="password" className="form-control col-md-3"/>
                        </div>
                        
                    </div> */}
                </div>
            </Modal.Body>

            {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        </Modal>

    );
};

export default MasterPasswordModal;