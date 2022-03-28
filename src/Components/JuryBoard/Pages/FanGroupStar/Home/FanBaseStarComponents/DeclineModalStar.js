import React from 'react';
import {Modal,Button} from 'react-bootstrap';
// import './DeclineModalStar.css'
const DeclineModalStar = (props) => {
return (
<div>
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

        <Modal.Body className='bg-dark' style={{ border:'2px solid gold',borderRadius:'5px' }}>
            <div className="d-flex justify-content-end" style={{ cursor:'pointer' }} onClick={props.onHide}>
                <i class="fa-solid fa-xmark text-warning"></i>
            </div>
            <div>

                <div class="my-3 decline-form">

                    <textarea class="form-control" placeholder='Type reason for decline' rows="3"
                        style={{ backgroundColor:'#484848',border:'none' }}></textarea>
                </div>

                <div className="decline-btns d-flex justify-content-end">
                    <div>
                        <button className='btn btn-outline-warning px-4' onClick={props.onHide}>Cancel</button>
                        <button className='btn btn-warning mx-2 px-4'>Send</button>
                    </div>
                </div>
            </div>
        </Modal.Body>

    </Modal>
</div>
);
};

export default DeclineModalStar;

{/* <Button onClick={props.onHide}>Close</Button> */}