import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PersonImg from "../../../../assets/images/VidoUpload/unsplash_ChylazdaLkU.png";
// import Video from "../../../../assets/images/VidoUpload/ymneq71z 1.png";
import { ReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
import "./VidoUpload.css";
import { useEffect } from "react";
import { Markup } from "interweave";
import moment from 'moment';
import loaderImg from './loder.gif';






const VidoUpload = (props) => {

  const [stopShowData, setStopShowData] = useState(false);
  const webcamRef = React.useRef(null);
  const [greetingList, setGreetingList] = useState([]);
  const [greetingDetail, setGreetingDetail] = useState([]);
  const [count, setCount] = useState(0);
  const [end, setEnd] = useState(true);
  const [loader, setLoader] = useState(false);
  let base_url = "http://localhost:8000/"



  useEffect(() => {
    const userIndex = props.match.params.index;

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get('/api/star/greetings').then((res) => {
      if (res.status === 200) {
          setGreetingDetail(res.data.greeting);
          axios.get("/api/star/greetings_reg_payment_list/"+res.data.greeting.id).then((res) => {
              if (res.status === 200) {
                  setGreetingList(res.data.list);
                setLoader(true)
                setCount(parseInt(userIndex))
              }
              });
          }
          });
        });

      }, [props.match.params.index])
    /**
     * next user
     */
  let handelNextUser = () => {
      
      const arryLength = greetingList.length;
      
      if (count < arryLength-1) {
        
        setCount(count+1)
      }

      if (count == arryLength - 2) {
        setEnd(false)
      }
      
    console.log(count)
    }

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
                      {stopShowData ? null : <Webcam style={{width: "100%", height: "100%"}} audio={true} ref={webcamRef} />}

                      {/* thakbe na button click a */}
                      {stopShowData ? (
                        <video style={{width: "100%", height: "100%"}} src={mediaBlobUrl} autoPlay controls loop />
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
                {loader ? greetingList.map((data,index) =>
                  
                  <>
               
                    {index == count?(
                  <div className="container my-3">
                  <img src={base_url+data.user.image} alt="pro image" className="pro-image img-fluid my-2" />
                        <h5 className="text-light my-2">{data.user.first_name} {data.user.last_name}</h5>
                  {/* <h6 className="text-warning mb-3">Marriage Annerversery</h6> */}
                        <p className="text-light">Age: {Math.floor(moment(new Date()).diff(moment(moment(data.birth_date).format('L'),"MM/DD/YYYY"),'years',true))}</p>
                  <p className="text-light mt-4">
                    <Markup content={data.greeting_contex} />
                  </p>
                    </div>
                    ):(<></>)}
                </>
             
       
                  
                ) : <>
                <img src={loaderImg} alt="" width="100%"/>
                </>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
       
        <Link to="/superstar/greetings/video-upload"> <button className="mx-2 px-3 btn btn-warning">Upload</button></Link>
        {end ?
        <button className="mx-2 px-3 btn btn-dark" onClick={handelNextUser}>Next User</button>
          :
          <button className="mx-2 px-3 btn btn-dark disabled" onClick={handelNextUser}>Next User</button>
      }

      </div>
    </div>
  );
};

export default VidoUpload;
