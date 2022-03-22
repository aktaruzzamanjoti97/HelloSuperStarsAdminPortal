import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import person from "../../../../../../../src/assets/images/Souvenir/1.png";
import person2 from "../../../../../../../src/assets/images/Souvenir/2.png";
import person3 from "../../../../../../../src/assets/images/Souvenir/3.png";
// import name from "../../../../../../../src/assets/images/Souvenir/name.png";
import './CricketJerseryAdmin.css';

const CricketJerseyModal = (props) => {
  let history = useHistory();

  


  const [topper,setTopper] = useState([]);

  useEffect(() => {

    //console.log('data show on modal', props.data)
    setTopper(props.data)


  },[props.data]);


  function handleClick() {
    history.push('/superstar-admin/souvenir/live-biddings-checkout/')
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Body className="bg-dark" style={{ border: "2px solid yellow" }}>
        <h4 className="text-center text-warning my-3">Top Bidders! </h4>
        <div className="container d-flex justify-content-around">
          {topper.map((bidder)=>(
            
          <div className="bidder-1 w-25 ">
            <img src={`http://localhost:8000/${bidder.user[0].image}`} alt="" className="img-fluid rounded-circle" style={{height:'200px', width:'200px'}}/>
            <div className="text-center my-2">
              <div className="person-name-admin">
                <p className="">{bidder.user[0].first_name} {bidder.user[0].last_name}</p>
              </div>
              <Link to={`/superstar-admin/souvenir/live-biddings-checkout/${bidder.auction_id}`}>
              <button  type="button" class="btn btn-warning my-3 btn-sm">
                <i class="fa fa-bell mx-1" aria-hidden="true"></i> notify
              </button>
              </Link>
            </div>
          </div>
          ))}
        </div>
      </Modal.Body>
      {/* <Modal.Footer className="d-flex justify-content-center align-items-center bg-dark">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CricketJerseyModal;
