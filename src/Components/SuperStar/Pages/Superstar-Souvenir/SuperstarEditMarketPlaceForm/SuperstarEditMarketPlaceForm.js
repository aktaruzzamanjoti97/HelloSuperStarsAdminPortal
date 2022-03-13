import axios from 'axios';
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const SuperstarEditMarketPlaceForm = () => {

    const [convertedContent, setConvertedContent] = useState(null);
    const { id } = useParams();

    console.log("ID is ", id);

    const [title, setTitle] = useState("")
    const [unit_price, setUnitPrice] = useState("")
    const [total_items, setTotalItems] = useState("")
    const [keywords, setKeywords] = useState("")
    const [sellingItems, setSellingItems] = useState("")
    const [image, setImage] = useState()
    const [description, setDescription] = useState("")

    console.log("Partha Title ", image);

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

    useEffect(() => {
        axios.get(`/api/star/marketplace/product-edit/${id}`).then(res => {
        // console.log('res ', res.data.approved);
            if(res.data.status === 200)
            {
                setTitle(res.data.editData.title);
                setUnitPrice(res.data.editData.unit_price);
                setTotalItems(res.data.editData.total_items);
                setImage(res.data.editData.image);
                setKeywords(res.data.editData.keywords);
                setSellingItems(res.data.editData.total_selling);
                setDescription(res.data.editData.description);
            }
        });
    
    }, []);


    const handleOnChange = (e) => {
        setImage(e.target.files[0]);
    };

        
    const storeStarMarketplace = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
    
        formData.append('title', title)
        formData.append('description', convertedContent)
        formData.append('unit_price', unit_price)
        formData.append('total_items', total_items)
        formData.append('sellingItems', sellingItems)
        formData.append('keywords', keywords)
        if(image!==null){
            formData.append('image', image)
        }

        axios.post(`/api/star/marketplace/product-store/${id}`, formData).then(res => {
            if(res.data.status === 200)
            {
                console.log('Done');

                swal("Welcome",res.data.message,"success");
            }
        });
    
    }



    return (
        <div className="AS m-3">


            <div className="greetingsFormBorder">
                <div className="greetingsPadding addMeetUpPadding">
                    <div className="d-flex">
                        <div className="addIconGreetings">
                            <i style={{ color: '#ffc107' }} class="far fa-plus-square mx-2"></i>
                        </div>
                        <h3 className="text-warning text-bold">Edit Product</h3>
                    </div>
                    <form onSubmit={storeStarMarketplace}>


                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white"><big>Title</big></p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' value={title} onChange={(event)=>{
                              setTitle(event.target.value)
                            }} />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white"><big>Keyword</big></p>
                            </div>
                            <div className="col-md-11">
                                <input className='form-control input-gray' type='text' value={keywords} onChange={(event)=>{
                              setKeywords(event.target.value)
                            }} />
                            </div>
                        </div>
                        
                        {/* 
                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white"><big>Status</big></p>
                            </div>
                            <div className="col-md-11">
                                <select className="form-select input-gray text-light" aria-label="Default select example">
                                    <option selected>--Select Status--</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div> */}

                        <div className="row my-4">
                            <div className="col-md-1 text-white">
                                <p><big>Description</big></p>
                            </div>
                            <div className="col-md-11">

                                <CKEditor
                                    editor={ ClassicEditor }
                                    data={description}
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setConvertedContent(data)
                                        // console.log( { data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                        </div>


                        <div className="row my-4">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3 text-white">
                                        <p><big>Total Units</big></p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="number" className="form-control input-gray" value={total_items} onChange={(event)=>{
                              setTotalItems(event.target.value)
                            }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-2 text-white">
                                        <p className="ms-4"><big>Price</big></p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="number" className="form-control input-gray" value={unit_price} onChange={(event)=>{
                              setUnitPrice(event.target.value)
                            }} />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row my-4">
                            <div className="col-md-2">
                                <p className="text-white"><big>Total Selling Items</big></p>
                            </div>
                            <div className="col-md-10">
                                <input className='form-control input-gray' type='text' value={sellingItems} onChange={(event)=>{
                              setSellingItems(event.target.value)
                            }} />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-1">
                                <p className="text-white"><big>Image</big></p>
                            </div>
                            <div className="col-md-6">
                                <input className='form-control input-gray' onChange={handleOnChange} type='file' />
                            </div>
                            <div className="col-md-5">
                            <img src={`http://localhost:8000/${image}`} style={{border: "3px solid #555", borderRadius:"50%", width:"100px", height:"100px"}} />
                            </div>
                        </div>


                        <div className="row my-4">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-11">
                                <button type='submit' className='btn btn-danger'>Update</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default SuperstarEditMarketPlaceForm;