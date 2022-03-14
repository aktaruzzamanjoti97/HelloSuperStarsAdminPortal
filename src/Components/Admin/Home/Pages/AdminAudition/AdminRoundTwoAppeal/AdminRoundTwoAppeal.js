import React from "react";
import imageBgAppeal from "../../../../../../assets/images/amrBg.png";
import Appeal1 from "../../../../../../assets/images/Downloads/banner1.png";
import RoundOneAppealModal from "../RoundOneAppeal/RoundOneAppealModal";
import "./AdminRoundTwoAppeal.css";

const AdminRoundTwoAppeal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="imageBgAppeal">
        <img className="img-fluid w-100" src={imageBgAppeal} alt="" />
      </div>
      <div className="row bg-dark">
        <div className="col-md-6 py-5 d-flex justify-content-center align-items-center">
          <img className="img-fluid" src={Appeal1} alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-end">
          <div className="d-flex flex-column">
            <button className="btn roundTwoWhite mb-5 p-3">
              <span className="text-black fw-bold">Go to Round 2</span>
            </button>
            <button onClick={() => setModalShow(true)} className="btn nameBg mb-5 roundTwo p-3">
              <span className="text-black fw-bold">Round 1 Appeal</span>
            </button>
          </div>
        </div>
      </div>

      <RoundOneAppealModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default AdminRoundTwoAppeal;
