import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import moment from "moment";
// import { convertToHTML } from "draft-convert";
// import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
// import { Editor } from "react-draft-wysiwyg";
import "./CreateFanGroup.css";

const CreateFanGroup = () => {
  // const [value, setValue] = React.useState(new Date("2022-08-18T21:11:54"));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const [dateValue, setDateValue] = useState(new Date());
  const [endDateValue, setEndDateValue] = useState(new Date());
  const [groupName, setName] = useState("");
  const [minMember, setMinMember] = useState("");
  const [maxMember, setMaxMember] = useState("");
  const [banner, setBanner] = useState("");

  console.log("groupName ", groupName);
  console.log("minMember ", minMember);
  console.log("maxMember ", maxMember);
  console.log("banner ", banner);

  const handleStartDateChange = (newValue) => {
    setDateValue(newValue);
    console.log("Start Date", dateValue);
  };
  const handleEndDateChange = (newValue) => {
    setEndDateValue(newValue);
    console.log("End Date", endDateValue);
  };

  const [convertedContent, setConvertedContent] = useState(null);
  console.log("check ", convertedContent);

  const [allStar, setAllStar] = useState([]);
  const [someStar, setSomeStar] = useState([]);

  const [oneStar, setOneStar] = useState("");
  const [twoStar, setTwoStar] = useState("");

  console.log("oneStar ", oneStar);
  console.log("twoStar ", twoStar);

  useEffect(() => {
    axios.get("/api/admin/fan-group/star/list").then((res) => {
      if (res.data.status === 200) {
        setAllStar(res.data.allStar);

        console.log(res.data.allStar);
      }
    });
  }, []);

  const selectStar = (e) => {
    let value = e.target.value;
    var data = value;

    console.log("data ", data);

    axios.get(`/api/admin/fan-group/star/list/${data}`).then((res) => {
      // console.log(res.data.category);
      if (res.status === 200) {
        setSomeStar(res.data.someStar);
      }
      // setLoading(false);
    });

    setOneStar(data);
  };

  const createFanGroup = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("group_name", groupName);
    formData.append("description", convertedContent);

    formData.append(
      "start_date",
      moment(dateValue).format("yyyy-MM-DD HH:mm:ss")
    );
    formData.append(
      "end_date",
      moment(endDateValue).format("yyyy-MM-DD HH:mm:ss")
    );

    formData.append("min_member", minMember);
    formData.append("max_member", maxMember);

    formData.append("my_star", oneStar);
    formData.append("another_star", twoStar);
    formData.append("banner", banner.name);

    axios.post(`/api/admin/fan-group/store`, formData).then((res) => {
      if (res.data.status === 200) {
        console.log("Done");
        setName("");
        setMinMember("");
        setMaxMember("");
        setConvertedContent("");

        swal("Welcome", res.data.message, "success");
      }
    });
  };

  return (
    <div className="AS m-3">
      <div className="greetingsFormBorder">
        <div className="greetingsPadding addMeetUpPadding">
          <div className="d-flex">
            <div className="addIconGreetings">
              <i
                style={{ color: "#ffc107" }}
                class="far fa-plus-square mx-2"
              ></i>
            </div>
            <h3 className="text-warning text-bold">Create Fan Group</h3>
          </div>

          <form onSubmit={createFanGroup}>
            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Group Name</p>
              </div>
              <div className="col-md-6">
                <input
                  className="form-control input-gray"
                  type="text"
                  value={groupName}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>

            {/* <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Group Motive</p>
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
            </div> */}

            <div className="row my-4">
              <div className="col-md-2 text-white">
                <p>Group Motive</p>
              </div>

              <div className="col-md-10">
                <CKEditor
                  data={convertedContent}
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    setConvertedContent(editor.getData());
                  }}
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Select Date</p>
              </div>
              <div className="col-md-9 row">
                <div className="col-md-3 timeLengthPicker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={dateValue}
                        onChange={handleStartDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
                <div className="col-md-1 d-flex justify-content-center">
                  <span className="fw-bold text-light mt-3">To</span>
                </div>
                <div className="col-md-3 timeLengthPicker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileDatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={endDateValue}
                        onChange={handleEndDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
              </div>
            </div>

            {/* <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Time length</p>
              </div>
              <div className="col-md-9 row">
                <div className="col-md-3 timeLengthPicker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileTimePicker
                        label="Start Time"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />

                    </Stack>
                  </LocalizationProvider>
                </div>
                <div className="col-md-1 d-flex justify-content-center"><span className='fw-bold text-light mt-3'>To</span></div>
                <div className="col-md-3 timeLengthPicker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileTimePicker
                        label="End Time"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />

                    </Stack>
                  </LocalizationProvider>
                </div>
              </div>
            </div> */}

            <div className="row my-4">
              <div className="col-md-2 text-white">
                <p>Members Limit</p>
              </div>

              <div className="col-md-5 row">
                <div className="col-md-5">
                  <input
                    type="number"
                    className="form-control input-gray"
                    value={minMember}
                    onChange={(event) => {
                      setMinMember(event.target.value);
                    }}
                  />
                </div>
                <div
                  className="col-md-1 text-light
                                "
                >
                  To
                </div>
                <div className="col-md-5">
                  <input
                    type="number"
                    className="form-control input-gray"
                    value={maxMember}
                    onChange={(event) => {
                      setMaxMember(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">My Star</p>
              </div>
              <div className="col-md-6 input-graySelect">
                <select
                  onChange={selectStar}
                  className="form-select form-control input-gray text-light"
                  aria-label="Default select example"
                  id="star_one"
                  name="star_one"
                >
                  <option value="0">--Select Star--</option>
                  {allStar.map((star, index) => (
                    <option value={star.id}>
                      {star.first_name} {star.last_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Invite Star</p>
              </div>
              <div className="col-md-6 input-graySelect">
                <select
                  className="form-select form-control input-gray text-light"
                  onChange={(event) => {
                    setTwoStar(event.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option value="0">--Select Another Star--</option>
                  {someStar.map((star, index) => (
                    <option value={star.id}>
                      {star.first_name} {star.last_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Upload Banner</p>
              </div>
              <div className="col-md-3">
                <input
                  type="file"
                  className=""
                  onChange={(event) => {
                    setBanner(event.target.files[0]);
                  }}
                />
                {/* <input
                  type="file"
                  name="file"
                  id="file"
                  className="inputfile"

                />
                <label for="file">
                  <i class="fas fa-cloud-upload-alt"></i> Upload
                </label> */}
              </div>
            </div>

            <div className="mt-3">
              <button
                className="btn btn-warning save-greetings-button py-2"
                type="submit"
              >
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

export default CreateFanGroup;
