import React from "react";
import CertificateAudition from "./CertificateAudition";
import RequestImg from "../../../../../../../../assets/images/unsplash_IeTLKtzbLNo.png";
const CreateCertificate = () => {
return (
<>
    <CertificateAudition />

    <div className="row mx-1">
        <h4 className="tITLES py-2 mb-3">Certificate Content</h4>
        <div className="card ReImg " style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg)",
          }}></div>
    </div>

    <div className="row mx-1 mt-3">
        <h5 className="card top3 py-2">
            Top 3 Selected Participant
        </h5>
    </div>

    <div className="row mx-1">
        <div className="card WinnerCard bg-dark pt-2">
            <h5>Winner</h5>
        </div>
        <div className="bg-dark">
            <form>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Audition Title</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">The Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Position</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Certificate Content</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />

                    </div>
                </div>

            </form>
        </div>

        <div className="card WinnerCard bg-dark pt-2">
            <h5>1st Runnerup</h5>
        </div>
        <div className="bg-dark">
            <form>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Audition Title</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">The Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Position</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Certificate Content</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />

                    </div>
                </div>

            </form>
        </div>
        <div className="card WinnerCard bg-dark pt-2">
            <h5>2nd Runnerup</h5>
        </div>
        <div className="bg-dark">
            <form>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Audition Title</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">The Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Position</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />
                    </div>
                </div>
                <div className="form-group row justify-content-center my-3">
                    <label for="Audition" className="col-sm-3 col-form-label textYt">Certificate Content</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control InBG" id="Audition" />

                    </div>
                </div>
                <div className="form-group row justify-content-center my-3 mt-5 mb-5">
                    <label for="Audition" className="col-sm-3 col-form-label textYt"></label>
                    <div className=" col-sm-8 justify-content-end">
                        <div className="text-end">
                        <button className="btn btnSd px-5 fw-bold">Done</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>

</>
);
};

export default CreateCertificate;