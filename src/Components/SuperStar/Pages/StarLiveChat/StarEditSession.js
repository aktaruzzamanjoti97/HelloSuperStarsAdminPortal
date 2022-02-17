import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";
// import './AddSessionTextEditor.css';


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import moment from 'moment';
import './StarContent.css'


import Nav from "./Nav";

export default function AddSession(props) {
  let bas_url ="http://localhost:8000/"
  const history = useHistory();

  const [event, setEvent] = useState([]);

 
  const [convertedContent, setConvertedContent] = useState("")

  const [imagedata, setImagedata] = useState("");

  const [registerInput, setRegister] = useState({
    id:"",
    title: "",
    description: "",
    date: "",
    start_time: "",
    end_time: "",
    fee: "",
    error_list: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChange = (file) => {
    //setFile(URL.createObjectURL(file[0]));
    setImagedata(file[0]);
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    console.log(registerInput.description);

    const fData = new FormData();

    fData.append("image", imagedata);
    fData.append("title", registerInput.title);
    fData.append("description", convertedContent);
    fData.append("date", registerInput.date);
    fData.append("start_time", registerInput.start_time);
    fData.append("end_time", registerInput.end_time);
    fData.append("fee", registerInput.fee);
    fData.append("id", registerInput.id);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/star/update_live_session`, fData).then((res) => {

        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          history.push(`/superstar/live-chat/pending-session/details/${registerInput.id}`);
        } else {
          //setModalShow(true);
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  useEffect(() => {
    let isMounted = true;

    const event_id = props.match.params.id;

    axios.get(`/api/star/livechat_event_details/${event_id}`).then((res) => {
      if (isMounted) {
        if (res.data.status === 200) {
          setRegister(res.data.event);
          //setEditorState(res.data.event.description);
          console.log("info", res.data.event.description);
        }
      }
    });
  }, [props.match.params.id, history]);

  return (
    <>
      <Nav></Nav>

      <div
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="Modal-js-body">
          <div className="container">
            <form
              className="p-3"
              onSubmit={registerSubmit}
              id="input_form"
              encType="multipart/form-data"
            >
              <div className="form-group row my-4">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Purpose of live
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control form-control-sm input-in-lv-ch"
                    placeholder="write here.."
                    onChange={handleInput}
                    name="title"
                    value={registerInput.title}
                  />
                </div>
              </div>
              <div className="form-group row my-4">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Instruction
                </label>
                <div className="col-sm-7">
                

                  <CKEditor
                    editor={ ClassicEditor }
                    data={registerInput.description}
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
              <div className="form-group row my-3">
              <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                 
                </label>
                <div className="col-sm-3 file-x-i">
                  
                      <img src={bas_url+registerInput.banner} alt="" className="edit-banner "/>
                </div>
              </div>
              <div className="form-group row my-3">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Banner
                </label>
            
                <div className="col-sm-3 file-x-i">
                  <input
                    type="file"
                    className="form-control form-control-sm input-in-lv-ch"
                    onChange={(e) => handleChange(e.target.files)}
                    id="image"
                    name="image"
                  />
                </div>
              </div>

              <div className="form-group row my-4">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Date 
                </label>
                <div className="col-sm-3">
                  <input
                    type="date"
                    className="form-control form-control-sm input-in-lv-ch"
                    onChange={handleInput}
                    name="date"
                    value={moment(registerInput.date).format("YYYY-MM-DD")}
                  
                  />
                </div>
              </div>

              <div className="form-group row my-3 text-warning">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Time 
                </label>
                <div className="col-sm-3">
                  <input
                    type="time"
                    className="form-control form-control-sm input-in-lv-ch"
                    onChange={handleInput}
                    name="start_time"
                    value={moment(registerInput.start_time).format('hh:mm:ss')}
                  />
                </div>{" "}
                To
                <div className="col-sm-3">
                  <input
                    type="time"
                    className="form-control form-control-sm input-in-lv-ch"
                    onChange={handleInput}
                    name="end_time"
                    value={moment(registerInput.end_time).format('hh:mm:ss')}
                  />
                </div>
              </div>

              <div className="form-group row my-3">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  Per mnt
                </label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control form-control-sm input-in-lv-ch"
                    placeholder="1200 BDT"
                    onChange={handleInput}
                    name="fee"
                    value={registerInput.fee}
                  />
                </div>
              </div>

              <div className="form-group row my-3">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                  <button
                    className="btn btn-warning w-100 text-dark con-text-bfo"
                    type="submit"
                  >
                    Confirm
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
