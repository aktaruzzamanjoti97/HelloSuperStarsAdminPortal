import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
import './AddSessionTextEditor.css';

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



export default function AddSession(props) {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  function onEditorStateChange(editorState) {
      setEditorState(editorState);
  }

  const [imagedata, setImagedata] = useState('');

  const [registerInput, setRegister] = useState({
    title: '',
    description: '',
    fees: '',
    error_list: []
});

  const handleInput = (e) => {
    const {name,value}=e.target;
    setRegister((prev)=>{
        return({...prev,[name]:value});
    })
    // e.persist();
    // setRegister({...registerInput, [e.target.name]: e.target.value});
}


const handleChange = (file) => {
    //setFile(URL.createObjectURL(file[0]));
    setImagedata(file[0]);
}

  const registerSubmit = (e) => {
    e.preventDefault();

    //alert(registerInput.first_name);

    const fData = new FormData();

    fData.append('image', imagedata);
    fData.append('title', registerInput.title);
    fData.append('description', registerInput.description);
    fData.append('fees', registerInput.fees);


    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/add_live_session`, fData).then(res => {
            if(res.data.status === 200)
            {
                //history.push('/superstar-admin/superstars');


                // document.getElementById('input_form').reset();   
                swal("Success",res.data.message,"success");

            }
            else{
                //setModalShow(true);
                setRegister({ ...registerInput,error_list: res.data.validation_errors });
            }
        });
    });

    
}



return (
<div {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
  
  <div className="Modal-js-body">
    <div className="container">
      <form className="p-3" onSubmit={registerSubmit} id="input_form" encType="multipart/form-data">

        <div className="form-group row my-4">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Purpose of live
          </label>
          <div className="col-sm-7">
            <input type="text" className="form-control form-control-sm input-in-lv-ch"
              placeholder="write here.." onChange={handleInput} name='title' value={registerInput.title}/>
          </div>
        </div>

        <div className="form-group row my-4">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Instruction
          </label>
          <div className="col-sm-7">
          <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                  />
          </div>
        </div>

        
        <div className="form-group row my-3">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Banner
          </label>
          <div className="col-sm-3 file-x-i">
            <input type="file" className="form-control form-control-sm input-in-lv-ch" onChange={(e) => handleChange(e.target.files)} id="image" name="image"/>
          </div>
        </div> 

        <div className="form-group row my-4">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Date
          </label>
          <div className="col-sm-3">
            <input type="date" className="form-control form-control-sm input-in-lv-ch"
               onChange={handleInput} name='date' value={registerInput.date}/>
          </div>
        </div>

        <div className="form-group row my-3 text-warning">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Time
          </label>
          <div className="col-sm-3">
            <input type="time" className="form-control form-control-sm input-in-lv-ch" />
          </div> to
          <div className="col-sm-3">
            <input type="time" className="form-control form-control-sm input-in-lv-ch" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Per mnt
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control form-control-sm input-in-lv-ch"
              placeholder="1200 BDT" onChange={handleInput} name='fees' value={registerInput.fees}/>
          </div>
        </div>

        <div className="form-group row my-3">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            <Link to='/superstar-admin/live-chat/chat-star-profile'><button className="btn btn-warning w-100 text-dark con-text-bfo">
            Confirm
          </button></Link>

          
          
          </label>
        </div>
      </form>

    </div>
  </div>

</div>
);
}
