import React, { useState, useEffect } from 'react';
import { Modal} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function UpComingLiveModal(props) {

//     let history = useHistory();
//     function handleClick(e){
// e.preventDefault();
// history.push("/superstar-admin/live-chat/view");
//     }

let history = useHistory();
 
const [modalInput, setModalInput] = useState({
    date: '',
    error_list: []
});

const handleInput = (e) => {
    e.persist();
    setModalInput({...modalInput, [e.target.name]: e.target.value});
    //console.log(modalInput.date);
}


const modalSubmit = (e) => {
    e.preventDefault();

    const data = {
        date: modalInput.date,
    }


    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.get(`/api/admin/livechatListByDate/${modalInput.date}`).then(res => {
                if(res.data.status === 200)
                {

                    console.log(res.data.livechats);
                    history.push({
                        pathname: '/superstar-admin/live-chat/view',
                        state: { 
                            date: modalInput.date,
                            liveChats: res.data.livechats
                        }
                    });
                }
        });
    });
    
}

return (
    <>
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal closeButton>
            <Modal.Title id="contained-modal-title-vcenter">

            </Modal.Title>
        </Modal>
        <Modal.Body className="Modal-js-body">
                    <button className="RightSlotBtn " onClick={props.onHide}>X</button>
            <div className="container">
                <form className="p-3"  onSubmit={modalSubmit}>
                    <div className="form-group row my-3">
                        <label  className="col-sm-1 col-form-label col-form-label-sm text-light">
                            Date
                        </label>
                        <div className="col-sm-3">
                            <input type="date" required className="form-control form-control-sm account-input-style" name="date" onChange={handleInput} value={modalInput.date}/>
                        </div>

                        <div className="col-sm-2 view-li-up">
                              {/* <button className="form-control form-control-sm account-input-style" >View</button>*/}
                            <button className="form-control form-control-sm account-input-style ">View</button>
                        </div>

                    </div>
l
                </form>

            </div>
        </Modal.Body>

        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
</>
)
}