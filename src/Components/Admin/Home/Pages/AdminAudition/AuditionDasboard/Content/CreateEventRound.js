import {
    DesktopDatePicker,
    DesktopTimePicker,
    LocalizationProvider,
  } from "@mui/lab";
  import AdapterDateFns from "@mui/lab/AdapterDateFns";
  import { Stack, TextField } from "@mui/material";
  import { convertToHTML } from "draft-convert";
  import { EditorState } from "draft-js";
  import React, { useState } from "react";
  import { Accordion, Button } from "react-bootstrap";
  import { Editor } from "react-draft-wysiwyg";
  import "./CreateEventRound.css";
  
  const CreateEventRound = () => {
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
  
    function increment() {
      //setCount(prevCount => prevCount+=1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
  
    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 0);
        }
      });
    }
  
    const [convertedContent, setConvertedContent] = useState(null);
  
    const [value, setValue] = React.useState(new Date());
  
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
  
    return (
      <>
        <div className="createEventContainer">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Create Event Start</Accordion.Header>
              <Accordion.Body>
                <div className="my-2">
                  <form>
                    <div className="row ms-5">
                      <div class="form-group row mt-3">
                        <label
                          for="staticEmail"
                          class="col-sm-2 col-form-label text-light "
                        >
                          Event Title
                        </label>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            class="form-control Frombtns"
                            placeholder="Guitar for the beginners"
                          />
                        </div>
                      </div>
  
                      <div class="form-group row mt-3">
                        <label
                          for="inputPassword"
                          class="col-sm-2 col-form-label text-light "
                        >
                          Description
                        </label>
                        <div class="col-sm-8">
                          <Editor
                            editorState={editorState}
                            onEditorStateChange={handleEditorChange}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                          />
                        </div>
                      </div>
                      <div class="form-group row mt-3">
                        <label
                          for="inputPassword"
                          class="col-sm-2 col-form-label text-light "
                        >
                          Time boundary
                        </label>
                        <div class="col-sm-2">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <DesktopTimePicker
                                label="For desktop"
                                value={value}
                                onChange={(newValue) => {
                                  setValue(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </div>
                        <div class="col-sm-2">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <DesktopDatePicker
                                label="For desktop"
                                value={value}
                                minDate={new Date("2017-01-01")}
                                onChange={(newValue) => {
                                  setValue(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </div>
                      </div>
  
                      <div class="form-group row mt-3">
                        <label
                          for="staticEmail"
                          class="col-sm-2 col-form-label text-light "
                        >
                          Upload File
                        </label>
  
                        <div class="col-sm-3 mb-2">
                          <div className="row my-4">
                            <div className="col-md-2 text-white">
                              {/* <img
                              src={file}
                              className="img-fluid avatar-img-src"
                              alt=""
                            /> */}
                            </div>
                            <div className="col-md-10">
                              <input
                                type="file"
                                name="file"
                                id="file"
                                className="inputfile w-25"
                                // onChange={(e) => handleChange(e.target.files)}
                              />
                              <label for="file">
                                <i class="fas fa-cloud-upload-alt"></i> Upload
                                Banner
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3 mb-2">
                          <div className="row my-4">
                            <div className="col-md-2 text-white">
                              {/* <img
                              src={fileVideo}
                              className="img-fluid avatar-img-src"
                              alt=""
                            /> */}
                            </div>
                            <div className="col-md-10">
                              <input
                                type="file"
                                name="file"
                                id="setFile"
                                className="inputfile w-25"
                                // onChange={(e) => handleVideoChange(e.target.files)}
                              />
                              <label for="setFile">
                                <i class="fas fa-cloud-upload-alt"></i> Upload
                                Video
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3 mb-2">
                          <div className="row my-4">
                            <div className="col-md-4 text-white">
                              <small>User update slot</small>
                            </div>
                            <div className="col-md-8 d-flex">
                              <div>
                                <Button
                                  className="btnIncrementDecrement text-primary"
                                  onClick={decrement}
                                >
                                  <i class="fa fa-minus" aria-hidden="true"></i>
                                </Button>
                              </div>
                              <div>
                                {" "}
                                <Button className="btnIncrementDecrement text-primary">
                                  {count}
                                </Button>{" "}
                              </div>
                              <div>
                                <Button
                                  className="btnIncrementDecrement text-primary"
                                  onClick={increment}
                                >
                                  <i class="fas fa-plus"></i>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="row justify-content-start mb-4">
                        <div className="col-md-3 text-left">
                          <button className="btn btn-warning mx-4">
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </>
    );
  };
  
  export default CreateEventRound;