import React from "react";

const FormContent = ({BankName}) => {
  return (
    <>
      <div className="col-12 my-4">
        <div class="card money-card-form bg-dark">
          <div class="card-body">
            <h6 className="text-light">Transfer Money</h6>
            <h2 className="my-3 text-light">Requesting Money Transfer</h2>
            <h5 className="text-light">
              Add Your '{BankName}' Account information carefully
            </h5>

            <form>
              <div class="row">
                <div class="col-5 mt-4">
                  <label className="text-warning " htmlFor="accountName">
                    Account No.
                  </label>
                  <input type="text" class="form-control account-info-form" />
                </div>
                <div class="col-5 mt-4">
                  <label className="text-warning" htmlFor="Branch">
                    Branch
                  </label>
                  <input type="text" class="form-control account-info-form" />
                </div>

                <div class="col-5 my-4">
                  <label className="text-warning" htmlFor="accountName">
                    Acc. Name
                  </label>
                  <input type="text" class="form-control account-info-form" />
                </div>
                <div class="col-5 my-4">
                  <label className="text-warning" htmlFor="Branch">
                    Ammount
                  </label>
                  <input type="text" class="form-control account-info-form" />
                </div>
              </div>

              <div className=" my-3">
                <button className="btn btn-warning px-5">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContent;
