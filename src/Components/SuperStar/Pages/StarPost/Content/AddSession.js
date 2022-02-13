import axios from "axios";
import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useEffect, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './AddSessionTextEditor.css';




export default function AddSession(props) {
  const history = useHistory();

  const [inputFieldList, setInputFieldList] = useState([{  
    title: '',
  description: '',
  date: '',
  start_time: '',
  end_time: '',
  fee: '',
  star_id: '',
  image: ''
 }])


 const handleRemoveClick = (index) => {
  const fieldList = [...inputFieldList];
        fieldList.splice(index, 1);
        setInputFieldList(fieldList);
 }

 

  // Editor Funtionalities //
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
    //console.log(convertedContent);
  };
  // End Editor Functionalies //


  const [imagedata, setImagedata] = useState('');
  const [starList, setStarList] = useState([]);


  const [registerInput, setRegister] = useState({
    title: '',
    description: '',
    video: '',
    type: '',
    star_id: '',
    error_list: []
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => {
      return ({ ...prev, [name]: value });
    })
    // e.persist();
    // setRegister({...registerInput, [e.target.name]: e.target.value});
  }


  // Fetch Stars Added By Admin
  useEffect(() => {

    axios.get(`/api/admin/star_list`).then(res => {

      if (res.status === 200) {
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

    // console.log(registerInput.description);


    const fData = new FormData();

    fData.append('image', imagedata);
    fData.append('title', registerInput.title);
    fData.append('star_id', registerInput.star_id);
    fData.append("description", convertedContent);
    fData.append('video', registerInput.video);
    fData.append('type', registerInput.type);


    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/admin/add_simple_post`, fData).then(res => {
        if (res.data.status === 200) {
          // document.getElementById('input_form').reset();   
          swal("Success", res.data.message, "success");
          history.push('superstar-admin/post/pending');
        }
        else {
          //setModalShow(true);
          setRegister({ ...registerInput, error_list: res.data.validation_errors });
        }
      });
    });
  }



  return (
    <>
    {inputFieldList.map((x, i) => {
      return (
        <div {...props} className="my-4" size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

        <div className="Modal-js-body">
          <div className="container">
            <form className="p-3" onSubmit={registerSubmit} id="input_form" encType="multipart/form-data">

              <div className="form-group row my-4">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch">
                  Select Star
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
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Title
                </label>
                <div className="col-sm-7">
                  <input type="text" className="form-control form-control-sm input-in-lv-ch"
                    placeholder="write here.." onChange={handleInput} name='title' value={registerInput.title} />
                </div>
              </div>


              <div className="form-group row my-4">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Description
                </label>
                <div className="col-sm-7">

                  <Editor
                    name="description"
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                  />

                </div>
              </div>


              <div className="form-group row my-3">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Banner
                </label>
                <div className="col-sm-3 file-x-i">
                  <input type="file" className="form-control form-control-sm input-in-lv-ch" onChange={(e) => handleChange(e.target.files)} id="image" name="image" />
                </div>
              </div>

              <div className="form-group row my-4">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Video
                </label>
                <div className="col-sm-7">
                  <input type="text" className="form-control form-control-sm input-in-lv-ch"
                    placeholder="write here.." onChange={handleInput} name='video' value={registerInput.video} />
                </div>
              </div>

              

              <div className="form-group row my-4">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Type
                </label>
                <div className="col-sm-7">
                  <select onChange={handleInput} name="type" className="form-control reply-control input-overlay" value={registerInput.type}>
                    <option className="text-whaite" value="">Choose One</option>
                      <option className="text-whaite" value='free'>Free</option>
                      <option className="text-whaite" value='paid'>Paid</option>
                  </select>
                </div>
              </div>

              <div className="form-group row my-3">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  <button className="btn btn-warning w-100 text-dark con-text-bfo" type="submit">
                    Confirm
                  </button>



                </label>
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  <button onClick={(i) => handleRemoveClick(i)} className="btn btn-danger w-100 text-dark con-text-bfo" type="submit">
                    Remove Event
                  </button>
                </label>
              </div>
            </form>

          </div>
        </div>

      </div>
      )
    })}
     
     
    </>
  );
}