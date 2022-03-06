import axios from 'axios';
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Link, useHistory } from 'react-router-dom';
import UploadComponent from './UploadComponent';
import swal from 'sweetalert';

const AddProductFromMarketPlace = () => {
    
    const [title, setTitle] = useState("")
    const [unit_price, setUnitprice] = useState("")
    const [total_items, setItems] = useState("")
    const [keywords, setKeywords] = useState("")
    const [image, setImage] = useState()

    const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

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

    const confirmUpload = () => {
        const { pictures } = imageUpload.upload;
        console.warn("Confirm Upload =>", [...pictures]);
    };

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

    const handleInputChange = (e, index) => {
        const { file, value } = e.target;
        const list = [...inputList];
        list[index][file] = value;
        setInputList(list);
    };


    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    // console.log("Title ", title);
    // console.log("description ", convertedContent);
    // console.log("unit_price ", unit_price);
    // console.log("total_items ", total_items);
    // console.log("keywords ", keywords);
    // console.log("image ", image);

    const createMarketplace = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
    
        formData.append('title', title)
        formData.append('description', convertedContent)
        formData.append('unit_price', unit_price)
        formData.append('total_items', total_items)
        formData.append('keywords', keywords)
        formData.append('image', image)



        axios.post(`/api/admin/marketplace/store`, formData).then(res => {
            if(res.data.status === 200)
            {
                console.log('Done');
                setTitle('')
                setUnitprice('')
                setItems('')
                setKeywords('')

                swal("Welcome",res.data.message,"success");
            }
        });
    
        // await axios.post(`/api/admin/marketplace/store`, formData).then(({data})=>{
        //   console.log('Done ', data);
        //   setTitle('');

        // }).catch(({response})=>{
        //   console.log("Error ", response);
        // })
    }
    

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
                    
                    <form onSubmit={createMarketplace}>


                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Title</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' value={title} onChange={(event)=>{
                              setTitle(event.target.value)}} />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Keyword</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' value={keywords} onChange={(event)=>{
                              setKeywords(event.target.value)}} />
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
                                        <input type="number" className="form-control input-gray" value={total_items} onChange={(event)=>{
                              setItems(event.target.value)}} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-2 text-white">
                                        <p className="ms-4">Price</p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="number" className="form-control input-gray" value={unit_price} onChange={(event)=>{
                              setUnitprice(event.target.value)}}  />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white">Image</p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='file' onChange={changeHandler} />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-11">
                                <button className="mt-2 btn btn-danger" size="lg" block="block" type="submit">
                                    Save
                                </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProductFromMarketPlace; 