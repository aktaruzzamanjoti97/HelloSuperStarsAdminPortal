
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './NotifyModal.css'
import Cross from '../../../../../../assets/images/Vector.png'
import { Link } from 'react-router-dom';
export default function NotifyModalAdmin(props) {

    return (
        <>
\
            <Modal {...props}  aria-labelledby="contained-modal-title-vcenter w-100 " centered>
                
                <Modal.Body className="NotifyBGModal ">
                    
                   <button className="RightSlotBtn closeButton" onClick={props.onHide} ><img src={Cross} alt="" className='NotImgMo' /></button>
                   <br />
                   <div className="ModalHeadNo text-warning mb-2">
                       Confirm payment
                   </div>
                    <div className=" moNotifyAd">
                        <div className="form-group row text-light mb-2 p-3">
                            <p>Dear Sir,</p>
                            <p>
                                Please confirm your payment for the greetings message before
                                8/10/21 to get your desired message.
                            </p>
                            <p>Thank You</p>
                        </div>
                        <div className="NotifyMobtn">
                        <Link to="/superstar-admin/notify/record">
                            <button className='btn btn-warning'>Send</button>
                        </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}