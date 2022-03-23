import { MobileTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
// import "./FanGroupCreate.css";

const FanGroupCreate = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
    console.log(convertedContent);
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

          <form>
            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Group Name</p>
              </div>
              <div className="col-md-6">
                <input className="form-control input-gray" type="text" />
              </div>
            </div>

            <div className="row my-4">
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
            </div>

            <div className="row my-4">
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
            </div>

            <div className="row my-4">
              <div className="col-md-2 text-white">
                <p>Members Limit</p>
              </div>

              <div className="col-md-5 row">
                <div className="col-md-5">
                  <input type="number" className="form-control input-gray" />
                </div>
                <div className="col-md-1 text-light" >
                  To
                </div>
                <div className="col-md-5">
                  <input type="number" className="form-control input-gray" />
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Invite Star</p>
              </div>
              <div className="col-md-6 input-graySelect">
                <select
                  className="form-select form-control input-gray text-light"
                  aria-label="Default select example"
                >
                  <option selected>Shahrukh Khan</option>
                  <option value="1">Shahrukh Khan</option>
                  <option value="2">Salman Khan</option>
                  <option value="3">Amir Khan</option>
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
                  aria-label="Default select example"
                >
                  <option selected>Nawazuddin Siddique</option>
                  <option value="1">Shahrukh Khan</option>
                  <option value="2">Salman Khan</option>
                  <option value="3">Amir Khan</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <button
                className="btn btn-warning save-greetings-button py-2"
                type="submit"
              >
                <big>
                  <b>Update</b>
                </big>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FanGroupCreate;
