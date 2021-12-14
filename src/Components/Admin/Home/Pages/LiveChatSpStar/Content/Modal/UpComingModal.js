
import React from 'react'
import { Modal} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function UpComingLiveModal(props) {
    let history = useHistory();
    function handleClick(e){
e.preventDefault();
history.push("/superstar-admin/live-chat/view");
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
                <form className="p-3">
                    <div className="form-group row my-3">
                        <label  className="col-sm-1 col-form-label col-form-label-sm text-light">
                            Date
                        </label>
                        <div className="col-sm-3">
                            <input type="date" className="form-control form-control-sm account-input-style" />
                        </div> 

                        {/* <label  className="col-sm-1 col-form-label col-form-label-sm text-light">
                            Time
                        </label>
                        <div className="col-sm-3">
                            <input type="time" className="form-control form-control-sm account-input-style" />
                        </div> */}

                        <div className="col-sm-2 view-li-up">
                            <button onClick={handleClick} className="form-control form-control-sm account-input-style ">View</button>
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