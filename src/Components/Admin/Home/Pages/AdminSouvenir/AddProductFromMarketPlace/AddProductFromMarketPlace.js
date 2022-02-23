import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Link, useHistory } from 'react-router-dom';

const AddProductFromMarketPlace = () => {
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
                    <form action="">


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








                        {/* <div className="row"> */}

                        {/* <div className="col-md-4"> */}
                        <div className="row my-4">
                            <div className="col-md-1 text-white">
                                <p>Upload Banner</p>
                            </div>
                            <div className="col-md-3">
                                <input type="file" name="file" id="file" className="inputfile" />
                                <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>

                            </div>
                        </div>






                        <div className="mt-3">
                            <Link to="/superstar-admin/souvenir/confirm-or-edit-jersey">
                                <button onClick={() => history.push('/superstar-admin/souvenir/edit-jersey')} className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProductFromMarketPlace; 