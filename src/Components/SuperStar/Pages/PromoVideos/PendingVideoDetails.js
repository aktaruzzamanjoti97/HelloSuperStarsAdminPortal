import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import clock from "../../../../assets/images/meetupEvent/clock.png";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import axios from "axios";
import "./SuperStarContent.css";
import { Markup } from "interweave";
import moment from "moment";
import Nav from "./Nav";
import swal from "sweetalert";

const PendingVideoDetails = (props) => {
  const history = useHistory();

  const [event, setEvent] = useState([]);

  useEffect(() => {

    const event_id = props.match.params.id;

    axios.get(`/api/star/promoVideo/pending/${event_id}`).then((res) => {
     {
        if (res.data.status == 200) {
          setEvent(res.data.promoVideos);
        }
      }
    });
  }, [props.match.params.id, history]);

  const handleClick = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/star/promoVideo/approved/${event.id}`).then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          history.push("/superstar/live/promoVideo");
        }
      });
    });
  };

  const decline = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/star/promoVideo/decline/${event.id}`).then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          history.push("/superstar/live/promoVideo");
        }
      });
    });
  };

  return (
    <>
      <div className="AS">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card event-card">
              <video width="312" controls>
                        <source
                            src={
                              event.video_url != null
                                  ? `http://localhost:8000/${event.video_url}`
                                  : "https://youtu.be/dgfTiONcnTc"
                            }
                            type="video/mp4"
                        />
                      </video>
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-12">
              <div className="card event-card2 shadow">
                <div className="card-body">
                  <h5 className="text-light p-2">
                    {event.title}
                  </h5>
                </div>
              </div>
            </div>
          </div>

       

          <div className="mt-3">
            {/* <Link to='/superstar/dashboard'>
                    <button className='btn MEN-X fw-bold'>Approve </button>
                </Link> */}

            {event.star_approval === 0 ? (
              <>
                <button className="btn MEN-X fw-bold" onClick={handleClick}>
                  Approved
                </button>

                <button className="btn MEN-Y text-warning fw-bold mx-3" onClick={decline}>
                  Decline
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingVideoDetails;
