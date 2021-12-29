import React, {useState} from "react";
import { Link } from "react-router-dom";
import PersonImg from "../../../../assets/images/VidoUpload/unsplash_ChylazdaLkU.png";
// import Video from "../../../../assets/images/VidoUpload/ymneq71z 1.png";
import { ReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
import "./VidoUpload.css";





const VidoUpload = () => {

  const [stopShowData, setStopShowData] = useState(false);
  const webcamRef = React.useRef(null);

  return (
    <div>
      <div className="container-fluid mt-5 mb-3">
        <div className="row">
          <div className="col-md-7">
            <div className="card video-style">
              <div className="text-center vido_img">
              
              
              <ReactMediaRecorder
                  video
                  render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                      {/* <p>{status}</p> */}
                      {stopShowData ? null : <Webcam style={{width: "100%", height: "80%"}} audio={true} ref={webcamRef} />}

                      {/* thakbe na button click a */}
                      {stopShowData ? (
                        <video style={{width: "100%", height: "80%"}} src={mediaBlobUrl} autoPlay controls loop />
                      ) : null}

                      {/* thakbe  */}
                      <div className="p-1 m-1">
                        <button
                          className="btn btn-success p-1 m-1 starRecord"
                          onClick={startRecording}
                        >
                          <i class="fas fa-record-vinyl mx-1"></i> Record
                        </button>
                        <button
                          className="btn btn-info p-1 m-1 starRecord"
                          onClick={() => {
                            setStopShowData(true);
                            stopRecording();
                          }}
                        >
                          {" "}
                          🛑 Stop
                        </button>
                      </div>
                    </div>
                  )}
                />

              </div>
            </div>
          </div>

          <div className="col-md-5 ">
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
        <Link to="/superstar/greetings/video-upload">        <button className="mx-2 px-3 btn btn-dark">Next</button></Link>

      </div>
    </div>
  );
};

export default VidoUpload;
