
import React,{useState} from 'react';
import { Modal, Button ,Form} from 'react-bootstrap';
import './NotifyModal.css'
import Cross from '../../../../../../assets/images/Vector.png'
import { Link } from 'react-router-dom';
import axios from "axios";

export default function NotifyModalAdmin(props) {
    const [notificationText, SetNotificationText] = useState("");

   

    const HandelNotificationSent = () => {
        // console.log(notificationText)
        // console.log(props.users_id)
        
        const Data = new FormData();
        Data.append('users', props.users_id)
        Data.append('msg', notificationText)
            
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post("api/admin/sent_notofiaction_user",Data).then((res) => {
                if (res.data.status === 200) {
                    console.log("done");
                    console.log('array_check',res.rata.array)
                    
                }
            });
            });
        
        props.setModal(false)
    }

    return (
        <>

            <Modal {...props}  aria-labelledby="contained-modal-title-vcenter w-100 " centered>
                
                <Modal.Body className="NotifyBGModal ">
                    
                   <button className="RightSlotBtn closeButton" onClick={props.onHide} ><img src={Cross} alt="" className='NotImgMo' /></button>
                   <br />
                   <div className="ModalHeadNo text-warning mb-2">
                       Confirm payment
                   </div>
                    <div className=" moNotifyAd">
                       
                        <div className="form-group row text-light mb-2 p-3">
                            <textarea name="sms_body" className='sms-body' id="" cols="20" rows="5" onChange={(e)=>SetNotificationText(e.target.value)}>

                            </textarea>
                            {/* <p>Dear Sir,</p>
                            <p>
                                Please confirm your payment for the greetings message before
                                8/10/21 to get your desired message.
                            </p>
                            <p>Thank You</p> */}
                        </div>
                        <div className="NotifyMobtn">
                       
                        <button className='btn btn-warning' onClick={HandelNotificationSent}>Send</button>
                      
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}