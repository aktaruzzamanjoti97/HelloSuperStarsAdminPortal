import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import moment from "moment";

const AdminAuditionCreateEvent = (props) => {
  const location = useLocation();
  const history = useHistory();

  const [audition_id, setAuditionId] = useState("");
  const [inputList, setInputList] = useState([{}]);
  const [stars, setStars] = useState([]);
  const [file, setFile] = useState("");
  const [imagedata, setImagedata] = useState("");
  const [videoData, setVideoData] = useState("");
  const [convertedContent, setConvertedContent] = useState("");

  const [roundStatus, setRoundStatus] = useState("");

  const [startDate, setStartDate] = useState(new Date("2022-08-18T21:11:54"));
  const [endDate, setEndDate] = useState(new Date("2022-08-18T21:11:54"));

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
  };

  const [inputData, setInputData] = useState({
    title: "",
    round_status: "",
    // star_ids: [],
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // Image Input
  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
    setImagedata(file[0]);
    
  };
  // Video Input
  const handleVideoChange = (file) => {
    console.log('Video File',file[0]);
    setVideoData(file[0]);
  };
  const Confirmed = () => {

    axios.put(`/api/audition-admin/confirmed/audition/${audition_id}`).then((res) => {

        if (res.status === 200) {
            history.push(`/audition-admin/audition`)
        }
        
      });
}

  useEffect(() => {
    //Fetch Superstars
    axios.get("/api/audition-admin/audition/stars").then((res) => {
      if (res.data.status === 200) {
        setStars(res.data.stars);
      }
    });

 
    var aud_id = props.match.params.id;

    // geeting audtion id
    setAuditionId(props.match.params.id);

    axios.get(`/api/audition-admin/audition/${aud_id}`).then((res) => {
      if (res.data.status === 200) {
        let audition = res.data.audition;
        // console.log("Single Audition:", audition);

        // set Title
        setInputData({
          ...inputData,
          title: audition.title,
          round_status:audition.round_status
        });

        // set Image Data
        setImagedata(audition.banner);
        setVideoData(audition.video);

        // set Star and End Date
        setStartDate(audition.start_time);
        setEndDate(audition.end_time);

        // set audition star
        if (res.data.judge_ids.length > 0) {
          setInputList(res.data.judge_ids);
        }

        // audition.assign_judge.map((judge)=>
        setConvertedContent(audition.description);
      }
    });
  }, [props.match.params.id]);

  // Add Audtion Form Submission
  const auditionSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("star_ids", inputList);
    formData.append("description", convertedContent);
    formData.append("banner", imagedata);
    formData.append("round_status", inputData.round_status);
    formData.append("video", videoData);
    formData.append("start_time",moment(startDate).format("yyyy-MM-DD HH:mm:ss"));
    formData.append("end_time",moment(endDate).format("yyyy-MM-DD HH:mm:ss"));
    formData.append("audition_id", audition_id);

    // axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.post(`api/audition-admin/audition/add`, formData).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        history.push(`/audition-admin/audition/pending`);
      } else if (res.data.status === 422) {
        setInputData({
          ...inputData,
          error_list: res.data.validation_errors,
        });
      } else {
        console.log("Exception Error : ", res.data.message);
        // swal("Error", res.data.message, "error");
      }
    });
    // });
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = parseInt(value);
    console.log(list);
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, {}]);
  };

  return (
    <div className="AS">
      {/* <MeetUpEventNave /> */}

      <div className="greetingsFormBorder">
        <div className="greetingsPadding addMeetUpPadding">
          <div className="d-flex">
            <div className="addIconGreetings">
              <i
                style={{ color: "#ffc107" }}
                class="far fa-plus-square mx-2"
              ></i>
            </div>
            <h3 className="text-warning text-bold">Review Audition</h3>
          </div>
          <form id="input_form" encType="multipart/form-data">
            <div className="row my-4">
              <div className="col-md-1">
                <p className="text-white">
                  <big>Event Title</big>
                </p>
              </div>
              <div className="col-md-11">
                <input
                  className="form-control input-gray"
                  type="text"
                  placeholder="Enter Event Title"
                  name="title"
                  value={inputData.title}
                  onChange={handleInput}
                />
                <span className="text-danger">
                  {inputData.error_list.title}
                </span>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-1 text-white">
                <p>
                  <big>Description</big>
                </p>
              </div>
              <div className="col-md-11">
                <CKEditor
                  data={convertedContent}
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    setConvertedContent(editor.getData());
                  }}
                />
                <span className="text-danger">
                  {inputData.error_list.description}
                </span>
              </div>
            </div>
            {inputList.map((x, i) => {
              return (
                <>
                  <div className="row my-4">
                    <div className="col-md-1">
                      <p className="text-white">
                        <big>Superstar {i + 1}</big>
                      </p>
                    </div>
                    <div className="col-md-11">
                      <div className="d-flex">
                        <select
                          value={x}
                          onChange={(e) => handleInputChange(e, i)}
                          className="form-select input-gray text-white"
                          aria-label="Default select example"
                        >
                          <option selected>Select Superstar</option>

                          {/* <option value="1">Shakib Al Hasan</option>
                        <option value="2">Musfiqur Rahim</option>
                        <option value="3">Tamim Iqbal</option> */}

                          {stars.map((star, i) => (
                            <option
                              value={star.id}
                            >{`${star.first_name} ${star.last_name}`}</option>
                          ))}
                        </select>

                        <div className="btn-box">
                          {inputList.length !== 1 && (
                            <span
                              className="mr10 btn btn-danger mx-2"
                              onClick={() => handleRemoveClick(i)}
                            >
                              <i class="fa-solid fa-minus"></i>
                            </span>
                          )}
                          {inputList.length - 1 === i && (
                            <span
                              className="btn btn-success mx-1"
                              onClick={handleAddClick}
                            >
                              <i className="fa-solid fa-plus"></i> Add
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
<div className="row my-4">
                      <div className="col-md-1">
                      <p className="text-white">Select Round</p>
                      </div>
                      <div className="col-md-11">
                        <select
                          name="round_status"
                          type="number"
                          value={inputData.round_status}
                          onChange={handleInput}
                          className="form-select input-gray text-white"
                          aria-label="Default select example"
                        >
                          <option selected>Select Round</option>
                          <option value="1">First Round</option>
                        <option value="2">Second Round</option>
                        <option value="3">Third Round</option>
                     
                     </select>

            </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2">
                  <p className="text-white">Time Length</p>
                </div>
                <div className="col-md-9 row">
                  <div className="col-md-5 timeLengthPicker">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <MobileDatePicker
                          label="Start Date"
                          inputFormat="MM/dd/yyyy"
                          value={startDate}
                          onChange={handleStartDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                  <div className="col-md-1 d-flex justify-content-center">
                    <span className="fw-bold text-light mt-3">To</span>
                  </div>
                  <div className="col-md-5 timeLengthPicker">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <MobileDatePicker
                          label="End Date"
                          inputFormat="MM/dd/yyyy"
                          value={endDate}
                          onChange={handleEndDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              
            <div className="row">
              <div className="col-md-4">
                <div className="row my-4">
                  <div className="col-md-3 text-white">
                    <p>
                      <big>Upload Banner</big>
                    </p>
                  </div>
                  <div className="col-md-9">

                    <img
                        src={file}
                        className="img-fluid avatar-img-src mb-3"
                        alt=""
                      />
                    {imagedata != null ? (<img
                        src={`http://localhost:8000/${imagedata}`}
                        className="img-fluid avatar-img-src mb-3"
                        alt=""
                      />) :""}
                    
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="inputfile"
                      onChange={(e) => handleChange(e.target.files)}
                    />
                    <label for="file">
                      <i class="fas fa-cloud-upload-alt"></i> Upload
                    </label>
                    <span className="text-danger">
                      {inputData.error_list.banner}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="row my-4">
                  <div className="col-md-3 text-white">
                    <p>
                      <big>Upload Video</big>
                    </p>
                  </div>
                  <div className="col-md-9">

                    {/* <img
                        src={file}
                        className="img-fluid avatar-img-src mb-3"
                        alt=""
                      />
                    {imagedata != null ? (<img
                        src={`http://localhost:8000/${imagedata}`}
                        className="img-fluid avatar-img-src mb-3"
                        alt=""
                      />) :""} */}
                    
                    <input
                      type="file"
                      name="video"
                      id="video"
                      className="inputfile"
                      onChange={(e) => handleVideoChange(e.target.files)}
                    />
                    <label for="video">
                      <i class="fas fa-cloud-upload-alt"></i> Upload
                    </label>
                    <span className="text-danger">
                      {inputData.error_list.video}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button
                className="btn btn-warning save-greetings-button py-2"
                onClick={auditionSubmit}
              >
                <big>
                  <b>Review Again</b>
                </big>
              </button>
              
            </div>
          </form>
          <button
                className="btn btn-warning save-greetings-button py-2 mt-4"
                onClick={Confirmed}
              >
                <big>
                  <b>Send To Manager</b>
                </big>
              </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAuditionCreateEvent;
