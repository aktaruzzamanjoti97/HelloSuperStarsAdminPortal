import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { Link } from 'react-router-dom';
import UploadSuperstarAuction from '../UploadSuperstarAuction/UploadSuperstarAuction';

const AddProductAuctionSuperstar = () => {

    const [convertedContent, setConvertedContent] = useState(null);
    const [file, setFile] = useState(null);

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

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [imageUpload, setImageUpload] = useState({
        upload: {
            pictures: [],
            maxFileSize: 5242880,
            imgExtension: [".jpg", ".png"],
            defaultImages: []
        }
    });

    const handleAuctionChange = (files) => {
        const { pictures } = imageUpload.upload;
        console.warn({ pictures, files });

        setImageUpload(
            {
                ...imageUpload,
                upload: {
                    ...imageUpload.upload,
                    pictures: [...pictures, ...files]
                }
            },
            () => {
                console.warn("It was added!");
            }
        );
    };

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    return (
        <div className="AS m-3">
            {/* <SouvenirNav /> */}

            <div className="greetingsFormBorder">
                <div className="greetingsPadding addMeetUpPadding">
                    <div className="d-flex">
                        <div className="addIconGreetings">
                            <i style={{ color: '#ffc107' }} class="far fa-plus-square mx-2"></i>
                        </div>
                        <h3 className="text-warning text-bold">Add Product</h3>
                    </div>
                    <form action="">


                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Name</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Title</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Keyword</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1 text-white">
                                <p>Description</p>
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
                                <p className="text-white">Base Price</p>
                            </div>
                            <div className="col-md-3">
                                <input className='form-control input-gray' type='number' />
                            </div>
                        </div>


                        <div className="row my-4">
                            <div className="col-md-1 text-white">
                                <p><small>Deadline</small></p>
                            </div>

                            <div className="col-md-10">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    {/* <Stack spacing={3}> */}
                                    <div className="row dateDesktopPicker">
                                        <div className="col-md-3">
                                            <DesktopDatePicker
                                                label="Date desktop"
                                                inputFormat="MM/dd/yyyy"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <TimePicker

                                                label="Time"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </div>


                                    </div>


                                    {/* </Stack> */}
                                </LocalizationProvider>
                            </div>
                        </div>






                        {/* <div className="row"> */}

                        {/* <div className="col-md-4"> */}
                        <div className="row my-4">
                            <div className="col-md-1 text-white">
                                <p>Upload Banner</p>
                            </div>
                            <div className="col-md-3">
                                <input onChange={handleOnChange} type="file" name="file" id="file" className="inputfile" />
                                <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>

                            </div>
                        </div>
                        {
                            file ? (<div className="row">
                                <div className="col-md-1 text-light"><small>Selected Banner</small></div>
                                <div className="col-md-11 fw-bold text-success">
                                    {file?.name}
                                </div>
                            </div>) : null
                        }


                        <div className="row my-4">
                            <div className="col-md-1 text-white">
                                <p>Upload Images</p>
                            </div>
                            <div className="col-md-3">
                                <UploadSuperstarAuction {...imageUpload.upload} handleAuctionChange={handleAuctionChange} />

                            </div>
                        </div>




                        <div className="mt-3">
                            <Link to="/superstar/souvenir/confirm-or-edit-super-auction">
                                <button className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProductAuctionSuperstar;