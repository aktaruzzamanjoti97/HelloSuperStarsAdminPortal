import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import moment from 'moment';
import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from 'react-router-dom';
import './AddProductS.css';
import UploadAuctionComponent from './UploadAuctionComponent';
import { useHistory } from 'react-router-dom';

const AddProductSouvenir = () => {

    const [convertedContent, setConvertedContent] = useState(null);
    const [file, setFile] = useState(null);
    const history = useHistory();

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [inputFieldList, setInputFieldList] = useState(
        {
            name:'',
            title:'',
            keyword:'',
            details:'',
            base_price:'',
            bid_from:'',
            bid_to:'',
            banner:'',
            product_image:'',

        }
    )
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputFieldList((prev) => {
          return ({ ...prev, [name]: value });
        })
        
      }

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };

    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
        console.log(convertedContent);
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    //console.log(moment(endDate).format('yyyy-MM-DD HH:mm:ss'));

    const handleChange = (newValue) => {
        setStartDate(newValue);
       
    };
    const handleEndChange = (secondValue) => {
        setEndDate(secondValue);
    };



    const [imageUpload, setImageUpload] = useState({
        upload: {
            pictures: [],
            maxFileSize: 5242880,
            imgExtension: [".jpg", ".png",".jpeg"],
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

    const dataSubmit =(e)=>{
        e.preventDefault();
        const fData = new FormData();

        fData.append('name',inputFieldList.name);
        fData.append('title',inputFieldList.title);
        fData.append('keyword',inputFieldList.keyword);
        fData.append('details',convertedContent);
        fData.append('base_price',inputFieldList.base_price);
        fData.append('bid_from',moment(endDate).format('yyyy-MM-DD HH:mm:ss'));
        fData.append('bid_to',moment(endDate).format('yyyy-MM-DD HH:mm:ss'));
        fData.append('banner',file);
        fData.append('status',0);
        fData.append('product_image',imageUpload.upload);

        console.log('single',file);
        console.log('multiple', imageUpload.upload);

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/add/auction/product`, fData).then(res => {

                history.push('/superstar-admin/souvenir/confirm-or-edit-auction');

                console.log("data successfully Inserted");
           /*    if (res.data.status === 200) {
                // document.getElementById('input_form').reset();   
                swal("Success", res.data.message, "success");
                history.push('/superstar-admin/live-chat/pending');
              }
              else {
                //setModalShow(true);
                setRegister({ ...registerInput, error_list: res.data.validation_errors });
              } */
            });
          });

    }

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
                    <form onSubmit={dataSubmit}>


                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Name</p>
                            </div>
                            <div className="col-md-11">
                                <input 
                                className='form-control input-gray' type='text' onChange={handleInput}
                                name='name'
                                value={inputFieldList.name}
                                />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Title</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' 
                                type='text'
                                onChange={handleInput}
                                name='title'
                                value={inputFieldList.title}
                                 />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Keyword</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' 
                                type='text'
                                onChange={handleInput}
                                name='keyword'
                                value={inputFieldList.keyword}
                                 />
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
                                <input className='form-control input-gray' 
                                type='number'
                                name='base_price'
                                onChange={handleInput}
                                value={inputFieldList.base_price}
                                 />
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
                                                label="BID FROM"
                                                inputFormat="MM/dd/yyyy"
                                                value={startDate}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <DesktopDatePicker
                                                label="BID TO"
                                                inputFormat="MM/dd/yyyy"
                                                value={endDate}
                                                onChange={handleEndChange}
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
                                <input onChange={handleOnChange} type="file" name="banner" id="file" className="inputfile" />
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
                                <UploadAuctionComponent {...imageUpload.upload} handleAuctionChange={handleAuctionChange} />

                            </div>
                        </div>




                      {/*   <div className="mt-3">
                            <Link to="/superstar-admin/souvenir/confirm-or-edit-auction">
                                <button className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>
                            </Link>

                        </div> */}
                        <div className="mt-3">

                                <button className="btn btn-warning save-greetings-button py-2" type='submit'><big><b>Confirm</b></big></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProductSouvenir;