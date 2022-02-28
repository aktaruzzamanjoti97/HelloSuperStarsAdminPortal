import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Link, useHistory } from 'react-router-dom';
import UploadSuperstarMarketPlace from '../UploadSuperstarMarketPlace/UploadSuperstarMarketPlace';

const AddProductSuperstarFromMarketPlace = () => {

    const [imageUpload, setImageUpload] = useState({
        upload: {
            pictures: [],
            maxFileSize: 5242880,
            imgExtension: [".jpg", ".png"],
            defaultImages: []
        }
    });

    const handleChange = (files) => {
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

    // const confirmUpload = () => {
    //     const { pictures } = imageUpload.upload;
    //     console.warn("Confirm Upload =>", [...pictures]);
    // };

    const [inputList, setInputList] = useState([{ inputFile: "" }]);
    const [file, setFile] = useState(null);

    let history = useHistory();

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

    // const handleInputChange = (e, index) => {
    //     const { file, value } = e.target;
    //     const list = [...inputList];
    //     list[index][file] = value;
    //     setInputList(list);
    // };


    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    return (
        <div className="AS m-3">


            <div className="greetingsFormBorder">
                <div className="greetingsPadding addMeetUpPadding">
                    <div className="d-flex">
                        <div className="addIconGreetings">
                            <i style={{ color: '#ffc107' }} class="far fa-plus-square mx-2"></i>
                        </div>
                        <h3 className="text-warning text-bold">Add Product</h3>
                    </div>
                    <div action="">


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
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-2 text-white">
                                        <p>Total Units</p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="number" className="form-control input-gray" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-2 text-white">
                                        <p className="ms-4">Price</p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="number" className="form-control input-gray" />
                                        {/* <input type="number" className="form-control input-gray" /> */}
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div>
                            <div className="row my-4">
                                <div className="col-md-1 text-white">
                                    Upload Banner
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

                        </div>




                        <div className="">
                            {inputList.map((x, i) => {
                                return (
                                    <div className="row my-4">
                                        <div className="col-md-1 text-white">
                                            <p>Upload Image</p>
                                        </div>
                                        <div className="col-md-3">
                                           
                                            <UploadSuperstarMarketPlace {...imageUpload.upload} handleChange={handleChange} />
                                        </div>
                                  
                                    </div>
                                )
                            })}

                        </div>






                        <div className="mt-3">
                            <Link to="/superstar/souvenir/confirm-or-edit-marketplace">
                                <button onClick={() => history.push('/superstar-admin/souvenir/edit-or-confirm-marketplace')} className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProductSuperstarFromMarketPlace; 