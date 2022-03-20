import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";

const AdminAuditionCreateEvent = (props) => {
  const location = useLocation();
  const history = useHistory();

  const [audition_id, setAuditionId] = useState("");
  const [stars, setStars] = useState([]);
  const [file, setFile] = useState("");
  const [imagedata, setImagedata] = useState("");
  const [convertedContent, setConvertedContent] = useState("");

  const [audition, setAudition] = useState("");

  const [inputData, setInputData] = useState({
    title: "",
    star_one_id: "",
    star_two_id: "",
    star_three_id: "",
    error_list: [],
    star_ids: [],
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

  useEffect(() => {
    //Fetch Superstars
    axios.get("/api/admin/audition/stars").then((res) => {
      if (res.data.status === 200) {
        setStars(res.data.stars);
      }
    });

    var aud_id = props.match.params.id;

    // geeting audtion id
    setAuditionId(props.match.params.id);

    axios.get(`/api/admin/audition/${aud_id}`).then((res) => {
      if (res.data.status === 200) {
        let audition = res.data.audition;
        console.log("Single Audition:", audition);

        setInputData({
          ...inputData,
          title: audition.title,
          star_ids: audition.assign_judge,
        });
        setConvertedContent(audition.description);
      }
    });
  }, [props.match.params.id]);

  // Add Audtion Form Submission
  const auditionSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("star_one_id", inputData.star_one_id);
    formData.append("star_two_id", inputData.star_two_id);
    formData.append("star_three_id", inputData.star_three_id);
    formData.append("description", convertedContent);
    formData.append("banner", imagedata);
    formData.append("audition_id", audition_id);

    console.log("Image Data", imagedata);

    // axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.post(`api/admin/audition/add`, formData).then((res) => {
      // alert('dad')
      if (res.data.status === 200) {
        // setInputData({
        //   title: "",
        //   star_one_id: "",
        //   star_two_id: "",
        //   star_three_id: "",
        //   error_list: [],
        // });
        setConvertedContent("");
        setFile("");
        swal("Success", res.data.message, "success");
        history.push(`/superstar-admin/audition/pending`);
        //window.location.href = "/superstar-admin/superstars";
        //setModalShow(false);
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
            <h3 className="text-warning text-bold">Create Audtion</h3>
          </div>
          <form
            onSubmit={auditionSubmit}
            id="input_form"
            encType="multipart/form-data"
          >
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

            {inputData.star_ids.length > 0 ? (
              <div>
                {inputData.star_ids.map((judge, index) => (
                  <div>
                    <div className="row my-4">
                      <div className="col-md-1">
                        <p className="text-white">
                          <big>Superstar {index + 1}</big>
                        </p>
                      </div>
                      <div className="col-md-11">
                        {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                        <select
                          className="form-select input-gray text-white"
                          aria-label="Default select example"
                          name={
                            index === 0
                              ? "star_one_id"
                              : index === 1
                              ? "star_two_id"
                              : "star_three_id"
                          }
                          value={judge.judge_id}
                          onChange={handleInput}
                        >
                          <option value="">Select Superstar</option>
                          {stars.map((star, i) => (
                            <option
                              value={star.id}
                            >{`${star.first_name} ${star.last_name}`}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
             
              <div>
              <div className="row my-4">
                <div className="col-md-1">
                  <p className="text-white">
                    <big>Superstar 1</big>
                  </p>
                </div>
                <div className="col-md-11">
                  {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                  <select
                    className="form-select input-gray text-white"
                    aria-label="Default select example"
                    name="star_one_id"
                    value={inputData.star_one_id}
                    onChange={handleInput}
                  >
                    <option value="">Select Superstar</option>
                    {stars.map((star, i) => (
                      <option
                        value={star.id}
                      >{`${star.first_name} ${star.last_name} `}</option>
                    ))}
                  </select>
                  <span className="text-danger">
                    {inputData.error_list.star_one_id}
                  </span>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-md-1">
                  <p className="text-white">
                    <big>Superstar 2</big>
                  </p>
                </div>
                <div className="col-md-11">
                  {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                  <select
                    className="form-select input-gray text-white"
                    aria-label="Default select example"
                    name="star_two_id"
                    value={inputData.star_two_id}
                    onChange={handleInput}
                  >
                    <option value="">Select Superstar</option>
                    {stars.map((star, i) => (
                      <option
                        value={star.id}
                      >{`${star.first_name} ${star.last_name} `}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-md-1">
                  <p className="text-white">
                    <big>Superstar 3</big>
                  </p>
                </div>
                <div className="col-md-11">
                  {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                  <select
                    className="form-select input-gray text-white"
                    aria-label="Default select example"
                    name="star_three_id"
                    value={inputData.star_three_id}
                    onChange={handleInput}
                  >
                    <option value="">Select Superstar</option>
                    {stars.map((star, i) => (
                      <option
                        value={star.id}
                      >{`${star.first_name} ${star.last_name} `}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            )}

            {inputData.star_ids.map((judge, index) => (
              <div>
                <div className="row my-4">
                  <div className="col-md-1">
                    <p className="text-white">
                      <big>Superstar {index + 1}</big>
                    </p>
                  </div>
                  <div className="col-md-11">
                    {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                    <select
                      className="form-select input-gray text-white"
                      aria-label="Default select example"
                      name={
                        index === 0
                          ? "star_one_id"
                          : index === 1
                          ? "star_two_id"
                          : "star_three_id"
                      }
                      value={judge.judge_id}
                      onChange={handleInput}
                    >
                      <option value="">Select Superstar</option>
                      {stars.map((star, i) => (
                        <option
                          value={star.id}
                        >{`${star.first_name} ${star.last_name}`}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}

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
                      className="img-fluid avatar-img-src"
                      alt=""
                    />
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
            </div>

            <div className="mt-3">
              <button className="btn btn-warning save-greetings-button py-2">
                <big>
                  <b>Confirm</b>
                </big>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAuditionCreateEvent;
