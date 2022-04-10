import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import JuryMarkingDetails from "./JuryMarkingDetails";
import "./AdminSelectJury.css";
import axios from "axios";
import swal from "sweetalert";
import { Form } from "react-bootstrap";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const AdminSelectJury = (props) => {
  let history = useHistory();

  const [participants, setAuditionParticipant] = useState([]);

  const [juries, setJuries] = useState([]);
  const [selectedTop, setSelectedTop] = useState("");
  const [selectedMessage, setSelectedMessage] = useState("");
  const [rejectedMessage, setRejecteddMessage] = useState("");
  const [mark_wise,setMarkWise] = useState("");
  const [number_wise,setNumberWise] = useState("");

  var aud_id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`/api/audition-admin/jury-selected-videos/${aud_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setAuditionParticipant(res.data.audition_participants);
          setJuries(res.data.juries);
          console.log("juries", res.data.juries);
        }
      });
  }, [aud_id]);

  const handleSelectedTop = (e) => {
    setSelectedTop(e.target.value);
  };
  const handleSelectedMessage = (e) => {
    setSelectedMessage(e.target.value);
  };
  const handleRejectedMessage = (e) => {
    setRejecteddMessage(e.target.value);
  };

  const handleMark = (e) => {
    setMarkWise(e.target.value);
    setNumberWise('');
  }

  const handleNumber = (e) => {
    setNumberWise(e.target.value);
    setMarkWise('');
  }

  console.log('mark_wise',mark_wise);
  console.log('number_wise',number_wise);

  // Submit Selected Video
  const submitSelectedVideo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("audition_id", aud_id);
    formData.append("selected_top", selectedTop);
    formData.append("message", selectedMessage);
    formData.append("mark_wise", mark_wise);
    formData.append("number_wise", number_wise);


    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`api/audition-admin/selected-top-videos`, formData)
        .then((res) => {
          if (res.data.status === 200) {
            setSelectedTop("");
            setSelectedMessage("");
            swal("Success", res.data.message, "success");
          }
        });
    });
  };

  // Submit submitRejectedVideo
  const submitRejectedVideo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("message", rejectedMessage);
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`api/audition-admin/rejected-videos-message`, formData)
        .then((res) => {
          if (res.data.status === 200) {
            setRejecteddMessage("");
            swal("Success", res.data.message, "success");
            history.push(`/audition-admin/auditions/round2-appeal/${aud_id}`);
          }
        });
    });
  };

  return (
    <div className="container">
      <div className="row mb-5">
        {juries?.map((jury, i) => (
          <div className="col-md-4 my-3 d-flex justify-content-center">
            <div className="bg-dark cardBox">
              <div className="px-3 d-flex justify-content-start nameBg rounded-3">
                <img
                  className="img-fluid arafatPic py-2"
                  src={`http://localhost:8000/${jury.image}`}
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <h6 className="mx-3 text-black juryName">{`${jury.first_name} ${jury.last_name}`}</h6>
                </div>
              </div>

              <JuryMarkingDetails juryId={jury.id} />

              <div className="m-3">
                <button className="w-100 btn nameBg p-2">
                  <big className="text-dark fw-bold">Details</big>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-dark my-3">
        <div className="nameBg p-2 rounded-3">
          <h5 className="text-black p-1 mx-2">Selection for Next Round</h5>
        </div>

        <div className="row p-4">
          <p className="text-light">
            <big>Select top</big>
          </p>
          <div className="col-md-3 radioButtonSelect">
            <FormControl>
       
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel

                  value="mark"
                  control={<Radio />}
                  label="Mark"
                  onChange={handleMark}
                />
                <FormControlLabel
                  value="number"
                  control={<Radio />}
                  label="Number"
                  onChange={handleNumber}
                />
            
              </RadioGroup>
            </FormControl>

            
            <input
              type="text"
              className="my-2 form-control input-gray border border-warning"
              onChange={handleSelectedTop}
              value={selectedTop}
            />
          </div>
          {/* <div className="col-md-2">
            <span className="btn nameBg my-2 fw-bold">Apply</span>
          </div> */}
        </div>

        <div className="row p-4">
          <div className="col-md-12">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="form-control input-gray mx-1 border border-warning"
              onChange={handleSelectedMessage}
              value={selectedMessage}
            ></textarea>
          </div>
        </div>

        <div className="row p-4">
          <div className="col-md-6">
            <span
              className="btn nameBg fw-bold w-100"
              onClick={submitSelectedVideo}
            >
              Send
            </span>
          </div>
        </div>
      </div>

      <div className="bg-dark my-5">
        <div className="nameBg p-2 rounded-3">
          <h5 className="text-black p-1 mx-2">Rejected</h5>
        </div>

        <div className="row p-4">
          <div className="col-md-12">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="form-control input-gray mx-2 border border-warning"
              onChange={handleRejectedMessage}
              value={rejectedMessage}
            ></textarea>
          </div>

          <div className="row p-4">
            <div className="col-md-4">
              <span
                className="btn nameBg fw-bold w-100"
                onClick={submitRejectedVideo}
              >
                Send
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSelectJury;
