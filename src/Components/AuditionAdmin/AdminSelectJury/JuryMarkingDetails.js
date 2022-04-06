import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import decline from "../../../assets/images/declined.png";
import sign from "../../../assets/images/sign.png";
import "./AdminSelectJury.css";
import axios from "axios";

const JuryMarkingDetails = (juryId) => {

  let history = useHistory();

  const [totalVideos, setTotalVideos] = useState([]);
  const [passedVideo, setPassedVideo] = useState([]);
  const [failedVideo, setFailedVideo] = useState([]);


  useEffect(() => {
    console.log('Jury_id view',juryId.juryId);
    axios
      .get(`/api/audition-admin/jury-marking-videos/${juryId.juryId}`)
      .then((res) => {
        if (res.data.status === 200) {
          console.log('marking',res.data);
          setTotalVideos(res.data.marking_videos);
          setPassedVideo(res.data.passed_videos);
          setFailedVideo(res.data.failed_videos);
        }
      });
  }, [juryId.juryId]);

  


  return (
    <>
      <div className="threeF m-3  p-2 rounded-3">
                <div className="d-flex ">
                  <button className="">
                    <i className="fa-solid fa-video text-warning iconJuryText"></i>
                  </button>
                  <span className="mx-3">
                    <span>Total Videos</span>
                    <h5>
                      <big className="text-warning">{totalVideos?.length}</big>
                    </h5>
                  </span>
                </div>
              </div>


              <div className="cFour m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={sign} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Selected Videos</span>
                    <h5>
                      <big className="text-warning">{passedVideo?.length}
                      </big>
                    </h5>
                  </span>
                </div>
              </div>


              <div className="ffdNine m-3  p-2 rounded-3">
                <div className="d-flex">
                  <button>
                    <img src={decline} className="img-fluid iconJury" alt="" />
                  </button>
                  <span className="mx-3">
                    <span>Rejected Videos</span>
                    <h5>
                      <big className="text-warning">{failedVideo?.length}</big>
                    </h5>
                  </span>
                </div>
              </div>
    </>
  );
};

export default JuryMarkingDetails;
