import React from "react";
import { Modal,} from "react-bootstrap";
import person from "../../../../../../../src/assets/images/Souvenir/1.png";
import person2 from "../../../../../../../src/assets/images/Souvenir/2.png";
import person3 from "../../../../../../../src/assets/images/Souvenir/3.png";
// import name from "../../../../../../../src/assets/images/Souvenir/name.png";
import './CricketJerseryAdmin.css'
const CricketJerseyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
  
    >
      <Modal.Body className="bg-dark"     style={{ border:"2px solid yellow" }}>
        <h4 className="text-center text-warning my-3">Top Bidders!</h4>
        <div className="container d-flex justify-content-around">
          <div className="bidder-1 w-25 ">
            <img src={person} alt="" className="img-fluid" />
            <div className="text-center my-2">
              <div className="person-name-admin">
               <p className="">Abul</p>
              </div>
              <button type="button" class="btn btn-warning my-3 btn-sm">
                <i class="fa fa-bell mx-1" aria-hidden="true"></i> notify
              </button>
            </div>
          </div>
          <div className="bidder-1 w-25 ">
            <img src={person2} alt="" className="img-fluid" />
            <div className="text-center my-2">
            <div className="person-name-admin">
            <p>Mofiz</p>
              </div>
              <button type="button" class="btn btn-warning my-3 btn-sm">
                <i class="fa fa-bell mx-1" aria-hidden="true"></i> notify
              </button>
            </div>
          </div>
          <div className="bidder-1 w-25 ">
            <img src={person3} alt="" className="img-fluid" />
            <div className="text-center my-2">
            <div className="person-name-admin">
            <p>Kuddus</p>
              </div>
              <button type="button" class="btn btn-warning my-3 btn-sm ">
                <i class="fa fa-bell mx-1" aria-hidden="true"></i> notify
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer className="d-flex justify-content-center align-items-center bg-dark">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CricketJerseyModal;