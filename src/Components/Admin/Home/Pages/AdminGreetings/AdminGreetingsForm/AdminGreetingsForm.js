import React, { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom';
import "./AdminGreetingsForm.css";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import axios from "axios";
import swal from "sweetalert";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from 'moment'

const AdminGreetingsForm = () => {
  const history = useHistory();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [greetingInput, setGreeting] = useState({
    title: "",
    star_id: '',
    cost: "",
    star_time: "",
    end_time: "",
    error_list: [],
  });

  const [file, setFile] = useState("");
  const [imagedata, setImagedata] = useState("");
  const [starList, setStarList] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setGreeting({ ...greetingInput, [e.target.name]: e.target.value });
  };

  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
    setImagedata(file[0]);
  };

  // Fetch Stars Added By Admin
  useEffect(() => {
    axios.get(`/api/admin/star_list`).then((res) => {
      if (res.status === 200) {
        setStarList(res.data.category);
        console.log(res.data.category);
      }
    });
  }, []);

  // Editor Funtionalities //
  const [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    //console.log(convertedContent);
  };
  // End Editor Functionalies //

  const greetingSubmit = (e) => {
    e.preventDefault();

    const fData = new FormData();

    if(imagedata === null)
    {
        console.log('empty');
    }
    else
    {
        console.log('not empty');
    }

    fData.append("banner", imagedata);
    fData.append("star_id", greetingInput.star_id);
    fData.append("title", greetingInput.title);
    fData.append("cost", greetingInput.cost);
    fData.append("description", convertedContent);
    fData.append("registration_start_date", moment(startTime));
    fData.append("registration_end_date", moment(endTime));

    //console.log(startTime+endTime);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`api/admin/add_greetings`, fData).then((res) => {
        if (res.data.status === 200) {
          
          //document.getElementById('input_form').reset();
          swal("Success", res.data.message, "success");
          history.push(`/superstar-admin/greetings/details/${res.data.greeting_id}`);
          //window.location.href = "/superstar-admin/superstars";
          //setModalShow(false);
        } else {
          //setModalShow(true);
          setGreeting({
            ...greetingInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });

    
  };

  return (
    <div className="greetingsFormBorder">
      <div className="greetingsPadding">
        <div className="d-flex">
          <div className="addIconGreetings">
            <i style={{ color: "#ffc107" }} class="far fa-plus-square mx-2"></i>
          </div>
          <h3 className="text-warning text-bold">
            Create default greetings profile
          </h3>
        </div>
        <form
          onSubmit={greetingSubmit}
          id="input_form"
          encType="multipart/form-data"
        >
          <div className="form-group row my-4">
            <div className="col-md-2 text-white">
              <p>
                <big>Select Super Star</big>
              </p>
            </div>
            <div className="col-md-10">
              <select
                onChange={handleInput}
                name="star_id"
                className="form-control reply-control input-overlay"
                value={greetingInput.star_id}
              >
                <option className="text-whaite" value="">
                  Choose One
                </option>
                {starList.map((user, index) => (
                  <option className="text-whaite" value={user.id}>
                    {user.first_name} {user.last_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-2 text-white">
              <p>
                <big>Title</big>
              </p>
            </div>
            <div className="col-md-10">
              <input
                className="form-control input-gray"
                type="text"
                onChange={handleInput}
                name="title"
                value={greetingInput.title}
              />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-2 text-white">
              <p>
                <big>Description</big>
              </p>
            </div>
            <div className="col-md-10">
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-2 text-white">
              <p>
                <big>Cost</big>
              </p>
            </div>
            <div className="col-md-2">
              <input
                className="form-control input-gray"
                type="number"
                onChange={handleInput}
                name="cost"
                value={greetingInput.cost}
              />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-2 text-white">
              <p>
                <big>Registration Time</big>
              </p>
            </div>
            <div className="col-md-4 dateTimePicker">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Start Time"
                  value={startTime}
                  onChange={(getStartTime) => {
                    setStartTime(getStartTime);
                  }}
                />
              </LocalizationProvider>
            </div>
            
            <div className="col-md-4 dateTimePicker">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="End Time"
                  value={endTime}
                  onChange={(getEndTime) => {
                    setEndTime(getEndTime);
                  }}
                />
              </LocalizationProvider>
            </div>

          </div>

          <div className="row my-4">
            <div className="col-md-2 text-white">
              <p>
                <big>Upload Banner</big>
              </p>
            </div>
            <div className="col-md-10">
                {/* <input
                type="file"
                onChange={(e) => handleChange(e.target.files)}
                id="image"
                name="image"
                className="inputfile"
                />
                <label for="file">
                <i class="fas fa-cloud-upload-alt"></i> Upload
                </label> */}

                <img src={file}  className="img-fluid avatar-img-src" alt=""/>
                <input type="file" className="btn" onChange={(e) => handleChange(e.target.files)} id="image" name="image"/>

            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-2 text-white">
              <p>
                <big>Upload Video</big>
              </p>
            </div>
            <div className="col-md-10">
              <input type="file" name="file" id="file" className="inputfile" />
              <label for="file">
                <i class="fas fa-cloud-upload-alt"></i> Upload
              </label>
            </div>
          </div>

          <div className="my-3">
            {/* <Link to="/superstar-admin/greetings/details">
                            <button className="btn btn-warning save-greetings-button">Save</button>
                        </Link> */}

            <button
              type="submit"
              className="btn btn-warning save-greetings-button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminGreetingsForm;
