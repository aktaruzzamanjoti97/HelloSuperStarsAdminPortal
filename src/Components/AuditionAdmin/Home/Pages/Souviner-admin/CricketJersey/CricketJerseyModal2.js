import React from "react";
import { Modal } from "react-bootstrap";
// import person from "../../../../../../../src/assets/images/Souvenir/1.png";
// import person2 from "../../../../../../../src/assets/images/Souvenir/2.png";
// import person3 from "../../../../../../../src/assets/images/Souvenir/3.png";
import message from "../../../../../../../src/assets/images/Souvenir/email 1.png";
import './CricketJerseryAdmin.css'
const CricketJerseyModal2 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
  
    >
      <Modal.Body className="bg-dark"     style={{ border:"2px solid yellow" }}>
       <div className="container">
         <div className="text-center p-3">
           <img src={message} alt="" className="img-fluid" />
           <h3 className="text-light">Confirm placement</h3>
           <p className="text-light"><span className="text-warning fw-bold">Abul</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatibus temporibus dolorum non. Veniam <span className="text-warning fw-bold">$150</span> enim inventore recusandae nihil dignissimos suscipit maiores? Sit est fugiat obcaecati porro accusamus deleniti perferendis id? <span className="text-warning fw-bold">success</span> </p>

           <button className="btn btn-outline-warning" onClick={props.onHide}>Go back</button>
           <button className="btn btn-warning mx-3" >Auction done!</button>
         </div>
       </div>
      </Modal.Body>
      {/* <Modal.Footer className="d-flex justify-content-center align-items-center bg-dark">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CricketJerseyModal2;
