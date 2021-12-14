import React from "react";
import MasterPassword from "./MasterPassword/MasterPassword";

const FormContent = ({ BankName }) => {

  const [modalShow, setModalShow] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalShow(true);
  }

  return (
    <>
      <div className="col-12 my-4">
        <div className="card money-card-form bg-dark">
          <div className="card-body">
            <h6 className="text-light">Transfer Money</h6>
            <h2 className="my-3 text-light">Requesting Money Transfer</h2>
            <h5 className="text-light">
              Add Your '{BankName}' Account information carefully
            </h5>

            <form>
              <div className="row">
                <div className="col-5 mt-4">
                  <label className="text-warning " >
                    Account No.
                  </label>
                  <input type="text" className="form-control account-info-form" />
                </div>
                <div className="col-5 mt-4">
                  <label className="text-warning" >
                    Branch
                  </label>
                  <input type="text" className="form-control account-info-form" />
                </div>

                <div className="col-5 my-4">
                  <label className="text-warning" >
                    Acc. Name
                  </label>
                  <input type="text" className="form-control account-info-form" />
                </div>
                <div className="col-5 my-4">
                  <label className="text-warning" >
                    Ammount
                  </label>
                  <input type="text" className="form-control account-info-form" />
                </div>
              </div>

              <div className=" my-3">
                <button onClick={(e) => handleClick(e)} className="btn btn-warning px-5">Next</button>
              </div>

              <div>
                <MasterPassword show={modalShow}
                  onHide={() => setModalShow(false)} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContent;
