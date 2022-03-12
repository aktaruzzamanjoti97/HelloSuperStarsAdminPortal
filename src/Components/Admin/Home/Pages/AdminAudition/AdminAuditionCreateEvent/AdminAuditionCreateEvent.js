import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from 'react-router-dom';

const AdminAuditionCreateEvent = () => {

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
        <div className="AS">
            {/* <MeetUpEventNave /> */}

            <div className="greetingsFormBorder">
                <div className="greetingsPadding addMeetUpPadding">
                    <div className="d-flex">
                        <div className="addIconGreetings">
                            <i style={{ color: '#ffc107' }} class="far fa-plus-square mx-2"></i>
                        </div>
                        <h3 className="text-warning text-bold">Create Event</h3>
                    </div>
                    <form action="">


                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white"><big>Event Title</big></p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' placeholder='Enter Event Title' />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1 text-white">
                                <p><big>Description</big></p>
                            </div>
                            <div className="col-md-11">
                                {/* <textarea className="form-control input-gray me-4" type="text" /> */}
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
                            <div className="col-md-1">
                                <p className="text-white"><big>Superstar 1</big></p>
                            </div>
                            <div className="col-md-11">
                                {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                                <select className="form-select input-gray text-white" aria-label="Default select example">
                                    <option selected>Select Superstar</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white"><big>Superstar 2</big></p>
                            </div>
                            <div className="col-md-11">
                                {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                                <select className="form-select input-gray text-white" aria-label="Default select example">
                                    <option selected>Select Superstar</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white"><big>Superstar 3</big></p>
                            </div>
                            <div className="col-md-11">
                                {/* <input className='form-control input-gray' type='text' placeholder='Enter Event Title' /> */}
                                <select className="form-select input-gray text-white" aria-label="Default select example">
                                    <option selected>Select Superstar</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                        

                        <div className="row">

                            <div className="col-md-4">
                                <div className="row my-4">
                                    <div className="col-md-3 text-white">
                                        <p><big>Upload Banner</big></p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="file" name="file" id="file" className="inputfile" />
                                        <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>

                                    </div>
                                </div>
                        
                            </div>
     


                        </div>




                        <div className="mt-3">
                            <Link to="/superstar-admin/meetup-events">
                                <button className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AdminAuditionCreateEvent;