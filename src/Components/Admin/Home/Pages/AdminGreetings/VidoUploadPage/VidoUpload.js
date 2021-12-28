import React from "react";
import "./VidoUpload.css";
import Video from "../../../../../../assets/images/VidoUpload/ymneq71z 1.png";
import PersonImg from "../../../../../../assets/images/VidoUpload/unsplash_ChylazdaLkU.png";
const VidoUpload = () => {
  return (
    <div>
      <div className="container-fluid mt-5 mb-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card video-style">
              <div className="text-center vido_img">
                <img src={Video} alt="" className="img-fluid w-100" />
                <div className="centerVideo">
                  <button className="btn btn-warning">
                    <i className="fas fa-redo-alt video-icons"></i>
                  </button>
                  <button className="btn btn-warning mx-4">
                    <i className="fas fa-pause-circle video-icons"></i>
                  </button>

                  <button className="btn btn-warning">
                    <i className="fas fa-exchange-alt video-icons"></i>
                  </button>
                </div>
                <div class="bottomleft-video ">
                  <p className="bg-dark text-light px-3 py-1">
                    <span>
                      <i class="fas fa-record-vinyl text-danger mx-2"></i>
                    </span>
                    1:50
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card right-video-card">
              <div className="card-body">
                <div className="container my-3">
                  <img src={PersonImg} alt="" className="img-fluid my-2" />
                  <h5 className="text-light my-2">Shorouvi Akter</h5>
                  <h6 className="text-warning mb-3">Marriage Annerversery</h6>
                  <p className="text-light">Age: 25</p>
                  <p className="text-light mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, culpa vel? Dolor atque recusandae quaerat tempore,
                    totam nam magnam ex commodi dicta vero porro laudantium
                    laborum nisi ab aut voluptatem! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Voluptatum, tempora
                    dignissimos ab sint beatae in ipsum deleniti natus totam
                    libero harum architecto voluptatibus esse asperiores
                    molestias expedita omnis, quod necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <button className="mx-2 px-3 btn btn-warning">Upload</button>
        <button className="mx-2 px-3 btn btn-dark">Next</button>
      </div>
    </div>
  );
};

export default VidoUpload;
