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
  const [starList, setStarList] = useState([]);


  const [registerInput, setRegister] = useState({
    title: '',
    description: '',
    date: '',
    start_time: '',
    end_time: '',
    fee: '',
    star_id: '',
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


 // Fetch Dtars Added By Admin
 useEffect(() => {

  axios.get(`/api/star_list/`).then(res =>{

    if(res.status === 200)
    {
      setStarList(res.data.category);
      console.log(res.data.category);
    }
  });
}, []);



const handleChange = (file) => {
    //setFile(URL.createObjectURL(file[0]));
    setImagedata(file[0]);
}

  const registerSubmit = (e) => {
    e.preventDefault();

    console.log(registerInput.description);


    const fData = new FormData();

    fData.append('image', imagedata);
    fData.append('title', registerInput.title);
    fData.append('star_id', registerInput.star_id);
    fData.append('description', registerInput.description);
    fData.append('date', registerInput.date);
    fData.append('start_time', registerInput.start_time);
    fData.append('end_time', registerInput.end_time);
    fData.append('fee', registerInput.fee);


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
          Select Stars
          </label>
          <div className="col-sm-7">
            <select onChange={handleInput} name="star_id" className="form-control reply-control input-overlay" value={registerInput.star_id}>
                <option className="text-whaite" value="">Choose One</option>
                {starList.map((user, index) => (
                <option className="text-whaite" value={user.id}>{user.first_name} {user.last_name}</option>
                ))}
            </select>
          </div>
        </div>
        

        <div className="form-group row my-4">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Instruction
          </label>
          <div className="col-sm-7">
         {/* <Editor
                    //editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    // onEditorStateChange={onEditorStateChange}
                    
                  />
         */}
         <textarea type="text" className="form-control form-control-sm input-in-lv-ch"
         placeholder="instruction write here.." onChange={handleInput} name='description' value={registerInput.description}/>
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
            <input type="time" className="form-control form-control-sm input-in-lv-ch" onChange={handleInput} name='start_time' value={registerInput.start_time}/>
          </div> To
          <div className="col-sm-3">
            <input type="time" className="form-control form-control-sm input-in-lv-ch" onChange={handleInput} name='end_time' value={registerInput.end_time}/>
          </div>
        </div>

        <div className="form-group row my-3">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Per mnt
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control form-control-sm input-in-lv-ch"
              placeholder="1200 BDT" onChange={handleInput} name='fee' value={registerInput.fee}/>
          </div>
        </div>

        <div className="form-group row my-3">
          <label  className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            <button className="btn btn-warning w-100 text-dark con-text-bfo" type="submit">
            Confirm
          </button>

          
          
          </label>
        </div>
      </form>

    </div>
  </div>

</div>
);
}
